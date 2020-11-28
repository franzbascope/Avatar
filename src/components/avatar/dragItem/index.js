import { useDrop } from "react-dnd";
import { useState } from "react";

export default ({ type, style }) => {
  const [image, setImage] = useState("");
  const [{ isOver }, drop] = useDrop({
    accept: type ? type : "accessory",
    drop: (item, monitor) => setImage(item.name),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  const parsedImage = image ? image : type + "1";

  return (
    <div>
      <img
        ref={drop}
        src={`${process.env.PUBLIC_URL}/${type}/${parsedImage}.jpg`}
        style={style}
      />
    </div>
  );
};
