import React from "react";
import { useDrag } from "react-dnd";

export default ({ imageName, type }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: type ? type : "", imageName },
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
      <img
        style={{ width: "100px" }}
        src={`${process.env.PUBLIC_URL}/${type}/${imageName}`}
        alt="accessory"
      />
    </span>
  );
};
