import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrop } from "react-dnd";

export default (props) => {
  const { item } = props;
  const [child, setChild] = useState(null);
  const [{}, drop] = useDrop({
    accept: item.type ? item.type : "accessory",
    drop: (item, monitor) => setChild(item.icon),
  });

  return (
    <span ref={drop} className="fa-stack" style={{ display: "contents" }}>
      <FontAwesomeIcon
        icon={["fab", item.icon]}
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
