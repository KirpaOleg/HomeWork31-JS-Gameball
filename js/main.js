// Получаем доступ к необходимым узлам
const game = document.querySelector('.game');
const ball = document.querySelector('.ball');
const game2 = document.querySelector('.game2'); // для DVD
const ball2 = document.querySelector('.ball2'); // для DVD
const startBtn = document.querySelector('.start');
const scorelevel = document.querySelector('.scorelevel');
const select = document.querySelector('select');



// Переменные 
let SpeedTimer = 10;

// Рандомайзер
const randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.floor(rand)
};

// Уровень сложности
select.addEventListener('change', () => {
  if (select.selectedIndex === 0) {
    ball.classList.add('selekt1');
    ball.classList.remove('selekt2');
  } 
  if (select.selectedIndex === 1) {
    ball.classList.add('selekt2');
    ball.classList.remove('selekt1');
  };
});

startBtn.addEventListener('click', () => {
  // появление мяча при клике
  ball.style.display = 'block';
  // Рандомное движение мяча
  const movePlay = () => {
    const maxTop = game.clientHeight - ball.clientHeight;
    const maxLeft = game.clientWidth - ball.clientWidth;
    // console.log(game.clientHeight, ball.clientHeight, maxTop);
    topSize = randomInteger(0, maxTop);
    leftSize = randomInteger(0, maxLeft);
    // console.log(topSize, leftSize);
    ball.style.transform = `translate(${leftSize}px, ${topSize}px)`;
  };

  // счетчик кливов на мяч
  let clicks = 0;
  ball.addEventListener('click', () => {
    clicks += 1;
    scorelevel.innerHTML = clicks;
    if (clicks === 5) {
      game.innerHTML = `THE END`;
      clearInterval(stop);
    }
  });
  console.log(SpeedTimer);
  const stop = setInterval(movePlay, 10000 / SpeedTimer); 
}); 

// Изменение цвета по клику и возврат обратно не работает
ball.addEventListener('mousedown', () => {
ball.classList.add('color');
});
ball.addEventListener('mouseup', () => {
ball.classList.remove('color');
});


//  Движение мяча по траектории DVD............
// Создаем необходимые переменные для DVD
let moveX = 200;
let moveY = 200;
let speedX = 5;
let speedY = 5;

startBtn.addEventListener('click', () => {
  // появление мяча при клике
  ball2.style.display = 'block';
   
  const movePlayDVD = () => {
    if (moveX +  ball2.clientWidth >= game2.clientWidth || moveX <= 0) {
        speedX = -speedX 
    }
    if (moveY +  ball2.clientHeight >= game2.clientHeight || moveY <= 0) {
        speedY = -speedY 
    }
      moveX += speedX;
      moveY += speedY;

    ball2.style.left = `${moveX}px`;
    ball2.style.top = `${moveY}px`;
  };
  const stop = setInterval(movePlayDVD, 1000/60);
}); 