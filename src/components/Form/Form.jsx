import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import fire from "../../services/firebase.js";
import "./form.css";

export default function Form() {
  const history = useHistory();

  const [logado, setLogado] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLocalToken = localStorage.getItem("token");
  const userLocal = localStorage.getItem("user");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!userLocal && !userLocalToken) {
      setLogado(false);
    }
  });

  async function handlerSubmit(event) {
    try {
      event.preventDefault();
      const userLogin = await fire
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (!userLocal && !userLocalToken) {
        localStorage.setItem("user", userLogin.user.email);
        localStorage.setItem("token", userLogin.user.l);
      }

      return history.push("/");
    } catch (error) {
      console.log(error);
      if (error) setShow(true);
    }
  }

  if (logado) {
    return history.push("/");
  }

  return (
    <div className="box" onSubmit={handlerSubmit}>
      <div className="box-container">
        <form className="create-form">
          {show && (
            <div className="alert alert-danger mt-3">
              <h5>
                Senha ou email inválidos!{" "}
                <button className="close" onClick={() => setShow(false)}>
                  x
                </button>
              </h5>

              <p>Porfavor insira um email/senha corretamente!!!</p>
            </div>
          )}
          <fieldset>
            <legend className="text-center">Login</legend>

            <div className="input-block">
              <label htmlFor="email">Email:</label>
              <input
                className="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                className="valor"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Sign in
          </button>
        </form>

        <div className="container mt-4 text-center border-top">
          <Link to="/login/create">
            <p className="mt-4">Criar Conta!</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
