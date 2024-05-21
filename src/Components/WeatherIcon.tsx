import { WEATHER_CODES } from "@/Constants";
import Image from "next/image";

export const WeatherIcon = ({
  isDay,
  weatherCode,
}: {
  isDay: 0 | 1;
  weatherCode: number;
}) => {
  const dayOrNight = isDay ? "day" : "night";
  const weather =
    WEATHER_CODES[weatherCode as keyof typeof WEATHER_CODES]?.[dayOrNight];
  return (
    <Image
      src={weather?.image}
      alt={weather?.description}
      width={70}
      height={70}
    />
  );
};
