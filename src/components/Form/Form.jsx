import react from 'react';
import './form.css';

export default function Form () {
    return (
 
        <form  className="register-form-dashboard">
          <fieldset>
            <legend>Login</legend>


            <div className="input-block">
              <label htmlFor="name">Email</label>
              <input
              type="email"
                id="email"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="password">
                Senha
              </label>
              <input
              type="password"
                id="password"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Entrar
          </button>
        </form>
    )
}
