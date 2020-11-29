import React, { useGlobal, useState } from "reactn";
import { Card, Row, Col } from "react-bootstrap";
import Avatar from "../components/avatar";
import Confirmation from "../components/confirmation";
export default () => {
  const [avatars, setAvatars] = useGlobal("avatars");
  const [currentAvatar, setCurrentAvatar] = useGlobal("currentAvatar");
  const [currentPage, setCurrentPage] = useGlobal("currentPage");
  const [state, setState] = useState({
    showConfirmation: false,
    userName: "",
    behavior: "",
    avatarName: "",
  });

  const deleteAvatar = (avatar) => {
    const { avatarName, userName } = avatar;
    setState({
      ...state,
      showConfirmation: true,
      userName: userName,
      behavior: "delete",
      avatarName: avatarName,
    });
  };

  const useAvatar = (items) => {
    setCurrentAvatar(items);
    setCurrentPage("new");
  };

  return (
    <React.Fragment>
      <Confirmation
        deleteAvatar={() => {
          setAvatars(
            avatars.filter((avatar) => {
              return avatar.avatarName != state.avatarName;
            })
          );
          setState({
            showConfirmation: false,
            userName: "",
            behavior: "",
          });
        }}
        userName={state.userName}
        behavior={state.behavior}
        show={state.showConfirmation}
        handleClose={() => {
          setState({ ...state, showConfirmation: false });
        }}
      />
      <Row>
        {avatars.map((avatar) => {
          return (
            <Col md="4">
              <Avatar avatar={avatar.items} showAvatarForm={false} height={350}>
                <Card>
                  <Card.Body>
                    <Card.Link
                      href="#"
                      onClick={() => {
                        useAvatar(avatar.items);
                      }}
                    >
                      Use
                    </Card.Link>
                    <Card.Link
                      href="#"
                      onClick={() => {
                        deleteAvatar(avatar);
                      }}
                    >
                      Delete
                    </Card.Link>
                    <Card.Title>Author: {avatar.userName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {avatar.avatarName}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Avatar>
            </Col>
          );
        })}
      </Row>
    </React.Fragment>
  );
};
