import React, { FormEvent, useState } from "react";
import "./form.css";
import api from "../../services/api";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  async function handlerSubmit(event) {
    event.preventDefault();

    // const data = {
    //   name: name,
    //   price: price,
    //   type: type,
    //   descriptions: descriptions,
    // };

    // console.log("descriptions", data);
    // await api.post("/product", data);

    //history.push("/product");
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
