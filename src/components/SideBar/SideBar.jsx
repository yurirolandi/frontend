import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import "./SideBar.css";

export default function Sidebar() {
  const history = useHistory();
  const [logado, setLogado] = useState(false);
  const user = localStorage.getItem("user");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogado(true);
    } else {
      setLogado(false);
    }
  });

  function Logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setLogado(false);
    history.push("/login");
  }
  return (
    <aside className="app-sidebar">
      <Link to="/">
        <h1 color="#FFF">Finança</h1>
      </Link>
      {logado && (
        <div>
          <div className="d-flex flex-wrap">
            <div>
              <h6 className="mb-0 text-light">Bem vindo:</h6>
              <h6 className="mb-0 mr-3 text-light">{user}</h6>
            </div>
            <button type="button" onClick={Logout} className="btn btn-danger">
              Sair
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
