import React from "react";
import Table from "../../components/Table/Table";
import SideBar from "../../components/SideBar/SideBar";
import AddMonth from "../../components/AddMonth/AddMonth";

import "./landing.css";

function Landing() {
  
  return (
    <div className="page-landing">
      <SideBar />
      <div className="container">
        <AddMonth />
        <Table />
      </div>
    </div>
  );
}
export default Landing;
