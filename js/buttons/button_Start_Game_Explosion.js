let Start_black = document.getElementById("Start_black");
Start_black.onclick = function () {
  console.log('botão clicado');

  function Start_black() {
    window.location.href = 'game_Black_White.html'
    document.getElementById("Start_black").disabled = true;
  }
  Start_black();
};
