import React, { useState } from "react";
import OptionsValues from '../Options/Options';
import AlertComponent from '../Alert/AlertComponent';
import useGet from "../../hooks/useGet";
import usePost from "../../hooks/usePost";

export default function AddMonth() {
  const [dia, setDia] = useState("01");
  const [postData, salvar] = usePost(`meses/2021-${dia}`);
  const data = useGet(`meses`);
  const [teste, setTeste] = useState(false);

  async function addMes() {
    if (Object.keys(data.data)[0] === `2021-${dia}`) return setTeste(true) 
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
          <OptionsValues />
        </select>
        <button className="btn btn-success m-2" onClick={addMes}>
          Adicionar Mês
        </button>
      </div>
     <AlertComponent props={teste} />
    </div>
  );
}
