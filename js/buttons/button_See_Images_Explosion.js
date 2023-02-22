let game_Over_Color_Images_See_Explosion = document.getElementById("game_Over_Color_Images_See_Explosion");
game_Over_Color_Images_See_Explosion.onclick = function () {
  console.log('botão clicado');

  function game_Over_Color_Images_See_Explosion() {
    window.location.href = 'game_Color_Explosion_Image.html'
    document.getElementById("game_Over_Color_Images_See_Explosion").disabled = true;
  }
  game_Over_Color_Images_See_Explosion();
};
