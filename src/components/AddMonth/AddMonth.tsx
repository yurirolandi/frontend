import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";

export default function AddMonth() {
  const meses = [];
  const refAno = useRef<HTMLSelectElement>();
  const refMes = useRef<HTMLSelectElement>();
  const [redir, setRedir] = useState("");

  for (let i = 1; i <= 12; i++) {
    i <= 9 ? meses.push(`0${i}`) : meses.push(i);
  }

  function addMes(): void {    
    setRedir(`${refAno?.current?.value}-${refMes?.current?.value}`);
  }

  if (redir !== "") return <Redirect to={`movement/${redir}`} />;

  return (
    <>
      <h2>Adicionar Mês</h2>
      <select ref={refAno}>
        <option value="2021">2021</option>
      </select>
      <select ref={refMes}>
        {meses.map((mes) => (
          <option key={mes} value={mes}>
            {mes}
          </option>
        ))}
      </select>
      <button onClick={addMes}>Adicionar Mês</button>
    </>
  );
}
