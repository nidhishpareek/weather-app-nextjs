type DailyWeatherData = {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  apparent_temperature_max: number[];
  apparent_temperature_min: number[];
  uv_index_max: number[];
  precipitation_sum: number[];
  rain_sum: number[];
  showers_sum: number[];
  wind_speed_10m_max: number[];
  wind_gusts_10m_max: number[];
};

type DailyWeatherUnit = {
  time: string;
  weather_code: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  apparent_temperature_max: string;
  apparent_temperature_min: string;
  uv_index_max: string;
  precipitation_sum: string;
  rain_sum: string;
  showers_sum: string;
  wind_speed_10m_max: string;
  wind_gusts_10m_max: string;
};
type HourlyData = {
  time: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
  precipitation_probability: number[];
  rain: number[];
  weather_code: number[];
  wind_direction_180m: number[];
  temperature_180m: number[];
  is_day: (0 | 1)[];
};
type HourDataUnits = {
  time: string; // Assuming ISO 8601 format for time
  temperature_2m: string; // Assuming temperature in Celsius (°C)
  apparent_temperature: string; // Assuming temperature in Celsius (°C)
  precipitation_probability: string; // Assuming percentage (%)
  rain: string; // Assuming rainfall in millimeters (mm)
  weather_code: string; // Assuming WMO code for weather
  wind_direction_180m: string; // Assuming wind direction in degrees (°)
  temperature_180m: string; // Assuming temperature in Celsius (°C)
};

export type WeatherDataResponse = {
  elevation: number;
  generationtime_ms: number;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;

  daily: DailyWeatherData;
  daily_units: DailyWeatherUnit;
  hourly: HourlyData;
  hourly_units: HourDataUnits;
};
