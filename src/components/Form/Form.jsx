import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./form.css";
import usePostToken from "../../hooks/usePostToken";

export default function Form() {
  const [logado, setLogado] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [postData, signin] = usePostToken(`${process.env.REACT_APP_TOKEN}`);
  
  useEffect(() => {
    if (Object.keys(postData.data).length > 0) {
      localStorage.setItem("token", postData.data.idToken);
      localStorage.setItem("user", postData.data.email);
      setLogado(true);
    }
  }, [postData]);

  async function handlerSubmit(event) {
    event.preventDefault();

    await signin({
      email,
      password,
      returnSecureToken: true
    });
  }

  if(logado) {
    return <Redirect to="/" />
  }

  return (
    <div className="box" onSubmit={handlerSubmit}>
      <div className="box-container">
        <form className="create-form">
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
      </div>
    </div>
  );
}
