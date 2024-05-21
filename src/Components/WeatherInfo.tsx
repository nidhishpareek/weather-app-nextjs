import axios from "axios";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { FaDroplet, FaSun, FaTemperatureFull, FaWind } from "react-icons/fa6";

import type { GeoLocation } from "@/Types";
import { WEATHER_DATA_URL, getWeatherQueryParam } from "@/Constants";
import { WeatherDataResponse } from "@/Types/weatherInfo";
import { WeatherIcon } from "./WeatherIcon";
import styled from "styled-components";
import { BORDER_RADIUS, COLORS, media } from "@/Constants/theme";

const TodaysForcast = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  scroll-behavior: smooth;
  width: 100%;
  gap: 1rem;
`;
const TodaysDetailsCard = styled.section`
  border-radius: ${BORDER_RADIUS.lg};
  background-color: ${COLORS.grey};
  padding: 1rem;
`;
const TodayDetailsHeading = styled.h6`
  color: ${COLORS.darkGrey};
  font-weight: 600;
`;
const HourlyWeatherWrapper = styled.div`
  padding: 1rem;
  display: flex;
  position: relative;
  flex-direction: column;
  /* gap: 0.25rem; */
  justify-content: center;
  align-items: center;
  min-width: 8rem;
  &::after {
    content: "";
    background-color: black; /* Change color as desired */
    background-color: ${COLORS.darkGrey};
    opacity: 0.5;
    height: 90%;
    align-self: center;
    width: 1px; /* Adjust bar thickness */
    position: absolute;
    /* top: 50%; */
    right: -0.5rem;
    /* transform: translateY(-50%); Center the bar vertically */
  }
`;
const Temperature = styled.h4`
  font-weight: 600;
`;
const Time = styled.span`
  color: ${COLORS.darkGrey};
`;
const WeatherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const AirConditionsCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`;
const AirCondition = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
export const WeatherInfo = ({ location }: { location?: GeoLocation }) => {
  //   console.log({ queryParams });
  const getWeatherData = async () =>
    await axios.get(
      `${WEATHER_DATA_URL}/forecast?${getWeatherQueryParam(location)}`
    );
  const {
    data: weatherData,
    error,
    isLoading,
  } = useQuery<{ data: WeatherDataResponse }>({
    queryKey: [location],
    queryFn: getWeatherData,
    enabled: !!location?.latitude && !!location?.longitude,
  });
  const hourlyData = weatherData?.data.hourly;
  const dailyData = weatherData?.data.daily;
  const currentData = weatherData?.data.current;
  // const ob = convertToPairs(hourlydata)
  const airConditions = [
    {
      title: "Real Feel",
      value: currentData?.apparent_temperature,
      icon: FaTemperatureFull,
    },
    {
      title: "Wind",
      value: currentData?.wind_speed_10m,
      icon: FaWind,
    },
    {
      title: "Chance of Rain",
      value: currentData?.precipitation_probability,
      icon: FaDroplet,
    },
    {
      title: "UV Index",
      value: dailyData?.uv_index_max,
      icon: FaSun,
    },
  ];
  //   console.log("geoLocation", location);
  // console.log("weatherData", weatherData);
  return (
    <WeatherInfoWrapper>
      <TodaysDetailsCard>
        <TodayDetailsHeading>TODAY&apos;S FORECAST</TodayDetailsHeading>

        <TodaysForcast>
          {hourlyData?.time.map((time, index) => {
            return (
              <HourlyWeatherWrapper key={time}>
                <Time>{dayjs(time).format("hh:mm A")}</Time>
                <WeatherIcon
                  isDay={hourlyData.is_day[index]}
                  weatherCode={hourlyData.weather_code[index]}
                />
                <Temperature>{hourlyData.temperature_180m[index]}</Temperature>
              </HourlyWeatherWrapper>
            );
          })}
        </TodaysForcast>
      </TodaysDetailsCard>
      <TodaysDetailsCard>
        <TodayDetailsHeading>Air conditions</TodayDetailsHeading>
        <AirConditionsCard>
          {airConditions.map((condition) => (
            <AirCondition key={condition.title}>
              <condition.icon />
              <div>
                <h5>{condition.title}</h5>
                <div>{condition.value}</div>
              </div>
            </AirCondition>
          ))}
        </AirConditionsCard>
      </TodaysDetailsCard>
    </WeatherInfoWrapper>
  );
};
