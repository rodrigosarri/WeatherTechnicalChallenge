from rest_framework import viewsets

from api.quickstart.serializers import SearchSerializar, CitySerializer, WeatherSerializer
from api.quickstart.models import Search, City, Weather

import requests
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from django.utils import timezone
import datetime

def fetch_external_api_city(q):
    url = f"http://api.openweathermap.org/geo/1.0/direct?q={q}&appid={settings.OPENWEATHERMAP_API_KEY}"
    response = requests.get(url)

    if response.status_code == 200:
        transformed_data = [
            {
                "name": item["name"],
                "lat": item["lat"],
                "lon": item["lon"],
                "country": item["country"],
                "state": item.get("state", "")
            } for item in response.json()
        ]

        return transformed_data
    else:
        return None

def fetch_external_api_weather(lat, lon):
    url = f"http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&lang=pt_br&units=metric&appid={settings.OPENWEATHERMAP_API_KEY}"

    response = requests.get(url)

    if response.status_code == 200:
        data_list = response.json()["list"]

        transformed_data_list = []

        for data in data_list:
            transformed_data = {
                "dt": data["dt"],
                "main_temp": data["main"]["temp"],
                "main_feels_like": data["main"]["feels_like"],
                "main_temp_min": data["main"]["temp_min"],
                "main_temp_max": data["main"]["temp_max"],
                "main_pressure": data["main"]["pressure"],
                "main_sea_level": data["main"]["sea_level"],
                "main_grnd_level": data["main"]["grnd_level"],
                "main_humidity": data["main"]["humidity"],
                "main_temp_kf": data["main"]["temp_kf"],
                "weather_id": data["weather"][0]["id"],
                "weather_main": data["weather"][0]["main"],
                "weather_description": data["weather"][0]["description"],
                "weather_icon": data["weather"][0]["icon"],
                "clouds_all": data["clouds"]["all"],
                "wind_speed": data["wind"]["speed"],
                "wind_deg": data["wind"]["deg"],
                "wind_gust": data.get("wind", {}).get("gust", 0),
                "visibility": data["visibility"],
                "pop": data.get("pop", 0),
                "rain_3h": data.get("rain", {}).get("3h", 0) if "rain" in data else 0,
                "sys_pod": data["sys"]["pod"],
                "dt_txt": data["dt_txt"]
            }

            transformed_data_list.append(transformed_data)

        return transformed_data_list
    else:
        return None

class SearchViewSet(viewsets.ModelViewSet):
    queryset = Search.objects.all()
    serializer_class = SearchSerializar

    def get_queryset(self):
        queryset = Search.objects.all()
        filterable_fields = ["lat", "lon", "user_agent", "platform", "screen_width", "screen_height", "language", "time_zone", "user_ip"]

        for field in filterable_fields:
            value = self.request.query_params.get(field)
            if value is not None:
                queryset = queryset.filter(**{field: value})

        queryset = queryset.order_by("-createdAt")
        return queryset

class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer

    def get_queryset(self):
        q = self.request.query_params.get("q", None)

        if q is not None:
            matching_cities = City.objects.filter(name__icontains = q)

            search_data = {}
            search_data["q"] = q
            optional_params = ["userAgent", "platform", "screen_width", "screen_height", "language", "timeZone", "user_ip"]

            for param in optional_params:
                value = self.request.query_params.get(param)

                if value is not None:
                    search_data[param] = value

            if not matching_cities.exists():
                external_data = fetch_external_api_city(q)

                if external_data:
                    for city_data in external_data:
                        search_data["lat"] = city_data["lat"]
                        search_data["lon"] = city_data["lon"]

                        City.objects.create(**city_data)
                        Search.objects.create(**search_data)

                    queryset = City.objects.filter(name__icontains = q)
                    queryset = queryset.order_by("name")

                    return queryset

            queryset = City.objects.filter(name__icontains = q)
            queryset = queryset.order_by("name")

            return queryset
        else:
            queryset = City.objects.all().order_by("-createdAt")
            return queryset

class WeatherViewSet(viewsets.ModelViewSet):
    serializer_class = WeatherSerializer

    def get_queryset(self):
        queryset = Weather.objects.all()
        lat = self.request.query_params.get("lat")
        lon = self.request.query_params.get("lon")

        today = timezone.localtime().date()
        start_of_today = timezone.make_aware(datetime.datetime.combine(today, datetime.time.min))
        start_of_tomorrow = start_of_today + datetime.timedelta(days = 1)

        if lat and lon:
            queryset = queryset.filter(lat = lat, lon = lon, createdAt__gte = start_of_today, createdAt__lt = start_of_tomorrow)

            if not queryset.exists():

                fetched_data = fetch_external_api_weather(lat, lon)

                if fetched_data:
                    Weather.objects.filter(lat = lat, lon = lon).delete()

                    for data in fetched_data:
                        dt_txt_str = data["dt_txt"]
                        dt_naive = datetime.datetime.strptime(dt_txt_str, "%Y-%m-%d %H:%M:%S")
                        dt_aware = timezone.make_aware(dt_naive, timezone.get_default_timezone())

                        Weather.objects.create(
                            lat = lat,
                            lon = lon,
                            dt = data["dt"],
                            main_temp = data["main_temp"],
                            main_feels_like = data["main_feels_like"],
                            main_temp_min = data["main_temp_min"],
                            main_temp_max = data["main_temp_max"],
                            main_pressure = data["main_pressure"],
                            main_sea_level = data["main_sea_level"],
                            main_grnd_level = data["main_grnd_level"],
                            main_humidity = data["main_humidity"],
                            main_temp_kf = data["main_temp_kf"],
                            weather_id = data["weather_id"],
                            weather_main = data["weather_main"],
                            weather_description = data["weather_description"],
                            weather_icon = data["weather_icon"],
                            clouds_all = data["clouds_all"],
                            wind_speed = data["wind_speed"],
                            wind_deg = data["wind_deg"],
                            wind_gust = data.get("wind_gust", None),
                            visibility = data["visibility"],
                            pop = data.get("pop", 0),
                            rain_3h = data.get("rain_3h", None),
                            sys_pod = data["sys_pod"],
                            dt_txt = dt_aware
                        )

                queryset = Weather.objects.filter(lat = lat, lon = lon, createdAt__gte = start_of_today, createdAt__lt = start_of_tomorrow)
                queryset = queryset.order_by("createdAt")

        return queryset

    def post(self, request, *args, **kwargs):
        serializer = WeatherSerializer(data = request.data, many = isinstance(request.data, list))

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status = status.HTTP_201_CREATED)

        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
