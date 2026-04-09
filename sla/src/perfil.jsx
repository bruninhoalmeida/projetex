import React from 'react';

function Perfil({ nome, idade, email, foto }) {
  return (
    <div className="card">
      <img src={foto} alt={nome} className="foto-perfil" />
      <div className="info">
        <h2>{nome}</h2>
        <p><strong>Idade:</strong> {idade}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
}

export default Perfil;