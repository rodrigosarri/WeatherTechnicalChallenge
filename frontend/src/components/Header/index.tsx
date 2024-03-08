import React from "react";

import {
  HeaderContainer,
  HeaderTimer,
  HeaderHour,
  HeaderIcon,
  HeaderImg
} from "./styled";

import brandLogo from "src/assets/images/linx.png";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderTimer>
          <time>08/12</time>
          <HeaderHour>13:00h</HeaderHour>
        </HeaderTimer>
        <HeaderIcon className="fa fa-home"></HeaderIcon>
        <HeaderImg src={brandLogo} alt="" title="" width={50} />
      </HeaderContainer>
    </>
  );
};