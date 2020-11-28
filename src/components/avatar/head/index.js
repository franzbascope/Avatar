import Types from "../../../conf/types";
import DragItem from "../dragItem";

export default ({ eyesImage, mouthImage }) => {
  return (
    <div
      style={{
        marginLeft: "20px",
        backgroundColor: "#ffdbb5",
        borderRadius: "100%",
        width: "140px",
        height: "110px",
      }}
    >
      <DragItem
        image={eyesImage}
        type={Types.eyes}
        style={{ height: "160px", position: "absolute", top: 0 }}
      />
      <DragItem
        image={mouthImage}
        type={Types.mouth}
        style={{ height: "160px", position: "absolute", top: 0 }}
      />
    </div>
  );
};
