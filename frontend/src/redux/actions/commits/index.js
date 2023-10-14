import axios from "axios";
import { GET_COMMITS } from "../actionTypes";

export function getCommits() {
  return async (dispatch) => {
    try {
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  };
}
