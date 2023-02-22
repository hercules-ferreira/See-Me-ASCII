let to_go_back_intro = document.getElementById("to_go_back_intro");
to_go_back_intro.onclick = function () {
  console.log('botão clicado');

  function to_go_back_intro() {
    window.location.href = 'index.html'
    document.getElementById("to_go_back_intro").disabled = true;
  }
  to_go_back_intro();
};
