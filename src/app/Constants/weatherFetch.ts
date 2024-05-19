import qs from "qs";
import { GeoLocation } from "../Types";

const dailyFields = [
  "weather_code",
  "temperature_2m_max",
  "temperature_2m_min",
  "apparent_temperature_max",
  "apparent_temperature_min",
  "uv_index_max",
  "precipitation_sum",
  "rain_sum",
  "showers_sum",
  "wind_speed_10m_max",
  "wind_gusts_10m_max",
];
const hourlyProperties = [
  "temperature_2m",
  "apparent_temperature",
  "precipitation_probability",
  "rain",
  "weather_code",
  "wind_direction_180m",
  "temperature_180m",
  "is_day",
];
export const getWeatherQueryParam = (location?: GeoLocation) =>
  qs.stringify({
    ...location,
    hourly: hourlyProperties.join(","),
    daily: dailyFields.join(","),
    timezone: "Asia/Calcutta",
  });
