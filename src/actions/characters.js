import axios from "axios";
import { FETCH_CHARACTERS, FETCH_MOVIES } from "./types";

const SW_URL = "https://swapi.dev/api/";

export const getCharacters = () => async (dispatch) =>{
  try {
    const res = await axios.get(`${SW_URL}people/`);
    dispatch({type: FETCH_CHARACTERS, payload: res.data});
  } catch (error) {
    console.log(error);
  };
};