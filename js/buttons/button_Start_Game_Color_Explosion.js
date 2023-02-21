let Start_color_Explosion = document.getElementById("buttonExplosion");
Start_color_Explosion.onclick = function () {
  console.log('botão clicado');

  function Start_color_Explosion() {
    window.location.href = 'game_Color_Explosion.html'
    document.getElementById("buttonExplosion").disabled = true;
  }
  Start_color_Explosion();
};
