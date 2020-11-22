import React from "react";
import { accessories } from "./accesories";
import { Accordion, Card, Button } from "react-bootstrap";
import IconItem from "./iconItem";

export default () => {
  return accessories.map((accessory, iterator) => {
    const index = iterator + 1;
    return (
      <Accordion defaultActiveKey={index} key={iterator}>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={index}>
              {accessory.name}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={index}>
            <Card.Body>
              {accessory.items.map((icon, key) => {
                return <IconItem icon={icon} type={accessory.name} key={key} />;
              })}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  });
};
