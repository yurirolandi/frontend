import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import fire from "../../services/firebase";

export default function RegisterForm() {
  const history = useHistory();
  const [logado, setLogado] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassword] = useState("");
 
  const [show, setShow] = useState(false);

  async function handlerAccount(event) {
    event.preventDefault();
    if (email !== "" && password === confirmePassword && password.length >= 6) {
      const token = await fire
        .auth()
        .createUserWithEmailAndPassword(email, password);

      localStorage.setItem("user", token.user.email);
      localStorage.setItem("token", token.user.l);
      setEmail("");
      setPassword("");
      setConfirmePassword("");
      history.push("/login");
    } else {
      setShow(true);
    }
  }

  return (
    <div className="box">
      <div className="box-container">
        <Link to="/login">
          <FaRegArrowAltCircleLeft size={30} />
        </Link>
        <form className="create-form" onSubmit={handlerAccount}>
          {show && (
            <div className="alert alert-danger mt-3">
              <h5>
                Senha ou email não conferem!{" "}
                <button className="close" onClick={() => setShow(false)}>
                  x
                </button>
              </h5>

              <p>
                Verifique se está digitando seu email corretamente ou se a senha
                possui mais de 6 caracteres!!!
              </p>
            </div>
          )}
          <fieldset>
            <legend className="text-center">Registrar</legend>

            <div className="input-block">
              <label htmlFor="email">Email:</label>
              <input
                className="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">
                Senha: <span>Minimo 6 caracteres</span>
              </label>
              <input
                type="password"
                className="valor"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label htmlFor="password">
                Confirme sua Senha: <span>Minimo 6 caracteres</span>
              </label>
              <input
                type="password"
                className="valor"
                value={confirmePassword}
                onChange={(e) => setConfirmePassword(e.target.value)}
              />
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
