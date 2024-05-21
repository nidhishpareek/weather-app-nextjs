import { WEATHER_CODES } from "@/Constants";
import Image from "next/image";

export const WeatherIcon = ({
  isDay,
  weatherCode,
  width = 70,
  height = 70,
}: {
  isDay: 0 | 1;
  weatherCode: number;
  width?: number;
  height?: number;
}) => {
  const dayOrNight = isDay ? "day" : "night";
  const weather =
    WEATHER_CODES[weatherCode as keyof typeof WEATHER_CODES]?.[dayOrNight];
  return (
    <Image
      src={weather?.image}
      alt={weather?.description}
      width={width}
      height={height}
    />
  );
};
