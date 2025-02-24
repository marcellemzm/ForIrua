document.getElementById("nao3").addEventListener("mouseover", function(event) {
  var button = event.target;
  var rect = button.getBoundingClientRect();
  var randomX = Math.floor(Math.random() * (window.innerWidth - rect.width));
  var randomY = Math.floor(Math.random() * (window.innerHeight - rect.height));
  button.style.position = "absolute";
  button.style.top = randomY + "px";
  button.style.left = randomX + "px";
});
