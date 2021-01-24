import React from "react";
import RegisterForm from "../../components/Form/RegisterForm";


export default function createLogin() {
  return (
    <div className="login">
      <div className="container">
        <RegisterForm />
      </div>
    </div>
  );
}