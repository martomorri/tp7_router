import React from 'react';
import "../css/Contacto.css"; 

const Contacto = () => {
  return (
    <div className="contact-form">
      <h1>Contactanos</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Numero:</label>
          <input type="tel" id="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input type="date" id="fecha" />
        </div>
        <div className="form-group">
          <label htmlFor="inquiry">Razon de consulta:</label>
          <select id="inquiry">
            <option value="general">Consulta general</option>
            <option value="support">Support</option>
            <option value="billing">Problemas con un pago</option>
            <option value="other">Otros</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" rows="4"></textarea>
        </div>
        <button type="submit" class="btn btn-lg btn-outline-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;

