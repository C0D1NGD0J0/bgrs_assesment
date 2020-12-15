import { FETCH_CHARACTERS, FETCH_MOVIES } from "../actions/types";

const initialState = {
  characters: [],
  movies: [],
  loading: true
};

const charactersReducer = (state = initialState, action) =>{
  const { type, payload } = action;

  switch (type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        loading: false,
        characters: payload,
      };
    case FETCH_MOVIES:
        return {
          ...state,
          loading: false,
          movies: payload,
        };
    default:
      return state;
  };
};

export default charactersReducer;