import { BORDER_RADIUS, COLORS, media } from "@/Constants/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  min-height: 100%;
  gap: 1rem;
  ${media.desktop`
    flex-direction: column;
    padding: 1rem;
  `}
`;

export const SidebarUi = styled.div`
  width: 6rem;
  border-radius: ${BORDER_RADIUS.lg};
  background-color: ${COLORS.grey};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  color: ${COLORS.darkGrey};
  ${media.desktop`
    display:none;
  `};
`;

export const SearchNWeather = styled.div`
  width: calc(60% - 3rem);
  ${media.desktop`
    width: 100%;
    padding: 0rem;
  `}
`;

export const ForecastUI = styled.div`
  width: calc(40% - 3rem);
  padding: 2rem;
  border-radius: ${BORDER_RADIUS.lg};
  background-color: ${COLORS.grey};
  margin-top: 4rem;

  ${media.desktop`
    width: 100%;
    margin-top: 0rem;
    padding: 1rem;
  `}
`;

export const WrapperHeadings = styled.h6`
  color: ${COLORS.darkGrey};
  font-weight: 600;
`;
