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
        width: "90px",
        height: "90px",
      }}
    >
      <DragItem
        image={eyesImage}
        type={Types.eyes}
        style={{ height: "140px", position: "absolute", top: 17, right: 15 }}
      />
      <DragItem
        image={mouthImage}
        type={Types.mouth}
        style={{ height: "140px", position: "absolute", top: 17, right: 15 }}
      />
    </div>
  );
};
