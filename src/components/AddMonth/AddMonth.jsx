import React, { useState } from "react";
import useGet from "../../hooks/useGet";
import usePost from "../../hooks/usePost";

export default function AddMonth() {
  const meses = [];
  const [dia, setDia] = useState("01");
  const [postData, salvar] = usePost(`meses/2021-${dia}`);
  const data = useGet(`meses`);

  for (let i = 1; i <= 12; i++) {
    i <= 9 ? meses.push(`0${i}`) : meses.push(i);
  }

  async function addMes() {
    await salvar({
      Total: 0,
      saida: 0,
      entrada: 0,
    });
    data.refetch();
  }

  return (
    <div className="box mb-3">
      <h2>Adicionar Mês</h2>

      <div className="container d-flex justify-content-center align-items-center">
        <select className="form-select m-2 p-2">
          <option value="2021">2021</option>
        </select>

        <select
          className="form-select m-2 p-2"
          value={dia}
          onChange={(e) => setDia(e.target.value)}
        >
          {meses.map((mes) => (
            <option key={mes} value={mes}>
              {mes}
            </option>
          ))}
        </select>
        <button className="btn btn-success m-2" onClick={addMes}>
          Adicionar Mês
        </button>
      </div>
    </div>
  );
}
