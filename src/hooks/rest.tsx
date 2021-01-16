// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

function reducer(state: any, action: any) {
  if (action.type === "REQUEST") {
    return {
      ...state,
    };
  }
  if (action.type === "SUCCESS") {
    return {
      ...state,
      data: action.data,
    };
  }
  return state;
}
export default reducer;
