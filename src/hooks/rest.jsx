
import React from "react";

function reducer(state, action) {
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
