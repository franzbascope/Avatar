import React from "react";
import { accessories } from "./accesories";
import { Accordion, Card, Button } from "react-bootstrap";

export default () => {
  return accessories.map((accesory, iterator) => {
    const index = iterator + 1;
    return (
      <Accordion defaultActiveKey={index}>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={index}>
              {accesory.name}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={index}>
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  });
};
