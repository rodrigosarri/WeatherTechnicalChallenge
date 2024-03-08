import React, { useState, ChangeEvent, FC, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  CitySelectorProps
} from "./interface";

import {
  CitySelectorWrapper,
  CitySelectorTitle,
  CitySelectorStrong,
  CitySelectorInputWrapper,
  CitySelectorInput,
  CitySelectorSearch,
  CitySelectorSuggestionsList,
  CitySelectorSuggestionItem
} from "./styled";

import { City } from "src/services/interface";
import { getCities } from "src/services";

export const CitySelector: FC<CitySelectorProps> = ({
  onSelectCity
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [typingTimeout, setTypingTimeout] = useState<number | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (typingTimeout !== null) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(setTimeout(() => {
      if (value.length >= 5) {
        handlerSearchCity();
      } else if (value.length === 0) {
        setFilteredCities([]);
      }
    }, 2000) as unknown as number);
  };

  const handlerSearchCity = async (): Promise<void> => {
    const { results } = await getCities({ q: searchTerm });
    setFilteredCities(results);
  };

  const handlerSelectCity = ({name, lat, lon}: { name: string, lat: number, lon: number }): void => {
    navigate(`?q=${encodeURIComponent(name)}`, { replace: true });

    setSearchTerm(name);
    setFilteredCities([]);

    onSelectCity({ cityName: name, lat, lon });
  };


  const getWeatherForecasts = async (q: string) => {
    const { results } = await getCities({ q: q });

    if (results) {
      const { name, lat, lon } = results[0];

      handlerSelectCity({ name, lat, lon });
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const q = queryParams.get("q");

    if (q) {
      setSearchTerm(q);
      getWeatherForecasts(q);
    }
  }, [location.search]);

  return (
    <>
      <CitySelectorWrapper>
        <CitySelectorTitle>
          Seja bem vindo
          <CitySelectorStrong>Selecione uma cidade</CitySelectorStrong>
        </CitySelectorTitle>
        <CitySelectorInputWrapper>
          <CitySelectorInput
            placeholder="Pesquisar por cidade"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <CitySelectorSearch className="fa fa-search" onClick={handlerSearchCity} />
          {filteredCities.length > 0 && (
            <CitySelectorSuggestionsList>
              {filteredCities.map(({ name, lat, lon  }, index) => (
                <CitySelectorSuggestionItem key={index} onClick={() => handlerSelectCity({name, lat, lon})}>
                  { name }
                </CitySelectorSuggestionItem>
              ))}
            </CitySelectorSuggestionsList>
          )}
        </CitySelectorInputWrapper>
      </CitySelectorWrapper>
    </>
  );
};