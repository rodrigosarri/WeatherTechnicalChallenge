import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SearchesTitle = styled.h2`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--color-frosty-white);
  line-height: 24px;
  font-size: 1.25rem;
  margin-bottom: 16px;
`;

export const SearchesIcon = styled.i`
  opacity: 0.5;
`;

export const SearchesList = styled.ul`
  color: var(--color-frosty-white);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 70px);
  overflow: auto;
`;

export const SearchesListItem = styled.li`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  border-bottom: solid 1px var(--color-pixie-dust-plum);
  font-size: 0.75rem;
  line-height: 21px;
`;

export const SearchesLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 0 8px 16px;
`;

export const SearchesDescriptionList = styled.dl`
  display: flex;
  flex-direction: column;
`;

export const SearchesDescriptionItem = styled.dt`
  color: var(--color-pixie-dust-plum);
  font-size: 1rem;
`;