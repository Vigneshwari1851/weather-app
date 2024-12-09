export interface CurrentWeather {
  temp: number;
  condition: string;
  windSpeed: number;
  humidity: number;
}
export interface ForecastDay {
  day: string;
  temp: number;
  condition: string;
}

export interface HourlyForecast {
  hour: string;
  temp: number;
  condition: string;
}

export interface WeatherDashboardProps {
  city: string;
  date: string;
  greeting: string;
  time: string;
  currentWeather: CurrentWeather;
  forecast: ForecastDay[];
  hourlyForecast: HourlyForecast[];
}
