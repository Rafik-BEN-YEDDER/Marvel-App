import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../redux/action/marvelList";
import CharacterCard from "./CharacterCard";
import Pagin from "./Pagin";

function MarvelList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  const load = useSelector((state) => state.marvelReduser.load);
  const sort = useSelector((state) => state.marvelReduser.sort);
  const marvelList = useSelector((state) => state.marvelReduser.marvelList);
  const input = useSelector((state) => state.marvelReduser.input);

  const [currentPage, setCurrentPage] = useState(1);
  const [charParPage, setCharParPage] = useState(5);
  const indexOfLastChar = currentPage * charParPage;
  const indexOfFirstChar = indexOfLastChar - charParPage;

  function bblSort(arr) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j].name.localeCompare(arr[j + 1].name) < 0) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  function bblSortt(arr) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j].name.localeCompare(arr[j + 1].name) > 0) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }

  sort ? bblSortt(marvelList) : bblSort(marvelList);
  const newList = marvelList.filter((el) =>
    el.name.toLowerCase().includes(input.toLowerCase())
  );
  const currentChar = newList.slice(indexOfFirstChar, indexOfLastChar);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <>
        {load ? (
          <p>loading</p>
        ) : (
          currentChar.map((el) => <CharacterCard character={el} />)
        )}{" "}
      </>
      <Pagin
        charParPage={charParPage}
        totalChar={newList.length}
        paginate={paginate}
      />
    </div>
  );
}
export default MarvelList;
