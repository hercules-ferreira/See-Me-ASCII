let qs = (el) => document.querySelector(el);
let qsa = (el) => document.querySelectorAll(el);
let gid = (el) => document.getElementById(el);
let w = (el) => document.write(el);
let c = (...el) => console.log(...el);
// console.log('\n--- STRINGS ---');
c(
  "%c\n--- 😀 ⏬⏬⏬ RETURN ⏬⏬⏬ 😀 ---",
  "font-weight:bold; text-shadow: 0 0 1em black;font-size: 14px;background: #0000CD; color: #FFF"
);

//  {#60a,2}
// Explicação dos Exercícios
//
window.addEventListener("load", () => {
  const canvas = document.getElementById("canvasExplosion");
  const ctx = canvas.getContext("2d");
  canvas.width = 300;
  canvas.height = 506;

  class Particle {
    constructor(effect, x, y, color) {
      this.effect = effect;
      this.x = Math.random() * this.effect.width;
      this.y = Math.random() * this.effect.height;
      this.originX = Math.floor(x);
      this.originY = Math.floor(y);
      this.color = color;
      this.size = this.effect.gap;
      this.vx = 0;
      this.vy = 0;
      this.ease = 0.02;
    }
    draw(context) {
      context.fillRect(this.x, this.y, this.size, this.size);
      context.fillStyle = this.color;
    }

    update() {
      this.x += (this.originX - this.x) * this.ease;
      this.y += (this.originY - this.y) * this.ease;
    }
  }

  class Effect {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.particlesArray = [];
      this.image = document.getElementById("image1");
      this.centerX = this.width * 0.5;
      this.centerY = this.height * 0.5;
      this.x = this.centerX - this.image.width * 0.5;
      this.y = this.centerY - this.image.height * 0.5;
      this.gap = 3;
    }
    init(context) {
      context.drawImage(this.image, this.x, this.y);
      const pixels = context.getImageData(0, 0, this.width, this.height).data;

      for (let y = 0; y < this.height; y += this.gap) {
        for (let x = 0; x < this.width; x += this.gap) {
          const index = (y * this.width + x) * 4;
          const red = pixels[index];
          const green = pixels[index + 1];
          const blue = pixels[index + 2];
          const alpha = pixels[index + 3];
          const color = "rgb(" + red + "," + green + "," + blue + ")";
          if (alpha > 0) {
            this.particlesArray.push(new Particle(this, x, y, color));
          }
        }
      }
    }
    draw(context) {
      this.particlesArray.forEach((particle) => particle.draw(context));
    }
    update() {
      this.particlesArray.forEach((particle) => particle.update());
    }
  }

  const effect = new Effect(canvas.width, canvas.height);
  effect.init(ctx);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.draw(ctx);
    effect.update();
    requestAnimationFrame(animate);
  }
  animate();
});

// botões que somam pontos // evento click

let total = 0;

let contBtn3Explo = document.getElementById("btn3Explosion");
// c(contBtn3Explo);
contBtn3Explo.addEventListener("click", function () {
  let = scoreBtn2Explo = 0;
  scoreBtn2Explo = "botão 3 clicado";
  c(scoreBtn2Explo);
});

// score de pontos
// botões que somam pontos
//

let count = 0;
let btn3ExploScore = document.getElementById("btn3Explosion");
btn3ExploScore.onclick = function () {
  count += 1;
  function desable3() {
    document.getElementById("btn3Explosion").disabled = true;
  }
  desable3();
  c(count);

  function score() {
    if (count === 1) {
      // c(time)
      c(parseInt(time * (Math.random() * 1000).toFixed(0)));

      alert(
        `Voce Venceu! Parabéns!!!\nVocê fez: ${
          time * (Math.random() * 1000).toFixed(0)
        }  pontos!!!`
      );

      window.location.href = "game_Victory.html";
    }
    c("valor 1");
  }
  score();

  //
};

// botões não somam score // evento click

let contBtn1 = document.getElementById("button1Explosion");
// c(contBtn1);
contBtn1.addEventListener("click", function () {
  let = scoreBtn1 = 0;
  scoreBtn1 = "botão 1 clicado";
  c(scoreBtn1);
});

let contBtn2 = document.getElementById("button2Explosion");
// c(contBtn2);
contBtn2.addEventListener("click", function () {
  let = scoreBtn2 = 0;
  scoreBtn2 = "botão 2 clicado";
  c(scoreBtn2);
});

// botões que não soma pontos desable

let count0 = 0;
let btn1 = document.getElementById("button1Explosion");
btn1.onclick = function () {
  count0 = 0;
  function desable1() {
    document.getElementById("button1Explosion").disabled = true;
  }
  desable1();
  c(count0);
};

let btn2 = document.getElementById("button2Explosion");
btn2.onclick = function () {
  count0 = 0;
  function desable2() {
    document.getElementById("button2Explosion").disabled = true;
  }
  desable2();
  c(count0);
};
