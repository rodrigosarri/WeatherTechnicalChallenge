import styled from "styled-components";

export const CitySelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 16px;

  @media only screen and (max-device-width: 812px) and (orientation: landscape) {
    position: relative;

    width: 100%;
  }
`;

export const CitySelectorTitle = styled.h2`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--color-frosty-white);
  line-height: 24px;
  font-size: 1.25rem;
`;

export const CitySelectorStrong = styled.strong`
  font-weight: var(--weight-bold);
`;

export const CitySelectorInputWrapper = styled.div`
  position: relative;
`;

export const CitySelectorInput = styled.input`
  color: var(--color-pixie-dust-plum);
  height: 48px;
  border-radius: 16px;
  border: solid 1px var(--color-pixie-dust-plum);
  background: transparent;
  padding: 0 16px;
  font-size: 1.25rem;
  width: 100%;
}
`;

export const CitySelectorSearch = styled.i`
  color: var(--color-pixie-dust-plum);
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
`;

export const CitySelectorSuggestionsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  background: white;
  color: black;
  border-radius: 8px;
  z-index: 1000;
  top: 52px;
  background-color: var(--color-mystic-lavender-shadow);
  color: var(--color-ethereal-lavender);
`;

export const CitySelectorSuggestionItem = styled.li`
  padding: 8px 16px;
  &:hover {
    background-color: var(--color-pixie-dust-plum);
    color: white;
    cursor: pointer;
  }
`;