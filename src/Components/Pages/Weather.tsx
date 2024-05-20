import { GeoLocation } from "@/app/Types";
import { Search } from "../Search";
import { useState } from "react";
import { WeatherInfo } from "../WeatherInfo";

export const Weather = () => {
  const [geoLocation, setGeoLocation] = useState<GeoLocation>();
  return (
    <div className="flex" style={{ width: "100%", height: "100vh" }}>
      <div className="border border-info border-start-0 rounded-end .sidebar">
        sdafasdf;sdaf
      </div>
      <div>
        <Search setGeoLocation={(val) => setGeoLocation(val)} />
        <WeatherInfo location={geoLocation} />
      </div>
    </div>
  );
};
