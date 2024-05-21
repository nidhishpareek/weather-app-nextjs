import { BORDER_RADIUS, COLORS } from "@/Constants/theme";
import styled from "styled-components";

export const SearchWrapper = styled.div`
  width: 100%;
  min-height: 4rem;
  position: relative;
`;

export const SearchBar = styled.input`
  width: 100%;
  border-radius: ${BORDER_RADIUS.md};
  background-color: ${COLORS.grey};
  border: 0px;
  padding: 0.5rem 1rem;
  &:focus {
  }
`;
export const SearchResults = styled.div`
  position: absolute;
  top: 3rem;
  width: 100%;
  background-color: ${COLORS.white};
  z-index: 10;
`;
export const Result = styled.div`
  padding: 1rem;
  border: 1px solid ${COLORS.grey};
  cursor: pointer;
  max-height: 20rem;
  overflow-x: scroll;
`;
export const ErrorText = styled.p`
  display: block;
  color: red;
  padding-left: 0.5rem;
`;
