import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import useGet from "../../hooks/useGet";
import usePost from "../../hooks/usePost";
import useDelete from "../../hooks/useDelete";
import usePatch from "../../hooks/usePatch";
import { FaTrash } from "react-icons/fa";

function Movement(props) {
  const data = useGet(`movimentacoes/${props.match.params.data}`);
  const dataMeses = useGet(`meses/${props.match.params.data}`);
  const [dataPath, patch] = usePatch();
  const [postData, salvar] = usePost(
    `movimentacoes/${props.match.params.data}`
  );
  const [removeData, remover] = useDelete();
  const [nome, setDescricao] = useState(" ");
  const [valor, setValor] = useState("");

  async function save() {
    await salvar({
      nome,
      valor,
    });
    setDescricao("");
    setValor("");
    data.refetch();
    setTimeout(() => {
      dataMeses.refetch();
    }, 10000);
  }

  async function remove(id) {
    await remover(`movimentacoes/${props.match.params.data}/${id}`);
    data.refetch();
    setTimeout(() => {
      dataMeses.refetch();
    }, 10000);
  }

  return (
    <div className="movement">
      <SideBar />
      <div className="container mt-5">
        <div className="box">
          <h1 className="mb-4 text-center">Movimentação</h1>
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
                    onChange={(evt) => setDescricao(evt.target.value)}
                    value={nome}
                    size={8}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={(evt) => setValor(evt.target.value)}
                    value={valor}
                    size={8}
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
