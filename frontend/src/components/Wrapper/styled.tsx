import styled from "styled-components";

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  @media only screen and (max-device-width: 812px) and (orientation: landscape) {
    flex-direction: row;
    padding-left: 132px;
    gap: 32px;
  }
`;