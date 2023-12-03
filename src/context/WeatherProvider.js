import { createContext, useState } from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [hourlyForecast, setHourlyForecast] = useState({});
  const [dailyForecast, setDailyForecast] = useState({});

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        hourlyForecast,
        setHourlyForecast,
        dailyForecast,
        setDailyForecast,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
