import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";

function UserForm(prop) {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: name,
      lname: lname,
      email: email,
      id: Math.random().toString(),
    };
    setEmail("");
    setName("");
    setLname("");
    prop.onSaveUserData(userData);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const LnameChangeHandler = (event) => {
    setLname(event.target.value);
  };

  return (
    <Form
      className="p-2 bg-light border"
      onSubmit={submitHandler}
      id="userForm"
    >
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter a valid email address"
          onChange={emailChangeHandler}
          value={email}
        />
      </Form.Group>
      <Form.Group controlId="formName" className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          placeholder="Enter user first name"
          onChange={nameChangeHandler}
          value={name}
        />
      </Form.Group>

      <Form.Group controlId="formLName" className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          placeholder="Enter user last name"
          onChange={LnameChangeHandler}
          value={lname}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UserForm;
