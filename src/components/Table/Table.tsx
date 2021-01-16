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
            <th>Mês</th>
            <th>Entrada</th>
            <th>Saida</th>
            <th>Total</th>
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
                  <td>{data[d].entrada}</td>
                  <td>{data[d].saida}</td>
                  <td>{data[d].Total}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
