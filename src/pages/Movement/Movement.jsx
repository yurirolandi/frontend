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
  const [tipo, setTipo] = useState(" ");
  const [valor, setValor] = useState("");

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
      <div className="container">
        <h1>Movimentação</h1>
        {dataMeses && (
          <div className="box mb-2">
            {Object.keys(dataMeses.data).map((id) => {
              return (
                <div key={id}>
                  <p>
                    <span>Previsão de entrada:</span>{" "}
                    <input
                      size={10}
                      type="text"
                      onBlur={(evt) => {
                        patch(`meses/${props.match.params.data}/${id}`, {
                          entrada: evt.target.value,
                        });
                      }}
                    />{" "}
                    {dataMeses.data[id].entrada}
                  </p>
                  <p>
                    <span>Previsão de saida:</span>{" "}
                    <input size={10} type="text" /> {dataMeses.data[id].saida}
                  </p>
                </div>
              );
            })}
          </div>
        )}
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
                    onChange={(evt) => setDescricao(evt.target.value)}
                    value={nome}
                    size={10}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={(evt) => setValor(evt.target.value)}
                    value={valor}
                    size={10}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={(evt) => setTipo(evt.target.value)}
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
