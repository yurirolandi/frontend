import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import AddMonth from "../../components/AddMonth/AddMonth";

function Landing() {
  // const history = useHistory();
  // const logado = () => {
  //   const token = localStorage.getItem("token");
  //   if (!token) history.push("/login");
  // };

  // useEffect(() => {
  //   logado();
  // });

  return (
    <div className="page-landing">
      <SideBar />
      <div className="container">
        <AddMonth />
      </div>
    </div>
  );
}
export default Landing;
