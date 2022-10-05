import React from "react";
import { SORT, INPUT } from "../redux/actionTypes/marvelList";
import {
  Button,
  Container,
  Navbar,
  FormControl,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
function Navigation() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.marvelReduser.sort);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <FormControl
            onChange={(e) =>
              dispatch({
                type: INPUT,
                payload: e.target.value,
              })
            }
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="secondary" onClick={() => dispatch({ type: SORT })}>
            {sort ? <p>sort from a to z</p> : <p>sort from z to a</p>}
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
