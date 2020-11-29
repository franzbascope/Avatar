import { useState } from "react";
import { useGlobal } from "reactn";
import { Form, Button, Col } from "react-bootstrap";
export default () => {
  const [avatarForm, setAvatarForm] = useState({
    password: "",
    userName: "",
    avatarName: "",
  });
  const [currentPage, setCurrentPage] = useGlobal("currentPage");
  const [validated, setValidated] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useGlobal("currentAvatar");
  const [avatars, setAvatars] = useGlobal("avatars");
  const [users, setUsers] = useGlobal("users");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAvatarForm({ ...avatarForm, [name]: value });
  };
  let { userName, password, avatarName } = avatarForm;

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    } else {
      if (userExists(avatarForm)) {
        alert("User already exists, try a differnt userName");
        return;
      }
      if (avatarNameExists(avatarForm)) {
        alert("Avatar Name already exists");
        return;
      }
      saveUser(avatarForm);
      saveAvatar(avatarForm, currentAvatar);
      setAvatarForm({
        password: "",
        userName: "",
        avatarName: "",
      });
      setCurrentPage("index");
    }
  };

  const saveUser = (avatarForm) => {
    setUsers(
      users.concat({
        userName: avatarForm.userName,
        password: avatarForm.password,
      })
    );
  };

  const saveAvatar = (avatarForm, currentAvatar) => {
    delete avatarForm.password;
    let newAvatar = { ...avatarForm, items: currentAvatar };
    setAvatars(avatars.concat(newAvatar));
  };

  const avatarNameExists = (avatarForm) => {
    return avatars.find((avatar) => {
      return avatar.name === avatarForm.avatarName;
    });
  };

  const userExists = (avatarForm) => {
    return users.find((user) => {
      return user.userName === avatarForm.userName;
    });
  };
  return (
    <div>
      <h4>Save Avatar</h4>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              required
              placeholder="Enter email"
              name="userName"
              onChange={handleChange}
              value={userName}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Avatar Name</Form.Label>
            <Form.Control
              required
              placeholder="Cartman"
              name="avatarName"
              onChange={handleChange}
              value={avatarName}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};
