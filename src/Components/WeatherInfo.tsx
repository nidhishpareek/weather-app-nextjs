import axios from "axios";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";

import type { GeoLocation } from "@/app/Types";
import { WEATHER_DATA_URL, getWeatherQueryParam } from "@/app/Constants";
import { WeatherDataResponse } from "@/app/Types/weatherInfo";
import { WeatherIcon } from "./WeatherIcon";

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
  const dailydata = weatherData?.data.daily;

  // const ob = convertToPairs(hourlydata)

  //   console.log("geoLocation", location);
  console.log("weatherData", weatherData);
  return (
    <div>
      <div>
        <div>Today&apos;s Forecast</div>

        <div className="flex overflow-y-scroll">
          {hourlyData?.time.map((time, index) => {
            return (
              <div key={time}>
                <p>{dayjs(time).format("hh:mm A")}</p>
                <WeatherIcon
                  isDay={hourlyData.is_day[index]}
                  weatherCode={hourlyData.weather_code[index]}
                />
                <div>asdf{hourlyData.is_day[index]}</div>
                <div>{hourlyData.temperature_180m[index]}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div>Air conditions</div>
        <div>
          <div>
            <div className="h2">Real Feel</div>
            <div></div>
          </div>
          <div>
            <div>Wind</div>
            <div></div>
          </div>
          <div>
            <div>Chance of Rain</div>
            <div></div>
          </div>
          <div>
            <div>UV Index</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
