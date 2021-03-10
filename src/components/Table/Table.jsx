import React from "react";
import { Link } from "react-router-dom";
import { WhatsappIcon, WhatsappShareButton } from "react-share";

export default function Table({ props }) {
  return (
    <div className="box">
      <table className="table">
        <thead>
          <tr>
            <th>Mês</th>
            <th>Saida</th>
            <th>Divisão</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            Object.keys(props.data).map((d) => {
              let id = Object.keys(props.data[d]);
              return (
                <tr key={d}>
                  <td>
                    <Link to={`/movement/${d}`}>{d}</Link>
                  </td>
                  <td>
                    R${" "}
                    {props.data[d][id].saida.toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                  <td>
                    R${" "}
                    {(props.data[d][id].saida / 2).toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                  <td>
                    <WhatsappShareButton
                      title="Seu valor a ser pago esse mês"
                      url={`
                        Mês : ${d}
                        Valor : R$ ${(
                          props.data[d][id].saida / 2
                        ).toLocaleString("pt-br", {
                          minimumFractionDigits: 2,
                        })}
                      
                      
                      `}
                    >
                      <WhatsappIcon size={26} round={true} />
                    </WhatsappShareButton>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
