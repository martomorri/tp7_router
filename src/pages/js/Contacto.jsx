import React from 'react';
import "../css/Contacto.css"; 

const Contacto = () => {
  return (
    <div className="contact-form">
      <h1>Contactanos</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input className='form-control' type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input className='form-control' type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Numero:</label>
          <input className='form-control' type="tel" id="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="fecha">Fecha:</label>
          <input className='form-control' type="date" id="fecha" />
        </div>
        <div className="form-group">
          <label htmlFor="inquiry">Razon de consulta:</label>
          <select className='form-control' id="inquiry">
            <option className='form-control' value="general">Consulta general</option>
            <option className='form-control' value="support">Support</option>
            <option className='form-control' value="billing">Problemas con un pago</option>
            <option className='form-control' value="other">Otros</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea className='form-control' id="message" rows="4"></textarea>
        </div>
        <div className='row'>
          <button id='btn-submit' type="submit" class="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Contacto;

