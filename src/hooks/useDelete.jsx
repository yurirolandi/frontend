import React, { useReducer } from "react";
import reducer from "./rest";
import { api } from "../services/api";
import getAuth from "./getAuth.js";

function useDelete() {
  const [data, dispatch] = useReducer(reducer, {
    data: {},
  });
  const remove = async (url) => {
    dispatch({
      type: "REQUEST",
    });
    await api.delete(`${url}.json${getAuth()}`);
    dispatch({
      type: "SUCCESS",
    });
  };
  return [data, remove];
}
export default useDelete;
