import React, { useReducer } from "react";
import reducer from "./rest";
import api from "../services/api";

function usePost(url: string) {
  console.log('url', url)
  const [data, dispatch] = useReducer(reducer, {
    data: {},
  });
  const post = (data: Object) => {
    dispatch({
      type: "REQUEST",
    });
    api.post(`${url}.json`, data).then((response) => {
      dispatch({
        type: "SUCCESS",
        data: response.data,
      });
    });
  };

  return [data, post];
}
export default usePost;
