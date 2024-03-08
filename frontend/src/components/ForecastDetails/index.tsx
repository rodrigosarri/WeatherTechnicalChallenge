import React, { FC } from "react";

import { ForecastDetailsProps } from "./interface";

import {
  ForecastDetailsWrapper,
  ForecastDetailsHeader,
  ForecastDetailsBody,
  ForecastDetailsFooter,
  ForecastDetailsDay,
  ForecastDetailsDayItem,
  ForecastDetailsDayTime,
  ForecastDetailsDayCity,
  ForecastDetailsDayIcon,
  ForecastDetailsDayDegrees,
  ForecastDetailsDaySup,
  ForecastDetailsDayInfo,
  ForecastDetailsDayTable,
  ForecastDetailsDayCell,
} from "./styled";

const iconUrl = process.env.REACT_APP_ICON_URL;

import { getDayOfWeekAbbreviation, getFormattedTime, getCurrentMonthAndDay } from "src/utils";

export const ForecastDetails: FC<ForecastDetailsProps> = ({
  cityName,
  isShow = false,
  details,
}) => {
  return (
    <>
      {isShow && details && (
        <ForecastDetailsWrapper>
          <ForecastDetailsHeader>
            <ForecastDetailsDay>
              <ForecastDetailsDayItem>
                <ForecastDetailsDayTime>{ getDayOfWeekAbbreviation(details.dt_txt, false) }</ForecastDetailsDayTime>
                <ForecastDetailsDayCity>{ cityName }</ForecastDetailsDayCity>
              </ForecastDetailsDayItem>
              {iconUrl && <ForecastDetailsDayIcon src={`${iconUrl}${details.weather_icon}@2x.png`} alt={details.weather_description} title={details.weather_description} />}
            </ForecastDetailsDay>
          </ForecastDetailsHeader>
          <ForecastDetailsBody>
            <ForecastDetailsDayDegrees>
              {details.main_temp}º{" "}
              <ForecastDetailsDaySup>C</ForecastDetailsDaySup>
            </ForecastDetailsDayDegrees>
            <ForecastDetailsDayInfo>
              <span>{details.weather_description}</span>
              <span>{getFormattedTime()} { getCurrentMonthAndDay() }</span>
            </ForecastDetailsDayInfo>
          </ForecastDetailsBody>
          <ForecastDetailsFooter>
            <ForecastDetailsDayTable>
              <tbody>
                <ForecastDetailsDayCell>
                  <td>Velocidade do vendo</td>
                  <td>{details.wind_speed}</td>
                </ForecastDetailsDayCell>
                <ForecastDetailsDayCell>
                  <td>Humidade</td>
                  <td>{details.main_humidity}</td>
                </ForecastDetailsDayCell>
                <ForecastDetailsDayCell>
                  <td>Pressão</td>
                  <td>{details.main_pressure}</td>
                </ForecastDetailsDayCell>
                <ForecastDetailsDayCell>
                  <td>Chuva</td>
                  <td>{details.rain_3h}</td>
                </ForecastDetailsDayCell>
                <ForecastDetailsDayCell>
                  <td>Geo coords</td>
                  <td>
                    [{details.lat}, {details.lon}]
                  </td>
                </ForecastDetailsDayCell>
              </tbody>
            </ForecastDetailsDayTable>
          </ForecastDetailsFooter>
        </ForecastDetailsWrapper>
      )}
    </>
  );
};
