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
        loading: false,
        characters: payload.results,
        pagination: {
          totalResources: payload.count,
          count: state.characters.length,
          hasMoreResources: state.characters.length < payload.count
        },
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