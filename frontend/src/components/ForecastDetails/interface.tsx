import { Weather } from "src/services/interface";

export interface ForecastDetailsProps {
  cityName?: string;
  isShow?: boolean;
  details?: Weather;
}