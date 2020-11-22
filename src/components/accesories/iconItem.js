import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

export default ({ icon }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "accessory", icon },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <span
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
      }}
    >
      <FontAwesomeIcon icon={["fab", icon]} />
    </span>
  );
};
