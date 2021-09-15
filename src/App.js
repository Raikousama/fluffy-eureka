import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Sidebarlist from "./components/SidebarList";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import { useState } from "react";

const DUMMY_DATA = [
  {
    id: "1",
    name: "Pavan",
    lname: "Moderator",
    email: "67",
  },
  {
    id: "2",
    name: "adasd",
    lname: "Moasdaderator",
    email: "76",
  },
  {
    id: "3",
    name: "gfd",
    lname: "wrqer",
    email: "34",
  },
  {
    id: "4",
    name: "ngsdf",
    lname: "asdfd",
    email: "65",
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_DATA);

  const formSubmitHandler = (newUser) =>
    setUsers((prevUsers) => [...prevUsers, newUser]);

  return (
    <div>
      <Header></Header>
      <Container fluid="xs">
        <Row>
          <Col>
            <Sidebarlist></Sidebarlist>
          </Col>
          <Col xs={6} md={8}>
            <div className="d-grid gap-2">
              {users.length === 0 ? (
                <p>No Users Found!</p>
              ) : (
                <UserTable users={users} />
              )}
              <div>
                <UserForm onSaveUserData={formSubmitHandler}></UserForm>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
