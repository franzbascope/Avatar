export default ({ type, style, image }) => {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/${type}/${image}`} style={style} />
    </div>
  );
};
