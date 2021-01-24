import React, { useReducer } from "react";
import reducer from "./rest";
import { apiToken } from "../services/api";

function usePostToken(url) {
  const [data, dispatch] = useReducer(reducer, {
    data: {},
  });
  const post = async (data) => {
    dispatch({
      type: "REQUEST",
    });
    try {
      const response = await apiToken.post(`${url}`, data);
      if (response.data.error && Object.keys(response.data.error).length > 0) {
        dispatch({
          type: "FAILURE",
          error: response.data.error.message,
        });
      } else {
        dispatch({
          type: "SUCCESS",
          data: response.data,
        });

        return response.data;
      }
    } catch (error) {
      dispatch({
        type: "FAILURE",
        error: "sign-in error",
      });
      console.log("erro", error.message);
    }
  };

  return [data, post];
}
export default usePostToken;
