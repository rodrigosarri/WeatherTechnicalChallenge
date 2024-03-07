from django.urls import include, path
from rest_framework import routers

from api.quickstart import views

router = routers.DefaultRouter()
router.register(r"search", views.SearchViewSet)
router.register(r"city", views.CityViewSet)
router.register(r"weather", views.WeatherViewSet, basename="weather")

urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]

urlpatterns += router.urls