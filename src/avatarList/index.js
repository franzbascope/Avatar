import { useGlobal } from "reactn";
import { Card } from "react-bootstrap";
import Avatar from "../components/avatar";
export default () => {
  const [avatars, setAvatars] = useGlobal("avatars");
  return avatars.map((avatar) => {
    return (
      <div className="col-md-4">
        <Avatar avatar={avatar.items} showAvatarForm={false} height={350}>
          <Card>
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Avatar>
      </div>
    );
  });
};
