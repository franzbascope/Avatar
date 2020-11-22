import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { useDrop } from "react-dnd";

export default () => {
  const [{ isOver }, drop] = useDrop({
    accept: "accessory",
    drop: () => alert("Hola Mundo"),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <span ref={drop}>
      <FontAwesomeIcon icon={faChild} style={{ fontSize: "245" }} />
    </span>
  );
};
