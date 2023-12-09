import { Container } from "react-bootstrap";
import SearchInput from "./SearchInput";
import Info from "./Info";

const Wrapper = () => {
  return (
    <div className="wrapper py-5">
      <Container>
        <SearchInput />
        <Info />
      </Container>
    </div>
  );
};

export default Wrapper;
