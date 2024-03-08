import styled, { keyframes } from "styled-components";

const bottomToTop = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const rightToLeft = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const ForecastDetailsWrapper = styled.div`
  background-color: var(--color-frosty-white);
  display: flex;
  flex: 1;
  border-radius: 8px;
  flex-direction: column;
  padding: 16px;
  justify-content: space-between;
  max-height: 320px;

  animation: ${bottomToTop} 0.5s ease-out forwards;

  @media only screen and (max-device-width: 812px) and (orientation: landscape) {
    animation: ${rightToLeft} 0.5s ease-out forwards;
  }

`;

export const ForecastDetailsHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ForecastDetailsBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  8px;
`;

export const ForecastDetailsFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ForecastDetailsDay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ForecastDetailsDayItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  line-height: 24px;
`;

export const ForecastDetailsDayTime = styled.time`
  display: flex;
  width: 100%;
  font-size: 1rem;
`;

export const ForecastDetailsDayCity = styled.time`
  font-weight: var(--weight-semi-bold);
  font-size: 1.5rem;
`;

export const ForecastDetailsDayIcon = styled.img`
  width: 80px;
  height: 80px;
  display: flex;
`;

export const ForecastDetailsDayDegrees = styled.h2`
  font-size: 3.5rem;
  font-weight: var(--weight-semi-bold);
  align-items: center;
  display: flex;
  text-align: center;
  width: auto;
  justify-content: center;
  position: relative;
`;

export const ForecastDetailsDaySup = styled.sup`
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  right: -20px;
`;

export const ForecastDetailsDayInfo = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75rem;
  color: var(--color-enchanted-plum);
  font-weight: var(--weight-semi-bold);
`;

export const ForecastDetailsDayTable = styled.table`
  font-size: 0.75rem;
`;

export const ForecastDetailsDayCell = styled.tr`
  & td:nth-child(1) {
    text-align: left;
    color: var(--color-midnight-orchid);
    font-weight: var(--weight-semi-bold);
  }

  & td:nth-child(2) {
    text-align: right;
    color: var(--color-frosty-wind);
  }
`;