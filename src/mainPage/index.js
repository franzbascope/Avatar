import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Avatar from "../components/avatar";
import Accessories from "../components/accesories/index";

export default () => {
  return (
    <Card>
      <Row>
        <Col>
          <Avatar />
        </Col>
        <Col>
          <h4>Accessories</h4>
          <Accessories />
        </Col>
      </Row>
    </Card>
  );
};
