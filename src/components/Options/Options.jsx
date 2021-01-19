import React from "react";

function OptionsValues() {
  const number = [];
  for (let i = 1; i <= 12; i++) {
    i <= 9 ? number.push(`0${i}`) : number.push(i);
  }

  return number.map((num) => (
    <option key={num} value={num}>
      {num}
    </option>
  ));
}

export default OptionsValues;
