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
            <Card.Body>
              <Card.Title>Author: {avatar.userName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {avatar.avatarName}
              </Card.Subtitle>
              <Card.Link href="#">Use</Card.Link>
              <Card.Link href="#">Edit</Card.Link>
              <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
          </Card>
        </Avatar>
      </div>
    );
  });
};
