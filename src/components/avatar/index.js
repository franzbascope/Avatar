import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { useDrop } from "react-dnd";

export default () => {
  const [collectedProps, drop] = useDrop({
    accept: "",
  });
  return (
    <span ref={drop}>
      <FontAwesomeIcon icon={faChild} style={{ fontSize: "245" }} />
    </span>
  );
};
