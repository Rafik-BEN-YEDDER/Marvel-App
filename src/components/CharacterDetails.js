import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CharacterDetails() {
  const marvelList = useSelector((state) => state.marvelReduser.marvelList);
  const params = useParams();
  console.log(params);
  const character = marvelList.find((el) => el.id == params.id);
  console.log(character);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={character.thumbnail.path + "." + character.thumbnail.extension}
      />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>{character.description}</Card.Text>
        <Card.Text>
          <h6>List of the series that the character has appeared in:</h6>
          <ul>
            {character.series.items.map((el) => (
              <li>{el.name}</li>
            ))}
          </ul>
        </Card.Text>
        <Link to={"/"}>
          {" "}
          <Button variant="primary"> Home </Button>{" "}
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CharacterDetails;
