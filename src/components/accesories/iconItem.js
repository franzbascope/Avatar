import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

export default ({ item }) => {
  const [collectedProps, drag] = useDrag({
    item: { type: "test" },
  });
  return <FontAwesomeIcon ref={drag} icon={["fab", "github"]} />;
};
