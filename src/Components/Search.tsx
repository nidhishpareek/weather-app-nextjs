import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import styled from "styled-components";

import type { GeoLocation, CityData, SearchCityResponse } from "@/Types";
import { useDebouncing } from "@/Hooks/useDebouncing";
import { CITY_API_URL } from "@/Constants";
import { BORDER_RADIUS, COLORS } from "@/Constants/theme";

const SearchWrapper = styled.div`
  width: 100%;
  height: 4rem;
  position: relative;
`;

const SearchBar = styled.input`
  width: 100%;
  border-radius: ${BORDER_RADIUS.md};
  background-color: ${COLORS.grey};
  border: 0px;
  padding: 0.5rem 1rem;
  &:focus {
  }
`;
const SearchResults = styled.div`
  position: absolute;
  top: 3rem;
  width: 100%;
  background-color: ${COLORS.white};
  /* border: 1px solid red; */
`;
const Result = styled.div`
  padding: 1rem;
  border: 1px solid ${COLORS.grey};
  cursor: pointer;
  max-height: 20rem;
  overflow-x: scroll;
`;
const ErrorText = styled.p`
  display: block;
  color: red;
  padding-left: 0.5rem;
`;
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
    setGeoLocation({ latitude: result.latitude, longitude: result.longitude });
    clearValue();
  };

  return (
    <SearchWrapper>
      <SearchBar
        type="text"
        placeholder="Search for city"
        onChange={(val) => onDebounce(val.target.value)}
      />
      <ErrorText>asf{isNoCityFound ? "No city found" : ""}</ErrorText>
      <SearchResults>
        {city &&
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
