import React, { useReducer, useEffect } from "react";
import reducer from "./rest";
import { api } from "../services/api";

function useGet(url) {
  const [data, dispatch] = useReducer(reducer, {
    data: {},
  });
  const carregar = async () => {
    try {
      dispatch({
        type: "REQUEST",
      });
      const response = await api.get(`${url}.json`);
      if (response.data.error && Object.keys(response.data.error).length > 0) {
        dispatch({
          type: "FAILURE",
          error: response.data.error,
        });
      } else {
        dispatch({ type: "SUCCESS", data: response.data });
      }
    } catch (error) {
      dispatch({ type: "FAILURE", error: "Aconteceu algo inesperado!!!" });
    }
  };

  useEffect(() => {
    carregar();
  }, [url]);
  return {
    ...data,
    refetch: carregar,
  };
}
export default useGet;
