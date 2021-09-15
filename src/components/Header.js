import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Navbar,
} from "react-bootstrap";
import logo from "../logo.svg";
function Header() {
  return (
    <div>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block
            align-top"
              alt="React logo"
            />
            Dashbord
          </Navbar.Brand>
          <InputGroup className="mb-3">
            <FormControl placeholder="Search" />
            <Button variant="outline-secondary" id="button-addon1">
              Search
            </Button>
          </InputGroup>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
