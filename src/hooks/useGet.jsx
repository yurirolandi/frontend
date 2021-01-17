
import React, { useReducer, useEffect } from "react";
import reducer from "./rest";
import api from "../services/api";

function useGet(url) {
  const [data, dispatch] = useReducer(reducer, {
    data: {},
  });
  const carregar = async () => {
    dispatch({
      type: "REQUEST",
    });
    const response = await api.get(`${url}.json`);
    dispatch({ type: "SUCCESS", data: response.data });
  };
  useEffect(() => {
    carregar();
  }, [url]);
  return {
    ...data,
    refetch: carregar
  };
}
export default useGet;
