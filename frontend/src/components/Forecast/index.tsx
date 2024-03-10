import React, { FC, useState } from "react";

import { ForecastProps } from "./interface";

import {
  ForecastWrapper,
  ForecastTitle,
  ForecastDayWrapper,
  ForecastDay,
  ForecastDayWeather,
  ForecastDayIcon,
  ForecastDayWeek,
  ForecastDayTemperature,
  ForecastDayWind,
} from "./styled";

import { Spinner } from "src/components";
import { getDayOfWeekAbbreviation } from "src/utils";

const iconUrl = process.env.REACT_APP_ICON_URL;

export const Forecast: FC<ForecastProps> = ({
  isLoading,
  weatherForecasts,
  onSelectingDay,
}) => {
  const [dtTxt, setDtTxt] = useState<string>();

  const handlerOnClick = (dt_txt: string): void => {
    setDtTxt(dt_txt);

    if (onSelectingDay) {
      onSelectingDay(dt_txt);
    }
  };

  return (
    <>
      <ForecastWrapper>
        {!isLoading && weatherForecasts.length > 0 && (
          <>
            <ForecastTitle>Previsão para cinco dias</ForecastTitle>
            <ForecastDayWrapper>
              {weatherForecasts.map(
                (
                  {
                    main_temp,
                    weather_icon,
                    weather_description,
                    main_temp_min,
                    main_temp_max,
                    dt_txt,
                  },
                  index
                ) => (
                  <ForecastDay to="#" onClick={() => handlerOnClick(dt_txt)} key={index} $active={dtTxt === dt_txt}>
                    <ForecastDayWeather>
                      {iconUrl && (
                        <ForecastDayIcon
                          src={`${iconUrl}${weather_icon}@2x.png`}
                          alt={weather_description}
                          title={weather_description}
                        />
                      )}
                      <ForecastDayWeek>
                        {getDayOfWeekAbbreviation(dt_txt)}
                      </ForecastDayWeek>
                    </ForecastDayWeather>
                    <ForecastDayTemperature>
                      {main_temp}º C
                    </ForecastDayTemperature>
                    <ForecastDayWind>
                      <span>Min: {main_temp_min}º C</span>
                      <span>Max: {main_temp_max}º C</span>
                    </ForecastDayWind>
                  </ForecastDay>
                )
              )}
            </ForecastDayWrapper>
          </>
        )}
        {isLoading && <Spinner />}
      </ForecastWrapper>
    </>
  );
};
