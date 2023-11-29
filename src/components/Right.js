import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherProvider";
import { today, weekdays, months } from "../date/Date";

const Right = () => {
  const { weather, forecast } = useContext(WeatherContext);

  console.log(weather);

  return (
    <div className="right mt-md-0 mt-4">
      <div className="unit">
        <ul className="list-unstyled d-flex justify-content-end mb-0">
          <li className="me-3 active" role="button" data-unit="C">
            &deg;C
          </li>
          <li role="button" data-unit="F">
            &deg;F
          </li>
        </ul>
      </div>
      <h3 className="text-start mb-3">Today's Highlights</h3>
      <Row className="mb-4">
        <Col>
          <div className="highlight">
            <div className="mb-1">Wind Status</div>
            <h2>
              {weather.wind.speed}
              <span>m/s</span>
            </h2>
          </div>
        </Col>
        <Col>
          <div className="highlight">
            <div className="mb-1">Humidity</div>
            <h2>
              {weather.main.humidity}
              <span>%</span>
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <div className="highlight">
            <div className="mb-1">Wind Status</div>
            <h2>
              7<span>mph</span>
            </h2>
          </div>
        </Col>
        <Col>
          <div className="highlight">
            <div className="mb-1">Air Pressure</div>
            <h2>
              {weather.main.pressure}
              <span>hPa</span>
            </h2>
          </div>
        </Col>
      </Row>
      <h3 className="text-start mb-3">Extended Forecast</h3>
      <Row>
        <Col>
          <div className="day-forecast p-2">
            <h6 className="day mb-2">Tomorrow</h6>
            <div className="icon mb-2">
              <FontAwesomeIcon icon={faCloud} size="2x" />
            </div>
            <div className="min-max">16&deg;C 11&deg;C</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Right;
