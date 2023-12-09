import { useContext, useState } from "react";
import "../styles/searchInputs.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { WeatherContext } from "../context/WeatherProvider";

const SearchInput = () => {
  const [value, setValue] = useState("");

  const { setWeather, setHourlyForecast, setDailyForecast, setError } =
    useContext(WeatherContext);

  // Handle Search For City Name
  const handleSearch = () => {
    if (value !== "") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=04f3e6e293e07406a0bb2e69c383ec5a`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("City not Found");
          }

          return res.json();
        })
        .then((data) => {
          setWeather(data);
        })
        .catch((error) => {
          setError(error);
        });

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&APPID=04f3e6e293e07406a0bb2e69c383ec5a`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("City Not Found");
          }

          return res.json();
        })
        .then((data) => {
          // Extract Hourly Forecast From The API
          const hourlyData = data?.list.slice(0, 5);
          setHourlyForecast(hourlyData);

          // Extract Daily Forecast From The API
          const dailyData = data.list.reduce((acc, el) => {
            const time = new Date(el.dt * 1000).getHours();

            if (time >= 12 && time < 15) {
              acc.push(el);
            }

            return acc;
          }, []);

          setDailyForecast(dailyData);
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  // Handle Click on Search Button
  const handleClick = () => {
    handleSearch();
  };

  // Handle Click on Enter Key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Search for Cities"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <Button
        onClick={handleClick}
        variant="outline-secondary"
        id="button-addon2"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </InputGroup>
  );
};

export default SearchInput;
