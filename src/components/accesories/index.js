import React from "react";
import { accessories } from "./accesories";
import { Accordion, Card, Button } from "react-bootstrap";
import IconItem from "./iconItem";

export default () => {
  return accessories.map((accessory, iterator) => {
    const index = iterator + 1;
    return (
      <Accordion defaultActiveKey={index}>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={index}>
              {accessory.name}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={index}>
            <Card.Body>
              {accessory.items.map((icon) => {
                return <IconItem icon />;
              })}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  });
};
