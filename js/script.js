const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".nuvens");
const score = document.querySelector(".score");
const gameover = document.getElementById("gameover");
let count = 0;

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;

  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";
    gameover.classList.remove("invisivel");

    clouds.style.left = `${cloudsPosition}px`;
    clouds.style.animation = "none";

    score.style.animation = "none";

    clearInterval(loop);
    alert("Você morreu!");
  }

  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);

document.addEventListener("keydown", jump);
