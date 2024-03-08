import styled from "styled-components";

import { ForecastDayProps } from "./interface";

export const ForecastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media only screen and (max-device-width: 812px) and (orientation: landscape) {
    position: relative;

    width: 100%;
  }
`;

export const ForecastTitle = styled.h3`
  color: var(--color-frosty-white);
  font-weight: var(--weight-semi-bold);
  font-size: 0.75rem;
  margin-bottom: 8px;
`;

export const ForecastDayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  padding: 8px 0;
`;

export const ForecastDay = styled.a<ForecastDayProps>`
  color: var(--color-mystical-grape);
  border: solid 1px var(--color-pixie-dust-plum);
  height: 80px;
  border-radius: 8px;
  flex-direction: column;
  padding: 8px;
  font-size: 0.75rem;
  justify-content: space-around;
  display: flex;
  background-color: var(--color-whimsical-lilac-dream);

  transition: background-color 0.3s ease;

  &:hover,
  &.${({ $active }) => $active ? "active" : ""} {
    background-color: #462A5A;
  }
`;

export const ForecastDayWeather = styled.span`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const ForecastDayIcon = styled.img`
  width: 25px;
  height: 25px;
  display: block;
`;

export const ForecastDayWeek = styled.span`
  color: #75578B;
  font-size: 0.5rem;
`;

export const ForecastDayTemperature = styled.strong`
  flex: 1;
`;

export const ForecastDayWind = styled.span`
  font-size: 0.5rem;
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;