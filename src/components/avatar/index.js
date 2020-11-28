import React from "react";
import { Card } from "react-bootstrap";
import { bodyConfig } from "../../conf/bodyConfig";
import { Row, Col } from "react-bootstrap";
import BodyItem from "./bodyItem";
import Hat from "../../images/peinados/hair1.jpg";
import Body from "../../images/body/body1.jpg";
import Pants from "../../images/bottoms/bottom1.jpg";

export default () => {
  return (
    <Card style={{ margin: "20px" }}>
      <Card.Body style={{ position: "relative" }}>
        {" "}
        <img
          src={Hat}
          style={{ height: "160px", position: "absolute", top: 0 }}
        />
        <div
          style={{
            marginLeft: "20px",
            backgroundColor: "#ffdbb5",
            borderRadius: "100%",
            width: "140px",
            height: "110px",
          }}
        ></div>
        <img
          src={Body}
          style={{ width: "180px", position: "absolute", top: "-30px" }}
        />
        <img
          src={Pants}
          style={{ width: "180px", position: "absolute", top: "-68px" }}
        />
      </Card.Body>
    </Card>
  );
};
