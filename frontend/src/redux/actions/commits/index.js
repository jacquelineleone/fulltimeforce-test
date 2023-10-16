import axios from "axios";
import server from "../../../variables/server";
import { GET_COMMITS } from "../actionTypes";

export function getCommits(data) {
  return async (dispatch) => {
    try {
      const json = await axios.post(`${server}/commits`, {
        user: data.user,
        repo: data.repo,
      });
      dispatch({
        type: GET_COMMITS,
        payload: json.data,
      });
      return json;
    } catch (error) {
      console.log(error);
    }
  };
}
