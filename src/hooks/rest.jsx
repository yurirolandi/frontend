
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

  if (action.type === "FAILURE") {
    return {
      ...state,
      error: action.error,
      code: action.code
    };
  }
  return state;
}
export default reducer;
