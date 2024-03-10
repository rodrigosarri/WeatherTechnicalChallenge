import React, { useState, useEffect } from "react";

import { Search } from "src/services/interface";

import {
  SearchesContainer,
  SearchesTitle,
  SearchesIcon,
  SearchesList,
  SearchesListItem,
  SearchesLink,
  SearchesDescriptionList,
  SearchesDescriptionItem,
} from "./styled";

import { Header, Wrapper, Spinner, NoResults } from "src/components";
import { getFormattedDate, getFormattedTime } from "src/utils";

import { getSearches } from "src/services";

export const Searches = () => {
  const [searchesData, setSearchesData] = useState<Search[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [noResults, setNoResults] = useState<boolean>(false);

  const getSearchesData = async () => {
    setIsLoading(true);

    const { results } = await getSearches({});

    if (results) {
      if (results.length > 0) {
        setNoResults(false);
        setSearchesData(results);
      } else {
        setNoResults(true);
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getSearchesData();
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <SearchesContainer>
          <SearchesTitle>Buscas recentes</SearchesTitle>
          {!isLoading && searchesData.length > 0 && (
            <SearchesList>
              {searchesData.map(({ q, createdAt }, index) => (
                <SearchesListItem key={`Searches_${index}`}>
                  <SearchesLink to={`/?q=${q}`}>
                    <SearchesIcon className="fa-solid fa-clock-rotate-left"></SearchesIcon>
                    <SearchesDescriptionList>
                      <SearchesDescriptionItem>{q}</SearchesDescriptionItem>
                      <dd>
                        {getFormattedDate(new Date(createdAt))}{" "}
                        {getFormattedTime(new Date(createdAt))}
                      </dd>
                    </SearchesDescriptionList>
                  </SearchesLink>
                </SearchesListItem>
              ))}
            </SearchesList>
          )}
          {isLoading && <Spinner />}
          {noResults && (
            <NoResults message="Você não fez nenhuma busca recente" />
          )}
        </SearchesContainer>
      </Wrapper>
    </>
  );
};
