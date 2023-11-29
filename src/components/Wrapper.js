import { Col, Container, Row } from "react-bootstrap";
import "../styles/Wrapper.css";
import Right from "./Right";
import Left from "./left";
import SearchInput from "./SearchInput";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherProvider";

const Wrapper = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="wrapper py-5">
      <Container>
        <SearchInput />
        {weather.length !== 0 && (
          <Row className="mt-4">
            <Col md={4}>
              <Left />
            </Col>
            <Col md={8}>
              <Right />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Wrapper;
