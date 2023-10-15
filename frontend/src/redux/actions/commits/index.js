import axios from "axios";
import server from "../../../variables/server";
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
