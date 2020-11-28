import React from "react";
import { bodyConfig } from "../../conf/bodyConfig";
import { Row, Col } from "react-bootstrap";
import BodyItem from "./bodyItem";
import Hat from "../../images/peinados/hair1.jpg";
import Body from "../../images/body/body1.jpg";
import Pants from "../../images/bottoms/bottom1.jpg";

export default () => {
  return (
    <div>
      <img src={Hat} style={{ height: "160px" }} />
      <div
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          backgroundColor: "#ffdbb5",
          borderRadius: "100%",
          width: "140px",
          height: "110px",
        }}
      ></div>
      <img src={Body} style={{ width: "180px" }} />
      <img src={Pants} style={{ width: "180px" }} />
    </div>
  );
};
