import React, { FC } from "react";
import { SpinnerContainer, SpinnerItem } from "./styled";

export const Spinner: FC = () => {
  return (
    <SpinnerContainer aria-label="loading">
      <SpinnerItem />
    </SpinnerContainer>
  );
};
