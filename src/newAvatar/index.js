import React, { useGlobal } from "reactn";
import { Card, Row, Col } from "react-bootstrap";
import Avatar from "../components/avatar";
import Accessories from "../components/accesories/index";

export default () => {
  const [avatar, setAvatars] = useGlobal("currentAvatar");
  return (
    <Card>
      <Row>
        <Col>
          <h4 style={{ textAlign: "center" }}>Avatar</h4>
          <Avatar avatar={avatar} showAvatarForm={true} height={250} />
        </Col>
        <Col>
          <h4>Accessories</h4>
          <Accessories />
        </Col>
      </Row>
    </Card>
  );
};
