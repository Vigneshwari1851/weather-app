const API_KEY = "17e9568bca9d4f75ba8184337240812";
const BASE_URL = "http://api.weatherapi.com/v1/";

/**
 * fetches weather data from WeatherAPI
 * @param location
 * @returns containing the current weather related data
 */
export const fetchWeatherData = async (location: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}forecast.json?key=${API_KEY}&q=${location}&days=7`
    );

    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }

    const data = await response.json();
    const todayName = new Date().toLocaleDateString(undefined, {
      weekday: "long",
    });

    return {
      city: data.location.name,
      date: data.location.localtime.split(" ")[0],
      currentWeather: {
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        windSpeed: data.current.wind_mph,
        humidity: data.current.humidity,
      },
      greeting: getGreetingMessage(data.location.localtime),
      time: data.location.localtime,
      forecast: data.forecast.forecastday.map((day: any) => {
        const dayName = new Date(day.date).toLocaleDateString(undefined, {
          weekday: "long",
        });
        return {
          day: dayName === todayName ? "Today" : dayName,
          temp: day.day.avgtemp_c,
          condition: day.day.condition.text,
        };
      }),
      hourlyForecast: data.forecast.forecastday[0].hour
        .slice(-6)
        .map((hour: any) => ({
          hour: new Date(hour.time).toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
          }),
          temp: hour.temp_c,
          condition: hour.condition.text,
        })),
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch weather data. Please try again later.");
  }
};

/**
 * greeting message based on the time of day
 * @param localtime
 * @returns greeting message
 */
const getGreetingMessage = (localtime: string): string => {
  const hour = new Date(localtime).getHours();
  if (hour < 12) return "Good Morning!";
  if (hour < 18) return "Good Afternoon!";
  return "Good Evening!";
};
