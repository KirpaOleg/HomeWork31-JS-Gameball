// Получаем доступ к необходимым узлам
const game = document.querySelector('.game');
const ball = document.querySelector('.ball');
const startBtn = document.querySelector('.start');
const scorelevel = document.querySelector('.scorelevel');
const select = document.querySelector('select');


let moveX = 200;
let moveY = 200;
let speedX = 5;
let speedY = 5;
let SpeedTimer = 60;

// console.log(ball2);
// console.log(ball2.style);  

startBtn.addEventListener('click', () => {
  // появление при клике
  ball.style.display = 'block';
 
  const movePlay = () => {
    // движение в рамках заданого поля
    if (moveX +  ball.clientWidth >= game.clientWidth || moveX <= 0) {
      speedX = -speedX 
    }
    if (moveY +  ball.clientHeight >= game.clientHeight || moveY <= 0) {
      speedY = -speedY 
    }
    moveX += speedX;
    moveY += speedY;

    // Math.floor(Math.random(speedX)*10);
    // Math.floor(Math.random(speedY)*10);
    // console.log(moveX,moveY);
    // console.log(speedX,speedY);

    ball.style.left = `${moveX}px`;
    ball.style.top = `${moveY}px`;
    // console.log(moveX,moveY);
    
  };

  // счетчик кливов на мяч
  let clicks = 0;
  ball.addEventListener('click', (event) => {
    clicks += 1;
    scorelevel.innerHTML = clicks;
    // event.target.slyle.backgroundColor = 'red'; // не работает
    if (clicks === 5) {
      game.innerHTML = `THE END`;
      clearInterval(stop);
    }
  });

  // Уровень сложности
  // if (select.options[0] === true) {
  //   SpeedTimer = SpeedTimer;
  // }
  // if (select.options[1] === true) {
  //   SpeedTimer = SpeedTimer * 2;
  // };

  const stop = setInterval(movePlay, 1000/SpeedTimer);
  
}); 

  // Изменение цвета по клику и возврат обратно не работает
  // ball.addEventListener('mousedown', () => {
  //   ball.classList.add('color');
  // });
  // ball.addEventListener('mousedown', () => {
  //   ball.classList.remove('color');
  // });


