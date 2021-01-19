import React from "react";
import { Link } from "react-router-dom";
import useGet from "../../hooks/useGet";

export default function Table() {
  const data = useGet(`meses`);
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
          {data.data &&
            Object.keys(data.data).map((d) => {
              let id = Object.keys(data.data[d]);
              return (
                <tr key={d}>
                  <td>
                    <Link to={`/movement/${d}`}>{d}</Link>
                  </td>
                  <td>{data.data[d][id].saida}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
