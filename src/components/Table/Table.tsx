import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Table() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    api.get("meses.json").then((response) => {
      setData(response.data);
    });
  }, []);


  return (
    <div className="box">
      <table className="table">
        <thead>
          <tr>
            <th>Mes</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            Object.keys(data).map((d) => {
              return (
                <tr key={d}>
                  <td>
                    <Link to={`/movement/${d}`}>{d}</Link>
                  </td>
                  <td>{data[d].nome}</td>
                  <td>{data[d].valor}</td>
                  <td>{data[d].tipo}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
