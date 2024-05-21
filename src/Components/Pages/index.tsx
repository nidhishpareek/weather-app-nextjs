import { useState } from "react";

import type { GeoLocation } from "@/Types";
import { Search } from "../Search";
import { WeatherInfo } from "../WeatherInfo";
import { SearchNWeather, Sidebar, Wrapper } from "../UI";
import { WEATHER_DATA_URL, getWeatherQueryParam } from "@/Constants";
import axios from "axios";
import { WeatherDataResponse } from "@/Types/weatherInfo";
import { useQuery } from "@tanstack/react-query";
import { Forecast } from "../Forcast";

export const Weather = () => {
  const [geoLocation, setGeoLocation] = useState<GeoLocation>({
    latitude: 22,
    longitude: 79,
    city: "India",
  });
  const getWeatherData = async () =>
    await axios.get(
      `${WEATHER_DATA_URL}/forecast?${getWeatherQueryParam(geoLocation)}`
    );
  const {
    data: weatherData,
    error,
    isLoading,
  } = useQuery<{ data: WeatherDataResponse }>({
    queryKey: [geoLocation],
    queryFn: getWeatherData,
    enabled: !!geoLocation?.latitude && !!geoLocation?.longitude,
  });
  return (
    <Wrapper>
      <Sidebar>sidbar</Sidebar>
      <SearchNWeather>
        <Search setGeoLocation={(val) => setGeoLocation(val)} />
        <WeatherInfo
          weatherData={weatherData?.data}
          geoLocation={geoLocation}
        />
      </SearchNWeather>
      <Forecast weatherData={weatherData?.data} />
    </Wrapper>
  );
};
