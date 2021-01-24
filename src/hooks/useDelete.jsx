import React, { useReducer } from "react";
import reducer from "./rest";
import { api } from "../services/api";

function useDelete() {
  const [data, dispatch] = useReducer(reducer, {
    data: {},
  });
  const remove = async (url) => {
    dispatch({
      type: "REQUEST",
    });
    await api.delete(`${url}.json`);
    dispatch({
      type: "SUCCESS",
    });
  };
  return [data, remove];
}
export default useDelete;
