import { FETCH_CHARACTERS, FETCH_MOVIES } from "../actions/types";

const initialState = {
  characters: [],
  movies: [],
  pagination: {
    count: 0,
    totalResources: 0,
    hasMoreResources: false
  },
  loading: true
};

const charactersReducer = (state = initialState, action) =>{
  const { type, payload } = action;

  switch (type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characters: payload.results,
        pagination: {
          totalResources: payload.count,
          count: state.characters.length,
          hasMoreResources: state.characters.length < payload.count
        },
        loading: false,
      };
    case FETCH_MOVIES:
        return {
          ...state,
          movies: payload,
          loading: false,
        };
    default:
      return state;
  };
};

export default charactersReducer;