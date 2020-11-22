import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { useDrop } from "react-dnd";

export default () => {
  const [child, setChild] = useState(null);
  const [{ isOver }, drop] = useDrop({
    accept: "accessory",
    drop: (item, monitor) => setChild(item.icon),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <span ref={drop} className="fa-stack" style={{ display: "contents" }}>
      <FontAwesomeIcon
        icon={faChild}
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
