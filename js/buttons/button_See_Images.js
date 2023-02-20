let game_Over_Color_See_Images = document.getElementById("game_Over_Color_See_Images");
game_Over_Color_See_Images.onclick = function () {
  console.log('botão clicado');

  function game_Over_Color_See_Images() {
    window.location.href = 'game_Color_Images.html'
    document.getElementById("game_Over_Color_See_Images").disabled = true;
  }
  game_Over_Color_See_Images();
};
