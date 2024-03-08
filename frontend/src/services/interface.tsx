/* eslint-disable @typescript-eslint/no-explicit-any */
export interface QueryStringProps {
  q?: string;
  [key: string]: any;
}

export interface City {
  url: string;
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface Weather {
  url: string;
  lat: number;
  lon: number;
  dt: number;
  main_temp: number;
  main_feels_like: number;
  main_temp_min: number;
  main_temp_max: number;
  main_pressure: number;
  main_sea_level: number;
  main_grnd_level: number;
  main_humidity: number;
  main_temp_kf: number;
  weather_id: number;
  weather_main: string;
  weather_description: string;
  weather_icon: string;
  clouds_all: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  visibility: number;
  pop: number;
  rain_3h: number;
  sys_pod: string;
  dt_txt: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface getWeatherParam {
  lat: number;
  lon: number;
}