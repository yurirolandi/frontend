import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Form from "../../components/Form/Form";

import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <SideBar />
      <div className="container">
        <Form />
      </div>
    </div>
  );
}

export default Dashboard;
