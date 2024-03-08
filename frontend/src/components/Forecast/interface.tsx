import { Weather } from "src/services/interface";

export interface ForecastProps {
  isLoading: boolean;
  weatherForecasts: Weather[];
  onSelectingDay?: (dtTxt: string) => void
}

export interface ForecastDayProps {
  $active?: boolean;
}