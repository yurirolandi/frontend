import React, { useState } from "react";
import useGet from "../../hooks/useGet";
import usePost from "../../hooks/usePost";
import { Alert } from "react-bootstrap";

export default function AddMonth() {
  const meses = [];
  const [dia, setDia] = useState("01");
  const [postData, salvar] = usePost(`meses/2021-${dia}`);
  const data = useGet(`meses`);
  const [show, setShow] = useState(false);

  for (let i = 1; i <= 12; i++) {
    i <= 9 ? meses.push(`0${i}`) : meses.push(i);
  }

  async function addMes() {
    if (Object.keys(data.data)[0] === `2021-${dia}`) return setShow(true) 
    await salvar({
      saida: 0,
    });
    data.refetch();
  }

  return (
    <div className="box mb-3 mt-5">
      <h2 className="mb-4 text-center">Adicionar Mês</h2>

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
      <Alert variant="warning" show={show} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Mês já adicionado!</Alert.Heading>
        <p>
          Me parece que esse mês já foi adicionado na sua lista, tente inserir outro mês...
        </p>
      </Alert>
    </div>
  );
}
