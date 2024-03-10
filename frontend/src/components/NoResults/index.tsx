import React, { FC } from "react";

import { NoResultsProps } from "./interface";

import { NoResultsWrapper, NoResultsWrapperTitle } from "./styled";

export const NoResults: FC<NoResultsProps> = ({
  message = "Não encontramos nenhum resultado para sua pesquisa. Tente ajustar seu termos de pesquisa.",
}) => {
  return (
    <NoResultsWrapper aria-live="polite" aria-relevant="all">
      <NoResultsWrapperTitle>Nenhum resultado encontrado</NoResultsWrapperTitle>
      <p>{message}</p>
    </NoResultsWrapper>
  );
};
