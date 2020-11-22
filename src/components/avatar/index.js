import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { useDrop } from "react-dnd";

export default () => {
  const [collectedProps, drop] = useDrop({
    accept: "",
  });
  return (
    <FontAwesomeIcon ref={drop} icon={faChild} style={{ fontSize: "245" }} />
  );
};
