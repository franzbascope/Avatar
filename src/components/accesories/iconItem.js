import React, { useGlobal } from "reactn";

export default ({ imageName, type }) => {
  const [avatar, setAvatar] = useGlobal("currentAvatar");
  return (
    <img
      onDoubleClick={() => {
        setAvatar({ ...avatar, [type]: imageName });
      }}
      style={{
        height: "100px",
        cursor: "pointer",
      }}
      src={`${process.env.PUBLIC_URL}/${type}/${imageName}`}
      alt="accessory"
    />
  );
};
