export default (props) => {
  const { type, style, image } = props;
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/${type}/${image}`} style={style} />
      {props.children}
    </div>
  );
};
