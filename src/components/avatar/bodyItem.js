import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrop } from "react-dnd";

export default ({ bodyItem, items }) => {
  const [child, setChild] = useState(null);
  const [{ isOver }, drop] = useDrop({
    accept: bodyItem.type,
    drop: (item, monitor) => setChild(item.icon),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <span ref={drop} className="fa-stack" style={{ display: "contents" }}>
      <FontAwesomeIcon
        icon={bodyItem.icon}
        style={{ fontSize: "450px", opacity: "0.5" }}
        className="fa-stack-1x"
      />
      {child ? (
        <FontAwesomeIcon
          onDoubleClick={() => {
            setChild(null);
          }}
          icon={["fab", child]}
          style={{ color: "black", fontSize: "50px" }}
          className="fa-stack-1x"
        />
      ) : (
        ""
      )}
    </span>
  );
};
