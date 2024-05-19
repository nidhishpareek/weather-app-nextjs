import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import type { GeoLocation, CityData, SearchCityResponse } from "@/app/Types";
import { useDebouncing } from "@/Hooks/useDebouncing";
import { CITY_API_URL } from "@/app/Constants";

export const Search = ({
  setGeoLocation,
}: {
  setGeoLocation: (val: GeoLocation) => void;
}) => {
  const { value: city, onDebounce } = useDebouncing();

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
  // console.log(cityData?.data?.results);
  const onCityClick = (result: CityData) =>
    setGeoLocation({ latitude: result.latitude, longitude: result.longitude });

  return (
    <div>
      <input
        height={"100px"}
        color="red"
        type="text"
        onChange={(val) => onDebounce(val.target.value)}
      />
      <div>{isNoCityFound ? "No city found" : ""}</div>
      <div>
        {cityData?.data?.results?.map((result) => (
          <div key={result.id} onClick={() => onCityClick(result)}>
            {result.name}, {result.admin1}, {result.country}
          </div>
        ))}
      </div>
    </div>
  );
};
