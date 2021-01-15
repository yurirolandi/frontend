import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import api from "../../services/api";
import { FaTrash } from "react-icons/fa";

function Movement(props: any) {
  const [movement, setMovement] = useState<any>();
  const [dataMeses, setDataMeses] = useState<any>();
  const [nome, setDescricao] = useState<string>(" ");
  const [tipo, setTipo] = useState<string>(" ");
  const [valor, setValor] = useState<string>("");
  useEffect(() => {
    
    api
      .get(`movimentacoes/${props.match.params.data}.json`)
      .then((response) => {
        setMovement(response.data);
      });
  }, [props.match.params.data]);


  

  function onChangeDescricao(evt: any): void {
    setDescricao(evt.target.value);
  }
  function onChangeValor(evt: any): void {
    setValor(evt.target.value);
  }
  function onChangeTipo(evt: any): void {
    setTipo(evt.target.value);
  }

  function save(): void {
    api.post(`movimentacoes/${props.match.params.data}.json`, {
      nome,
      valor,
      tipo,
    });
  }

  async function remove(id: any) {
    await api.delete(`movimentacoes/${props.match.params.data}/${id}.json`);
  }

  return (
    <div className="movement">
      <SideBar />
      <div className="container">
        <h1>Movimentação</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <th>Tipo</th>
            </tr>
          </thead>

          <tbody>
            {movement &&
              Object.keys(movement).map((move) => {
                return (
                  <tr key={move}>
                    <td>{movement[move].nome}</td>
                    <td>{movement[move].valor}</td>
                    <td>
                      {movement[move].tipo}
                      <button
                        className="btn btn-danger mr-1 ml-2"
                        onClick={() => remove(move)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                );
              })}

            <tr>
              <td>
                <input type="text" onChange={onChangeDescricao} value={nome} />
              </td>
              <td>
                <input type="text" onChange={onChangeValor} value={valor} />
              </td>
              <td>
                <input type="text" onChange={onChangeTipo} value={tipo} />
                <button className="btn btn-success ml-2" onClick={save}>
                  Salvar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Movement;
