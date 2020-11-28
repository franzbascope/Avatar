import React, { useGlobal } from "reactn";

export default ({ imageName, type }) => {
  const [avatar, setAvatar] = useGlobal("currentAvatar");
  return (
    <span
      onDoubleClick={() => {
        setAvatar({ ...avatar, [type]: imageName });
      }}
      style={{
        opacity: 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      <img
        style={{ width: "100px" }}
        src={`${process.env.PUBLIC_URL}/${type}/${imageName}`}
        alt="accessory"
      />
    </span>
  );
};
