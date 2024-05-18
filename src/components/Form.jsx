import React from "react";
import { useState } from "react";

function Form({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nombre, setNombre] = useState("");

  const buttonDisabled = !(email === cEmail) || !email;
  const submitForm = (e) => {
    e.preventDefault();
    onSubmit({ email, telefono, nombre });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label for="email1" className="form-label">
            Correo electronico
          </label>
          <input
            type="email"
            className="form-control"
            id="email1"
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
            placeholder="ejemplo@mail.com"
          />
        </div>
        <div className="mb-3">
          <label for="email2" className="form-label">
            Confirmar email
          </label>
          <input
            type="email"
            className="form-control"
            id="email2"
            onChange={(e) => setCEmail(e.target.value)}
            aria-describedby="emailHelp"
            placeholder="confirmar email"
          />
        </div>
        <div className="mb-3">
          <label for="nombre" className="form-label">
            Nombre Completo
          </label>
          <input
            className="form-control"
            id="nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="tel" className="form-label">
            Telefono
          </label>
          <input
            className="form-control"
            id="tel"
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <button disabled={buttonDisabled} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
