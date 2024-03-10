import React from "react";

import {
  HeaderContainer,
  HeaderTimer,
  HeaderHour,
  HeaderIcon,
} from "./styled";

import { getFormattedDate, getFormattedTime } from "src/utils";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderTimer>
          <time>{ getFormattedDate() }</time>
          <HeaderHour>{ getFormattedTime() }</HeaderHour>
        </HeaderTimer>
        <HeaderIcon to="/" className="fa fa-home"></HeaderIcon>
        <HeaderIcon to="/buscas" className="fa-solid fa-clock-rotate-left"></HeaderIcon>
      </HeaderContainer>
    </>
  );
};