from rest_framework import serializers

from api.quickstart.models import Search, City, Weather

class CitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = City
        fields = "__all__"

class SearchSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Search
        fields = "__all__"

class WeatherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Weather
        fields = "__all__"

    def create(self, validated_data):
        if isinstance(validated_data, list):
            return [Weather.objects.create(**item) for item in validated_data]
        return Weather.objects.create(**validated_data)