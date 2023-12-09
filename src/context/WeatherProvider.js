import { createContext, useState } from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [error, setError] = useState(null);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        hourlyForecast,
        setHourlyForecast,
        dailyForecast,
        setDailyForecast,
        error,
        setError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
