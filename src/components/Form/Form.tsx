import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Form.css";
import api from "../../services/api";

export default function Form() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [descriptions, setDescripitions] = useState("");

  async function handlerSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      name: name,
      price: price,
      type: type,
      descriptions: descriptions,
    };

    console.log("descriptions", data);
    await api.post("/product", data);

    //history.push("/product");
  }

  return (
    <div className="box" onSubmit={handlerSubmit}>
      <form className="create-form">
        <fieldset>
          <legend>Dados</legend>

          <div className="input-block">
            <label htmlFor="name">Nome da Compra</label>
            <input
              className="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="valor">Valor da Compra</label>
            <input
              type="number"
              className="valor"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <label htmlFor="tipo">Tipo de comercio</label>
            <select
              className="tipo"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="outros">Outros</option>
              <option value="cartao">Cartão</option>
              <option value="mercado">Compras de mercado</option>
              <option value="roupas">Roupas</option>
              <option value="aluguel">Aluguel</option>
            </select>
          </div>

          <div className="input-block">
            <label htmlFor="descricao">
              Descrição <span>Máximo de 300 caracteres</span>
            </label>
            <textarea
              className="name"
              maxLength={300}
              value={descriptions}
              onChange={(e) => setDescripitions(e.target.value)}
            />
          </div>
        </fieldset>

        <button className="confirm-button" type="submit">
          Confirmar
        </button>
      </form>
    </div>
  );
}
