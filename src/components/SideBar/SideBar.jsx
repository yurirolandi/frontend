import React from "react";
import { Link } from "react-router-dom";

import "./SideBar.css";

export default function Sidebar() {
  return (
    <aside className="app-sidebar">
      <Link to="/">
        <h1 color="#FFF">Finança</h1>
      </Link>
     
    </aside>
  );
}
