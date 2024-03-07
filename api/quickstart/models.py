from django.db import models
import uuid
from django.utils import timezone

class SoftDeletionModel(models.Model):
    class Meta:
        abstract = True

    def delete(self, *args, **kwargs):
        self.deletedAt = timezone.now()
        self.save()

    def undelete(self, *args, **kwargs):
        self.deletedAt = None
        self.save()

class City(SoftDeletionModel):
    class Meta:
        app_label = "api"
        db_table = "cities"

    uuid = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    name = models.CharField(max_length = 255)
    lat = models.FloatField()
    lon = models.FloatField()
    country = models.CharField(max_length = 2)
    state = models.CharField(max_length = 100)
    createdAt = models.DateTimeField(auto_now_add = True)
    updatedAt = models.DateTimeField(auto_now = True)
    deletedAt = models.DateTimeField(blank = True, null = True)

    def __str__(self):
        return f"{self.name}, {self.state}, {self.country}"

class Search(SoftDeletionModel):
    class Meta:
        app_label = "api"
        db_table = "search_history"

    uuid = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    q = models.CharField(max_length = 255)
    userAgent = models.CharField(max_length = 255, blank = True, null = True)
    platform = models.CharField(max_length = 255, blank = True, null = True)
    screen_width = models.PositiveIntegerField(blank = True, null = True)
    screen_height = models.PositiveIntegerField(blank = True, null = True)
    language = models.CharField(max_length = 10, blank = True, null = True)
    timeZone = models.CharField(max_length = 50, blank = True, null = True)
    user_ip = models.GenericIPAddressField()
    createdAt = models.DateTimeField(auto_now_add = True)
    updatedAt = models.DateTimeField(auto_now = True)
    deletedAt = models.DateTimeField(blank = True, null = True)

    def save(self, *args, **kwargs):
        if not self.user_ip:
            self.user_ip = "127.0.0.1"
        super(Search, self).save(*args, **kwargs)

class Weather(SoftDeletionModel):
    class Meta:
        app_label = "api"
        db_table = "weather"

    uuid = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    lat = models.FloatField()
    lon = models.FloatField()
    dt = models.PositiveIntegerField()
    main_temp = models.FloatField()
    main_feels_like = models.FloatField()
    main_temp_min = models.FloatField()
    main_temp_max = models.FloatField()
    main_pressure = models.IntegerField()
    main_sea_level = models.IntegerField()
    main_grnd_level = models.IntegerField()
    main_humidity = models.IntegerField()
    main_temp_kf = models.FloatField()
    weather_id = models.IntegerField()
    weather_main = models.CharField(max_length = 100)
    weather_description = models.CharField(max_length = 255)
    weather_icon = models.CharField(max_length = 50)
    clouds_all = models.IntegerField()
    wind_speed = models.FloatField()
    wind_deg = models.IntegerField()
    wind_gust = models.FloatField(null = True, blank = True)
    visibility = models.IntegerField()
    pop = models.FloatField()
    rain_3h = models.FloatField(null = True, blank = True)
    sys_pod = models.CharField(max_length = 1)
    dt_txt = models.DateTimeField()
    createdAt = models.DateTimeField(auto_now_add = True)
    updatedAt = models.DateTimeField(auto_now = True)
    deletedAt = models.DateTimeField(blank = True, null = True)