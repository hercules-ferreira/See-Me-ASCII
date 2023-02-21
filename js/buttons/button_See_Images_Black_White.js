let game_Over_Color_Black_White_See_Images_See = document.getElementById("game_Over_Color_Black_White_See_Images_See");
game_Over_Color_Black_White_See_Images_See.onclick = function () {
  console.log('botão clicado');

  function game_Over_Color_Black_White_See_Images_See() {
    window.location.href = 'game_Black_White_Images.html'
    document.getElementById("game_Over_Color_Black_White_See_Images_See").disabled = true;
  }
  game_Over_Color_Black_White_See_Images_See();
};
