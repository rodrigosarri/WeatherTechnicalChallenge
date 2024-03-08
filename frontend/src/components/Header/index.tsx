import React from "react";

import {
  HeaderContainer,
  HeaderTimer,
  HeaderHour,
  HeaderIcon,
  HeaderImg
} from "./styled";

import brandLogo from "src/assets/images/brand.png";

import { getFormattedDate, getFormattedTime } from "src/utils";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderTimer>
          <time>{ getFormattedDate() }</time>
          <HeaderHour>{ getFormattedTime() }</HeaderHour>
        </HeaderTimer>
        <HeaderIcon className="fa fa-home"></HeaderIcon>
        <HeaderImg src={brandLogo} alt="Brand" title="Brand" width={50} />
      </HeaderContainer>
    </>
  );
};