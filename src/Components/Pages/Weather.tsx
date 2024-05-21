import { useState } from "react";
import styled from "styled-components";

import type { GeoLocation } from "@/Types";
import { Search } from "../Search";
import { WeatherInfo } from "../WeatherInfo";
import { BORDER_RADIUS, COLORS } from "@/Constants/theme";
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background-color: ${COLORS.white};
  gap: 1rem;
`;

const Sidebar = styled.div`
  width: 4rem;
  border-radius: ${BORDER_RADIUS.lg};
  background-color: ${COLORS.grey};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SearchNWeather = styled.div`
  width: 60%;
`;
const Forcast = styled.div`
  width: 40%;
  padding: 1.5rem;
  border-radius: ${BORDER_RADIUS.lg};
  background-color: ${COLORS.grey};
`;
export const Weather = () => {
  const [geoLocation, setGeoLocation] = useState<GeoLocation>({
    latitude: 22,
    longitude: 79,
  });
  return (
    <Wrapper>
      <Sidebar>sidbar</Sidebar>
      <SearchNWeather>
        <Search setGeoLocation={(val) => setGeoLocation(val)} />
        <WeatherInfo location={geoLocation} />
      </SearchNWeather>
      <Forcast></Forcast>
    </Wrapper>
  );
};
