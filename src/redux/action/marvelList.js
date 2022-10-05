import { GET_LIST, FAIL, LOAD } from "../actionTypes/marvelList";
import axios from "axios";

export const getList = () => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let result = await axios.get(
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e7a536b73bc022a3c56ea3d6ae6b3d7f&hash=a2086fad8ab608c4248643391186bfef"
    );
    dispatch({
      type: GET_LIST,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.response.data.errors,
    });
  }
};
