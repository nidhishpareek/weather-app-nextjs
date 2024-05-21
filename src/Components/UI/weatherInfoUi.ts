import styled from "styled-components";
import { BORDER_RADIUS, COLORS, media } from "@/Constants/theme";

export const TodaysForecast = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  scroll-behavior: smooth;
  width: 100%;
  gap: 1rem;
`;

export const TodaysDetailsCard = styled.section`
  border-radius: ${BORDER_RADIUS.lg};
  background-color: ${COLORS.grey};
  padding: 1.5rem;
`;

export const HourlyWeatherWrapper = styled.div`
  padding: 0.75rem;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 8rem;
  &::after {
    content: "";
    background-color: ${COLORS.borderGrey};
    height: 90%;
    align-self: center;
    width: 1px;
    position: absolute;
    right: -0.5rem;
  }
`;

export const Temperature = styled.h4`
  font-weight: 600;
`;

export const Time = styled.span`
  color: ${COLORS.darkGrey};
`;

export const WeatherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AirConditionsCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`;

export const AirCondition = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`;

export const CurrentWeather = styled.div`
  padding-inline: 1.5rem;
  min-height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.tablet`
    padding-inline: 1rem;
  `}
`;

export const CurrentTempCity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
`;
export const CurrentTemp = styled.h1`
  font-weight: 700;
`;

export const CurrentCity = styled.h2`
  font-weight: 600;
`;

export const SecondaryText = styled.p`
  color: ${COLORS.darkGrey};
`;
