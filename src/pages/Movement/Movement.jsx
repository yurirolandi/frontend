import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import OptionsValues from "../../components/Options/Options";
import useGet from "../../hooks/useGet";
import usePost from "../../hooks/usePost";
import useDelete from "../../hooks/useDelete";
import usePatch from "../../hooks/usePatch";
import { FaTrash } from "react-icons/fa";

const useMovimentacaoApi = (dataMeses) => {
  const data = useGet(`movimentacoes/${dataMeses}`);
  const [postData, salvar] = usePost(`movimentacoes/${dataMeses}`);
  return { data, salvar };
};

function Movement(props) {
  const history = useHistory();

  const { data, salvar } = useMovimentacaoApi(props.match.params.data);
  const dataMeses = useGet(`meses/${props.match.params.data}`);
  const [parcelas, setParcelas] = useState("01");

  const [dataPatch, patch] = usePatch();
  const [removeData, remover] = useDelete();
  const [nome, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [show, setShow] = useState(false);
  const [total, setTotal] = useState("");

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const division = (number1, number2) => number1 / number2;

  async function save() {
    if (nome !== "" && valor !== "") {
      await salvar({
        nome,
        valor,
        parcelas,
      });
      data.refetch();
      dataMeses.refetch();
      setDescricao("");
      setValor("");
    } else {
      return setShow(true);
    }
  }

  async function valorTotal() {
    let value = [];
    if (data.data) {
      Object.keys(data.data).forEach((valor) => {
        // if (data.data[valor].parcelas > 1) {
        //   let newValue = division(
        //     data.data[valor].valor,
        //     data.data[valor].parcelas
        //   );
        //   value.push(newValue);
        // } else {
          value.push(parseInt(data.data[valor].valor));
        // }
      });
    }
    if (value.length !== 0) {
      let total = value.reduce(reducer);
      setTotal(total);
    }
    return;
  }

  useEffect(() => {
    valorTotal();
  }, [data.refetch]);

  async function remove(id) {
    await remover(`movimentacoes/${props.match.params.data}/${id}`);
    data.refetch();
    setTimeout(() => {
      dataMeses.refetch();
    }, 10000);
  }

  async function saveTotal() {
    let id = Object.keys(dataMeses.data)[0];
    await patch(`meses/${props.match.params.data}/${id}`, {
      saida: total === "" ? 0 : total,
    });

    history.push("/");
  }

  if (data.error === "Permission denied") {
    return <Redirect to="/login" />;
  }

  return (
    <div className="movement">
      <SideBar />
      <div className="container mt-5">
        <div className="box">
          <h1 className="mb-4 text-center">Movimenta&shy;ção</h1>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Valor</th>
                  <th>Parcelas</th>
                  <th> </th>
                </tr>
              </thead>

              <tbody>
                {data.data &&
                  Object.keys(data.data).map((move) => {
                    return (
                      <tr key={move}>
                        <td>{data.data[move].nome}</td>
                        <td>
                          R${" "}
                          {parseInt(data.data[move].valor).toLocaleString(
                            "pt-br",
                            {
                              minimumFractionDigits: 2,
                            }
                          )}
                        </td>
                        <td>{data.data[move].parcelas}</td>
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
                      className="form-movement"
                      onChange={(evt) => setDescricao(evt.target.value)}
                      value={nome}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-movement"
                      onChange={(evt) => setValor(evt.target.value)}
                      value={valor}
                    />
                  </td>
                  <td>
                    <select
                      className="form-select p-1"
                      onChange={(evt) => setParcelas(evt.target.value)}
                      value={parcelas}
                    >
                      <OptionsValues />
                    </select>
                  </td>
                  <td>
                    <button className="btn btn-success" onClick={save}>
                      Salvar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-primary" onClick={saveTotal}>
              Finalizar{" "}
            </button>
          </div>
          {show && (
            <div className="warning">
              <h5>
                Campo vazio ou inválido!{" "}
                <button className="close" onClick={() => setShow(false)}>
                  x
                </button>
              </h5>

              <p>Inclua nome e valor!!!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Movement;
