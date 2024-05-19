import { WEATHER_CODES } from "@/app/Constants";
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
    <div>
      <Image
        src={weather?.image}
        alt={weather?.description}
        width={100}
        height={100}
      />
    </div>
  );
};
