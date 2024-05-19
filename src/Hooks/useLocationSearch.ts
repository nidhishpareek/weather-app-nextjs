// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// export const useCitySearch = async (city: string) => {
//   // if (!city) return;
//   const getCity = async () => await axios.get(`${API_URL}/search?name=${city}`);
//   const {
//     isLoading,
//     error,
//     data: cityData,
//     refetch,
//   } = useQuery<{ data: Response }>({
//     queryKey: [city],
//     queryFn: getCity,
//     enabled: !!city,
//   });
// };
