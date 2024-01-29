import ReactDOM from 'react-dom';
import React from 'react';
import Resposta from './App.js';

document.getElementById("sim").addEventListener("click", function() {
  ReactDOM.render(
    <Resposta phrase="Relaxa baby, é brincadeira! Tudo no tempo de Deus! (Mas não esquece de orar)" />,
    document.getElementById('root')
  );
});

document.getElementById("nao").addEventListener("mouseover", function(event) {
  var button = event.target;
  var rect = button.getBoundingClientRect();
  var randomX = Math.floor(Math.random() * (window.innerWidth - rect.width));
  var randomY = Math.floor(Math.random() * (window.innerHeight - rect.height));
  button.style.position = "absolute";
  button.style.top = randomY + "px";
  button.style.left = randomX + "px";
});
