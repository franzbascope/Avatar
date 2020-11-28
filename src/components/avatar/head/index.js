import Types from "../../../conf/types";

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
      <img
        src={`${process.env.PUBLIC_URL}/${Types.eyes}/eyes1.jpg`}
        style={{ height: "160px", position: "absolute", top: 0 }}
      />
      <img
        src={`${process.env.PUBLIC_URL}/${Types.mouth}/mouth1.jpg`}
        style={{ height: "160px", position: "absolute", top: 0 }}
      />
    </div>
  );
};
