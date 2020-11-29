import { Card } from "react-bootstrap";
import Head from "./head";
import Types from "../../conf/types";
import DragItem from "./dragItem";
import AvatarFrom from "./avatarForm";

export default (props) => {
  const { avatar, showAvatarForm, height } = props;
  return (
    <div>
      <Card
        style={{ margin: "20px", padding: "20px", minHeight: `${height}px` }}
      >
        {props.children}
        <Card.Body style={{ margin: "auto", position: "relative" }}>
          <DragItem
            style={{ width: "100px", position: "absolute", right: 14, top: 20 }}
            image={avatar.hairs}
            type={Types.hairs}
          ></DragItem>
          <Head eyesImage={avatar.eyes} mouthImage={avatar.mouth} />
          <DragItem
            style={{
              width: "120px",
              position: "absolute",
              top: 0,
              left: 45,
            }}
            image={avatar.body}
            type={Types.body}
          />
          <DragItem
            style={{
              width: "120px",
              position: "absolute",
              top: 0,
              left: 45,
            }}
            image={avatar.bottoms}
            type={Types.bottoms}
          />
        </Card.Body>
      </Card>
      {showAvatarForm ? (
        <Card style={{ margin: "20px", padding: "20px" }}>
          <Card.Body>
            <AvatarFrom />
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};
