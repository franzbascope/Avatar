import React from "react";
import { Card } from "react-bootstrap";
import Head from "./head";
import Types from "../../conf/types";
import DragItem from "./dragItem";

export default () => {
  return (
    <Card style={{ margin: "20px", padding: "20px", height: "250px" }}>
      <Card.Body style={{ position: "relative", margin: "auto" }}>
        {" "}
        <DragItem
          type={Types.hairs}
          style={{ height: "160px", position: "absolute", top: 0 }}
        />
        <Head />
        <DragItem
          type={Types.body}
          style={{ width: "180px", position: "absolute", top: "-30px" }}
        />
        <DragItem
          type={Types.bottoms}
          style={{ width: "180px", position: "absolute", top: "-68px" }}
        />
      </Card.Body>
    </Card>
  );
};
