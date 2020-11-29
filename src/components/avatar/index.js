import { Card } from "react-bootstrap";
import Head from "./head";
import Types from "../../conf/types";
import DragItem from "./dragItem";
import AvatarFrom from "./avatarForm";

export default (props) => {
  const { avatar, showAvatarForm, height } = props;
  return (
    <div style={{ position: "sticky", top: 10 }}>
      <Card
        style={{ margin: "20px", padding: "20px", minHeight: `${height}px` }}
      >
        {props.children}
        <Card.Body style={{ margin: "auto", position: "relative" }}>
          <DragItem
            style={{
              width: "200px",
              position: "absolute",
              right: -37,
              top: -40,
            }}
            image={avatar.hairs}
            type={Types.hairs}
          ></DragItem>
          <Head eyesImage={avatar.eyes} mouthImage={avatar.mouth} />
          <DragItem
            style={{
              width: "250px",
              position: "absolute",
              top: -70,
              left: -18,
            }}
            image={avatar.body}
            type={Types.body}
          />
          <DragItem
            style={{
              width: "270px",
              position: "absolute",
              top: -89,
              left: -28,
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
