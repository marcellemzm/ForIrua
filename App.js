import React from 'react';

function Resposta({ phrase }) {
  return (
    <div className="response">
      <p className="font-semibold" align="center">
        <b>{phrase}</b>
      </p>
      <img src={health.png} alt="" width={200} />
      <p className="made-with">Made with 🤍 by <a className="font-semibold text-red-300" href="https://www.instagram.com/marcellemzm/">@marcellemzm</a></p>
    </div>
  );
}

export default Resposta;
