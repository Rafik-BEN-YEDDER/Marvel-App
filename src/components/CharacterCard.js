import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={character.thumbnail.path + "." + character.thumbnail.extension}
      />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Link
          to={`https://gateway.marvel.com/v1/public/characters/${character.id}`}
        >
          {" "}
          <Button variant="primary"> Details </Button>{" "}
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
