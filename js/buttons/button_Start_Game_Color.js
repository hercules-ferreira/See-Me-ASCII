let Start_color = document.getElementById("Start_color");
Start_color.onclick = function () {
  console.log('botão clicado');

  function Start_color() {
    window.location.href = 'game_Color.html'
    document.getElementById("Start_color").disabled = true;
  }
  Start_color();
};
