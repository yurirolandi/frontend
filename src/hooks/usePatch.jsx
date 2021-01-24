import React, { useReducer } from "react";
import reducer from "./rest";
import { api } from "../services/api";
import getAuth from "./getAuth.js";

function usePatch() {
  const [data, dispatch] = useReducer(reducer, {
    data: {},
  });
  const patch = async (url, data) => {
    dispatch({
      type: "REQUEST",
    });
    await api.patch(`${url}.json${getAuth()}`, data);
    dispatch({
      type: "SUCCESS",
    });
  };
  return [data, patch];
}
export default usePatch;
