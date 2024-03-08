import styled from "styled-components";

export const HeaderContainer = styled.div`
  color: var(--color-frosty-white);
  width: 100%;
  height: 56px;
  display: flex;
  border-radius: 8px;
  background-color: var(--color-wizard-gown);
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 32px;

  @media only screen and (max-device-width: 812px) and (orientation: landscape) {
    transform: rotate(-90deg);
    transform-origin: top left;
    position: absolute;
    top: calc(100% - 8px);
    left: 48px;
    width: calc(100vh - 16px);
    height: 56px;
    padding: 8px;
  }
`;

export const HeaderTimer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 20px;
  align-items: center;
  font-size: 0.75rem;

  @media only screen and (max-device-width: 812px) and (orientation: landscape) {
    transform: rotate(90deg);
    transform-origin: top left;
    position: relative;
    flex-direction: column;
    bottom: 0;
    left: 32px;
    text-align: center;
    line-height: 1rem;
  }
`;

export const HeaderHour = styled.time`
  color: var(--color-pixie-dust-plum);
`;

export const HeaderIcon = styled.i`
  @media only screen and (max-device-width: 812px) and (orientation: landscape) {
    transform: rotate(90deg);
    transform-origin: top left;
    position: relative;
    flex-direction: column;
    bottom: 0;
    left: 32px;
  }
`;

export const HeaderImg = styled.img`
  @media only screen and (max-device-width: 812px) and (orientation: landscape) {
    transform: rotate(90deg);
    transform-origin: top left;
    position: relative;
    flex-direction: column;
    bottom: 12px;
    left: 32px;
  }
`;