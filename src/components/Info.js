import { Row, Col, Stack } from "react-bootstrap";
import "../styles/info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherProvider";

const Info = () => {
  const { weather, hourlyForecast, dailyForecast } = useContext(WeatherContext);

  const currentDate = new Date(weather.dt * 1000);

  console.log(dailyForecast);

  return (
    <Row className="text-main info">
      <Col md={8}>
        <Stack
          direction="horizontal"
          className="main-info justify-content-between align-items-center"
        >
          <div className="text">
            <h2 className="fw-bold">{weather.name}</h2>
            <p className="text-sec fw-semibold">
              Today, {currentDate.getDate()}{" "}
              {currentDate.toLocaleString([], { month: "short" })}
            </p>
            <p className="degree mt-4 mb-0">
              {Math.floor(weather.main.temp)}&deg;C
            </p>
            <p className="text-sec description fw-semibold">
              {weather.weather[0].main}
            </p>
          </div>
          <div className="icon">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </Stack>
        <Stack className="p-4 mb-4 today-forecast">
          <h6 className="text-uppercase text-sec fw-bold mb-4">
            Today's forecast
          </h6>
          <div className="list d-flex justify-content-center align-items-center">
            {hourlyForecast.length > 0 &&
              hourlyForecast.map((forecast, index) => {
                return (
                  <div key={index}>
                    <h5>
                      {new Date(forecast.dt * 1000).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </h5>
                    <img
                      src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                      alt=""
                    />
                    <p className="text-white fw-bold">
                      {Math.trunc(forecast.main.temp)}&deg;C
                    </p>
                  </div>
                );
              })}
          </div>
        </Stack>
        <Stack className="p-4 mb-4 air-conditions">
          <h6 className="text-uppercase text-sec fw-bold mb-0">
            Air Conditions
          </h6>
          <Row gap={3}>
            <Col xs={6} className="mt-4">
              <div className="condition d-flex">
                <FontAwesomeIcon
                  className="mt-1 text-sec fw-semibold"
                  icon={faTemperatureThreeQuarters}
                />
                <div className="ms-2">
                  <h5 className="m-0 text-sec fw-semibold">Real Feel</h5>
                  <p className="mb-0 fw-bold">
                    {Math.floor(weather.main.feels_like)}&deg;C
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={6} className="mt-4">
              <div className="condition d-flex">
                <FontAwesomeIcon
                  className="mt-1 text-sec fw-semibold"
                  icon={faWind}
                />
                <div className="ms-2">
                  <h5 className="m-0 text-sec fw-semibold">Wind</h5>
                  <p className="mb-0 fw-bold">{weather.wind.speed}m/s</p>
                </div>
              </div>
            </Col>
            <Col xs={6} className="mt-4">
              <div className="condition d-flex">
                <FontAwesomeIcon
                  className="mt-1 text-sec fw-semibold"
                  icon={faDroplet}
                />
                <div className="ms-2">
                  <h5 className="m-0 text-sec fw-semibold">Humidity</h5>
                  <p className="mb-0 fw-bold">{weather.main.humidity}%</p>
                </div>
              </div>
            </Col>
            <Col xs={6} className="mt-4">
              <div className="condition d-flex">
                <FontAwesomeIcon
                  className="mt-1 text-sec fw-semibold"
                  icon={faCompass}
                />
                <div className="ms-2">
                  <h5 className="m-0 text-sec fw-semibold">Air Pressure</h5>
                  <p className="mb-0 fw-bold">{weather.main.pressure}hPa</p>
                </div>
              </div>
            </Col>
          </Row>
        </Stack>
      </Col>
      <Col md={4}>
        <div className="seven-days">
          <h6 className="text-sec text-uppercase fw-bold">7-Days forecast</h6>
          <ul className="list-unstyled">
            {dailyForecast.length > 0 &&
              dailyForecast.map((forecast, index) => {
                return (
                  <li key={index}>
                    <p className="text-sec mb-0">
                      {new Date(forecast.dt * 1000).toLocaleDateString([], {
                        weekday: "short",
                      })}
                    </p>
                    <div className="desc d-flex align-items-center">
                      <img
                        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                        alt=""
                      />
                      <p className="fw-bold mb-0 ms-2">
                        {forecast.weather[0].main}
                      </p>
                    </div>
                    <div className="min-max">
                      <span className="fw-bold text-white">
                        {Math.round(forecast.main.temp_max)}
                      </span>
                      /{Math.round(forecast.main.temp_min)}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </Col>
    </Row>
  );
};

export default Info;
