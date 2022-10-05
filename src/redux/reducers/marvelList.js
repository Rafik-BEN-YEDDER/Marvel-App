import { GET_LIST, FAIL, LOAD, SORT, INPUT } from "../actionTypes/marvelList";

const intialeState = {
  character: {},
  marvelList: [],
  load: false,
  errors: [],
  sort: true,
  input: "",
};

const marvelReduser = (state = intialeState, { type, payload }) => {
  switch (type) {
    case LOAD:
      return { ...state, load: true };
    case GET_LIST:
      return { ...state, load: false, marvelList: payload.data.results };
    case FAIL:
      return { ...state, load: false, errors: payload };
    case SORT:
      return { ...state, sort: !state.sort };
    case INPUT:
      return { ...state, input: payload };
    default:
      return state;
  }
};

export default marvelReduser;
