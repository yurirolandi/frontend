import React from "react";
import usePostToken from "../../hooks/usePostToken";
import Form from "../../components/Form/Form";
import './login.css'

export default function Login() {
  const [postData, signin] = usePostToken(`movimentacoes/`);

  return (
    <div className="login">
      <div className="container">
        <Form />
      </div>
    </div>
  );
}
