import Types from "../../../conf/types";
import DragItem from "../dragItem";

export default ({ eyesImage, mouthImage }) => {
  return (
    <div
      style={{
        marginTop: "15px",
        marginLeft: "39px",
        backgroundColor: "#ffdbb5",
        borderRadius: "100%",
        width: "100px",
        height: "100px",
      }}
    >
      <DragItem
        image={eyesImage}
        type={Types.eyes}
        style={{ height: "160px", position: "absolute", top: 4, right: 6 }}
      />
      <DragItem
        image={mouthImage}
        type={Types.mouth}
        style={{ height: "160px", position: "absolute", top: 4, right: 6 }}
      />
    </div>
  );
};
