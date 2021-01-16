// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useReducer } from "react";
import reducer from "./rest";
import api from "../services/api";

function useDelete() {
  const [data, dispatch] = useReducer(reducer, {
    data: {},
  });
  const remove = (url: string) => {
    dispatch({
      type: "REQUEST",
    });
    api.delete(`${url}.json`).then(() => {
      dispatch({
        type: "SUCCESS",
      });
    });
  };
  return [data, remove];
}
export default useDelete;
