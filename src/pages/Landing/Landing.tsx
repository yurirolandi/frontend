import React from "react";
import Form from '../../components/Form/Form';
import './landing.css';

import { Link } from "react-router-dom";


function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">

        <main>
          <Form />
        </main>

        {/* <Link to="/Dashboard" className="enter-app">
          Entrar
        </Link> */}
      </div>
    </div>
  );
}
export default Landing;
