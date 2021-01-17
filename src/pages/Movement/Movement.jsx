import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import useGet from "../../hooks/useGet";
import usePost from "../../hooks/usePost";
import useDelete from "../../hooks/useDelete";
import { FaTrash } from "react-icons/fa";

function Movement(props) {
  const data = useGet(`movimentacoes/${props.match.params.data}`);
  const [postData, salvar] = usePost(
    `movimentacoes/${props.match.params.data}`
  );
  const [removeData, remover] = useDelete();
  const [nome, setDescricao] = useState(" ");
  const [tipo, setTipo] = useState(" ");
  const [valor, setValor] = useState("");

  function onChangeDescricao(evt) {
    setDescricao(evt.target.value);
  }
  function onChangeValor(evt) {
    setValor(evt.target.value);
  }
  function onChangeTipo(evt) {
    setTipo(evt.target.value);
  }

  async function save() {
    await salvar({
      nome,
      valor,
      tipo,
    });
    setDescricao("");
    setTipo("");
    setValor("");
    data.refetch();
  }

  async function remove(id) {
    await remover(`movimentacoes/${props.match.params.data}/${id}`);
    data.refetch();
  }

  return (
    <div className="movement">
      <SideBar />
      <div className="container">
        <h1>Movimentação</h1>
        <div className="box">
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Tipo</th>
              </tr>
            </thead>

            <tbody>
              {data.data &&
                Object.keys(data.data).map((move) => {
                  return (
                    <tr key={move}>
                      <td>{data.data[move].nome}</td>
                      <td>{data.data[move].valor}</td>
                      <td>{data.data[move].tipo}</td>
                      <td>
                        <button
                          className="btn btn-danger ml-2"
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
                  <input
                    type="text"
                    onChange={onChangeDescricao}
                    value={nome}
                    size={10}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={onChangeValor}
                    value={valor}
                    size={10}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={onChangeTipo}
                    value={tipo}
                    size={10}
                  />
                </td>
                <td>
                  <button className="btn btn-success ml-2" onClick={save}>
                    Salvar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Movement;
