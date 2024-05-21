import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import type { GeoLocation, CityData, SearchCityResponse } from "@/Types";
import { useDebouncing } from "@/Hooks/useDebouncing";
import { CITY_API_URL } from "@/Constants";
import {
  ErrorText,
  Result,
  SearchBar,
  SearchResults,
  SearchWrapper,
} from "./UI/searchBarUi";

export const Search = ({
  setGeoLocation,
}: {
  setGeoLocation: (val: GeoLocation) => void;
}) => {
  const { value: city, onDebounce, clearValue } = useDebouncing();

  const getCity = async () =>
    await axios.get(`${CITY_API_URL}/search?name=${city}`);
  const {
    data: cityData,
    error,
    isLoading,
  } = useQuery<{ data: SearchCityResponse }>({
    queryKey: [city],
    queryFn: getCity,
    enabled: !!city,
  });

  const isNoCityFound = city && !isLoading && !cityData?.data?.results?.length;

  const onCityClick = (result: CityData) => {
    setGeoLocation({
      latitude: result.latitude,
      longitude: result.longitude,
      city: city,
    });
    clearValue();
  };
  const shouldShowResults = city && city !== "India";

  return (
    <SearchWrapper>
      <SearchBar
        type="text"
        placeholder="Search for city"
        onChange={(val) => onDebounce(val.target.value)}
      />
      <ErrorText>{isNoCityFound ? "No city found" : ""}</ErrorText>
      <SearchResults>
        {shouldShowResults &&
          cityData?.data?.results?.map((result) => (
            <Result key={result.id} onClick={() => onCityClick(result)}>
              {[result.name, result.admin1, result.country]
                .filter(Boolean)
                .join(",")}
            </Result>
          ))}
      </SearchResults>
    </SearchWrapper>
  );
};
