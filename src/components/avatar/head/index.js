import Eye from "../../../images/eyes/eyes1.jpg";
import Mouth from "../../../images/mouths/mouth1.jpg";

export default () => {
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
      {" "}
      <img
        src={Eye}
        style={{ height: "160px", position: "absolute", top: 0 }}
      />
      <img
        src={Mouth}
        style={{ height: "160px", position: "absolute", top: 0 }}
      />
    </div>
  );
};
