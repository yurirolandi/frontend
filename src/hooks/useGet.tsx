// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useReducer, useEffect } from "react";
import reducer from "./rest";
import api from "../services/api";

function useGet(url: string) {
  const [data, dispatch] = useReducer(reducer, {
    data: {},
  });
  useEffect(() => {
    dispatch({
      type: "REQUEST",
    });
    api.get(`${url}.json`).then((response) => {
      dispatch({ type: "SUCCESS", data: response.data });
    });
  }, [url]);
  return data;
}
export default useGet;
