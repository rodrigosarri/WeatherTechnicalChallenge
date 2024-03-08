export interface onSelectCityParams {
  cityName: string;
  lat: number,
  lon: number
}

export interface CitySelectorProps {
  onSelectCity: ({ cityName, lat, lon }: onSelectCityParams) => void;
}
