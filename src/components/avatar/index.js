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
        <Card.Body style={{ position: "relative", margin: "auto" }}>
          <DragItem
            image={avatar.hairs}
            type={Types.hairs}
            style={{
              height: "160px",
              position: "absolute",
              top: 10,
              right: 12,
            }}
          ></DragItem>
          <Head eyesImage={avatar.eyes} mouthImage={avatar.mouth} />
          <DragItem
            image={avatar.body}
            type={Types.body}
            style={{ width: "180px", position: "absolute", top: "-30px" }}
          />
          <DragItem
            image={avatar.bottoms}
            type={Types.bottoms}
            style={{ width: "180px", position: "absolute", top: "-68px" }}
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
