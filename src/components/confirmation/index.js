import { useState, useGlobal } from "reactn";
import { Modal, Button, Form } from "react-bootstrap";

export default ({ show, handleClose, userName, deleteAvatar, behavior }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };
  const [validated, setValidated] = useState(false);
  const [loginForm, setLoginForm] = useState({
    password: "",
    userName: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      areCredentialsCorrect(loginForm, userName);
    } else {
      if (loginForm.userName != userName) {
        alert("this avatar is not yours");
        return;
      }
      if (areCredentialsCorrect(loginForm, userName)) {
        if (behavior === "delete") deleteAvatar();
      } else {
        alert("Credentials incorrect");
      }
    }
  };

  const areCredentialsCorrect = (login) => {
    return users.find((user) => {
      return user.userName === userName && user.password === login.password;
    });
  };

  const [users, setUsers] = useGlobal("users");
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Please enter your credentials</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              required
              name="userName"
              onChange={handleChange}
              value={loginForm.userName}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              name="password"
              onChange={handleChange}
              value={loginForm.password}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
