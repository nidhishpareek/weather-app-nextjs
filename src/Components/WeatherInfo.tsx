import dayjs from "dayjs";
import { FaDroplet, FaSun, FaTemperatureFull, FaWind } from "react-icons/fa6";

import { WeatherDataResponse } from "@/Types/weatherInfo";
import { WeatherIcon } from "./WeatherIcon";
import {
  AirCondition,
  AirConditionsCard,
  WrapperHeadings,
  TodaysDetailsCard,
  WeatherInfoWrapper,
  TodaysForecast,
  HourlyWeatherWrapper,
  Time,
  Temperature,
  CurrentWeather,
  CurrentTempCity,
  CurrentTemp,
  CurrentCity,
  SecondaryText,
} from "./UI";
import { GeoLocation } from "@/Types";
import { COLORS } from "@/Constants/theme";
import { upperFirst } from "lodash";

export const WeatherInfo = ({
  weatherData,
  geoLocation,
}: {
  weatherData?: WeatherDataResponse;
  geoLocation?: GeoLocation;
}) => {
  const hourlyData = weatherData?.hourly;
  const dailyData = weatherData?.daily;
  const dailyUnits = weatherData?.daily_units;
  const currentData = weatherData?.current;
  const currentUnits = weatherData?.current_units;
  const airConditions = [
    {
      title: "Real Feel",
      value: `${currentData?.apparent_temperature ?? ""}  ${
        currentUnits?.apparent_temperature ?? ""
      }`,
      icon: FaTemperatureFull,
    },
    {
      title: "Wind",
      value: `${currentData?.wind_speed_10m ?? ""}  ${
        currentUnits?.wind_speed_10m ?? ""
      }`,
      icon: FaWind,
    },
    {
      title: "Chance of Rain",
      value: `${currentData?.precipitation_probability ?? ""}  ${
        currentUnits?.precipitation_probability ?? ""
      }`,
      icon: FaDroplet,
    },
    {
      title: "UV Index",
      value: `${dailyData?.uv_index_max?.[0] ?? ""}  ${
        dailyUnits?.uv_index_max ?? ""
      }`,
      icon: FaSun,
    },
  ];

  return (
    <WeatherInfoWrapper>
      <CurrentWeather>
        <CurrentTempCity>
          <div>
            <CurrentCity>{upperFirst(geoLocation?.city)}</CurrentCity>
            <SecondaryText>
              Chances of rain: {currentData?.precipitation_probability}
            </SecondaryText>
          </div>
          <CurrentTemp>
            {currentData?.temperature_2m}
            {currentUnits?.temperature_2m}
          </CurrentTemp>
        </CurrentTempCity>
        <WeatherIcon
          isDay={currentData?.is_day ? 1 : 0}
          weatherCode={currentData?.weather_code || 0}
          height={180}
          width={180}
        />
      </CurrentWeather>
      <TodaysDetailsCard>
        <WrapperHeadings>TODAY&apos;S FORECAST</WrapperHeadings>

        <TodaysForecast>
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
        </TodaysForecast>
      </TodaysDetailsCard>
      <TodaysDetailsCard>
        <WrapperHeadings>Air conditions</WrapperHeadings>
        <AirConditionsCard>
          {airConditions.map((condition) => (
            <AirCondition key={condition.title}>
              <condition.icon
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: COLORS.darkGrey,
                }}
              />
              <div>
                <h5 style={{ color: COLORS.darkGrey }}>{condition.title}</h5>
                <h3>{condition.value}</h3>
              </div>
            </AirCondition>
          ))}
        </AirConditionsCard>
      </TodaysDetailsCard>
    </WeatherInfoWrapper>
  );
};
