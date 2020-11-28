import React from "react";
import { Card } from "react-bootstrap";
import Head from "./head";
import Types from "../../conf/types";

export default () => {
  return (
    <Card style={{ margin: "20px", padding: "20px", height: "250px" }}>
      <Card.Body style={{ position: "relative", margin: "auto" }}>
        {" "}
        <img
          src={`${process.env.PUBLIC_URL}/${Types.hairs}/hair1.jpg`}
          style={{ height: "160px", position: "absolute", top: 0 }}
        />
        <Head />
        <img
          src={`${process.env.PUBLIC_URL}/${Types.body}/body1.jpg`}
          style={{ width: "180px", position: "absolute", top: "-30px" }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/${Types.bottoms}/bottom1.jpg`}
          style={{ width: "180px", position: "absolute", top: "-68px" }}
        />
      </Card.Body>
    </Card>
  );
};
