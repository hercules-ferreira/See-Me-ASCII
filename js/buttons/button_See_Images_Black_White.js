let game_Over_Color_Black_White_See_Images = document.getElementById("game_Over_Color_Black_White_See_Images");
game_Over_Color_Black_White_See_Images.onclick = function () {
  console.log('botão clicado');

  function game_Over_Color_Black_White_See_Images() {
    window.location.href = 'game_Black_White_Images.html'
    document.getElementById("game_Over_Color_Black_White_See_Images").disabled = true;
  }
  game_Over_Color_Black_White_See_Images();
};
