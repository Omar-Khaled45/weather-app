import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherProvider";
import { today, weekdays, months } from "../date/Date";

const Left = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="left">
      <div className="details">
        <h2 className="name mb-3">
          <FontAwesomeIcon icon={faLocationDot} size="xs" className="me-2" />
          {weather.name}
        </h2>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt=""
        />
        <h2 className="temp">
          {Math.round(weather.main.temp)}
          <span>&deg;C</span>
        </h2>
        <h3 className="state">{weather.weather[0].main}</h3>
        <div className="date mb-3">
          Today, {today.getDate()} {weekdays[today.getDay()]}{" "}
          {months[today.getMonth()]}
        </div>
      </div>
    </div>
  );
};

export default Left;
