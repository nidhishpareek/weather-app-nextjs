import { GeoLocation } from "@/app/Types";
import { Search } from "../Search";
import { useState } from "react";
import { WeatherInfo } from "../WeatherInfo";

export const Weather = () => {
  const [geoLocation, setGeoLocation] = useState<GeoLocation>();
  return (
    <div>
      <Search setGeoLocation={(val) => setGeoLocation(val)} />
      <WeatherInfo location={geoLocation} />
    </div>
  );
};
