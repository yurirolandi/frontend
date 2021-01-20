import React from "react";
import { Link } from "react-router-dom";

export default function Table({ props }) {
  return (
    <div className="box">
      <table className="table">
        <thead>
          <tr>
            <th>Mês</th>
            <th>Saida</th>
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
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
