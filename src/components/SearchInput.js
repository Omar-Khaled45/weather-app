import "../styles/SearchInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Button, InputGroup, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherProvider";

const SearchInput = () => {
  const { setWeather, setForecast } = useContext(WeatherContext);

  const [value, setValue] = useState("");

  const handleSearch = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=04f3e6e293e07406a0bb2e69c383ec5a`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&APPID=04f3e6e293e07406a0bb2e69c383ec5a`
    )
      .then((res) => res.json())
      .then((data) => setForecast(data));
  };

  return (
    <InputGroup>
      <Form.Control
        placeholder="Enter The City"
        aria-label="Enter The City"
        aria-describedby="basic-addon2"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button id="button-addon2" onClick={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </InputGroup>
  );
};

export default SearchInput;
