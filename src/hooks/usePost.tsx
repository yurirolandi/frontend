import React, { useReducer } from "react";
import reducer from "./rest";
import api from "../services/api";

function usePost(url: string) {
  const [data, dispatch] = useReducer(reducer, {
    data: {},
  });
  const post = async (data: Object) => {
    dispatch({
      type: "REQUEST",
    });
    const response = await api.post(`${url}.json`, data);
    dispatch({
      type: "SUCCESS",
      data: response.data,
    });
  };

  return [data, post];
}
export default usePost;
