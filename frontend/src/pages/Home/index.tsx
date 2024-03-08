import React, { useState } from "react";

import { Weather, getWeatherParam } from "src/services/interface";

import { HomeWrapper, HomeContainer } from "./styled";

import {
  Header,
  CitySelector,
  Forecast,
  ForecastDetails,
} from "src/components";

import { getWeather } from "src/services";

export const Home = () => {
  const [isDetails, setIsDetails] = useState<boolean>(false);
  const [isForecastLoading, setIsForecastLoading] = useState<boolean>(false);
  const [forecastData, setForecastData] = useState<Weather[]>([]);
  const [selectedForecast, setSelectedForecast] = useState<Weather>();

  const onSelectingDay = (dtTxt: string) => {
    const find = forecastData.find((forecast) => forecast.dt_txt === dtTxt);

    if (find) {
      setSelectedForecast(find);
      setIsDetails(true);
    }
  };

  const getWeatherForecast = async ({ lat, lon }: getWeatherParam): Promise<void> => {
    setIsForecastLoading(true);
    const { results } = await getWeather({ lat, lon });

    const filteredResults = results.reduce(
      (acc: Weather[], current: Weather) => {
        const currentDate = new Date(current.dt_txt).toDateString();
        if (!acc.find((result) => new Date(result.dt_txt).toDateString() === currentDate)) {
          acc.push(current);
        }

        return acc;
      }, []);

    setForecastData(filteredResults);
    setIsForecastLoading(false);
  };

  return (
    <>
      <Header />
      <HomeWrapper>
        <HomeContainer>
          <CitySelector onSelectCity={getWeatherForecast} />
          <Forecast
            weatherForecasts={forecastData}
            isLoading={isForecastLoading}
            onSelectingDay={onSelectingDay}
          />
        </HomeContainer>
        <ForecastDetails details={selectedForecast} isShow={isDetails} />
      </HomeWrapper>
    </>
  );
};
