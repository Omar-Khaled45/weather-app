import { Container } from "react-bootstrap";
import SearchInput from "./SearchInput";
import Info from "./Info";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherProvider";

const Wrapper = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="wrapper py-5">
      <Container>
        <SearchInput />
        {weather.length !== 0 && <Info />}
      </Container>
    </div>
  );
};

export default Wrapper;
