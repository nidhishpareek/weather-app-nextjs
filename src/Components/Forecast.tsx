import dayjs from "dayjs";

import { WeatherDataResponse } from "@/Types/weatherInfo";
import { ForecastUI, WrapperHeadings } from "./UI";
import styled from "styled-components";
import { WEATHER_CODES } from "@/Constants";
import { WeatherIcon } from "./WeatherIcon";
import { SearchWrapper } from "./UI/searchBarUi";
import { COLORS, media } from "@/Constants/theme";
const DailyForecast = styled.div`
  padding: 0rem;
  display: flex;
  flex-direction: row;
  gap: 0rem;
`;

const DailyForecastRow = styled.div`
  flex-grow: 1;
`;
const DailyForecastCell = styled.div<{ bottomLine?: boolean }>`
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-inline: 1rem;
  border-bottom: ${({ bottomLine }) =>
    bottomLine && `1px solid ${COLORS.borderGrey}`};
  ${media.tablet`
    min-height: 70px;
    width: 100%;
    margin-top: 0rem;
    padding: 0rem;
    & img{
      width: 4rem;
      height: 4rem;
    }
  `}
`;

export const Forecast = ({
  weatherData,
}: {
  weatherData?: WeatherDataResponse;
}) => {
  const dailyData = weatherData?.daily;
  return (
    <>
      <ForecastUI>
        <WrapperHeadings>7-DAY FORECAST</WrapperHeadings>
        <DailyForecast>
          <DailyForecastRow>
            {dailyData?.time.map((time, index) => {
              return (
                <DailyForecastCell
                  key={time}
                  bottomLine={index !== dailyData?.time.length}
                >
                  {index === 0 ? "Today" : dayjs(time).format("ddd")}
                </DailyForecastCell>
              );
            })}
          </DailyForecastRow>
          <DailyForecastRow>
            {dailyData?.time.map((time, index) => {
              return (
                <DailyForecastCell
                  bottomLine={index !== dailyData?.time.length}
                  key={time}
                >
                  <WeatherIcon
                    weatherCode={dailyData.weather_code[index]}
                    isDay={1}
                  ></WeatherIcon>
                  {
                    WEATHER_CODES[
                      dailyData.weather_code[
                        index
                      ] as keyof typeof WEATHER_CODES
                    ]?.day?.description
                  }
                </DailyForecastCell>
              );
            })}
          </DailyForecastRow>
          <DailyForecastRow>
            {dailyData?.time.map((time, index) => {
              return (
                <DailyForecastCell
                  key={time}
                  bottomLine={index !== dailyData?.time.length}
                >
                  {dailyData.apparent_temperature_max[index]}/
                  {dailyData.apparent_temperature_min[index]}
                </DailyForecastCell>
              );
            })}
          </DailyForecastRow>
        </DailyForecast>
      </ForecastUI>
    </>
  );
};
