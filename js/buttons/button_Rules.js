let rulesIntro = document.getElementById("rulesIntro");
rulesIntro.onclick = function () {
  console.log('botão clicado');

  function rulesIntro() {
    window.location.href = 'game_Rules.html'
    document.getElementById("rulesIntro").disabled = true;
  }
  rulesIntro();
};
