/*1. Повторите поведение страницы по данному образцу. Координаты должны меняться и зависеть от положения курсора мыши на в области
X:295 Y:3
*/


let pAxis = document.querySelector('.axic');

// pAxis.addEventListener('mousemove', (event) => {
//   pAxis.innerText = `X: ${event.x} Y: ${event.y}`;
//   console.log(event);
// });

pAxis.onmousemove = (event) => pAxis.innerText = `X: ${event.x} Y: ${event.y}`;



/* 2. Повторите поведение страницы по данному образцу. При нажатии на область, красный квадрат его верхний левый угол доложен поместиться в ту координату, на которую вы нажали*/

let div = document.querySelector('div');

document.querySelector('body').addEventListener('click', (event) => {
  div.style.position = 'absolute';
  div.style.top = `${event.y}px`;
  div.style.left = `${event.x}px`;
  div.style.transition = '.2s'
  // console.log(event.x);
});




/* 2. Повторите поведение страницы по данному образцу. При нажатии на область, красный квадрат его верхний левый угол доложен поместиться в ту координату, на которую вы нажали*/

let div = document.querySelector('div');

document.querySelector('body').addEventListener('click', (event) => {
  div.style.position = 'absolute';
  div.style.top = `${event.y}px`;
  div.style.left = `${event.x}px`;
  div.style.transition = '.2s'
  // console.log(event.x);
});



/* 4. Создайте инпут который будет выводить код последнего элемента введенного в инпут  */


let input = document.querySelector('input');

let p = document.querySelector('p');

let text = 'Код нажатой клавиши: '

input.onkeydown = (event) => p.innerText = `${text}${event.keyCode}`;



/* 5. Создайте инпут который будет выводить последний элемент введенный в инпут */

let input = document.querySelector('input');

let p = document.querySelector('p');

let text = 'Нажатая клавиша: ';

input.onkeydown = (event) => p.innerText = text + event.key;



/* 6. Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Ctrl.
(event.keyCode === 17) */


let div = document.querySelector('div');

// document.addEventListener('keydown', (event) => {
//   if (event.keyCode === 17) {
//     div.addEventListener('click', () => {
//       div.style.backgroundColor = 'red';
//     });
//   }
// });

document.onkeydown = (event) => {
  if (event.keyCode === 17) {
    div.onclick = () => div.style.backgroundColor = 'red';
  };
};




/* 7. Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише Ctrl - в его текст записывалось '1', при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'. */

let div = document.getElementById('colorContainer');

div.innerText = 'hi';

div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.justifyContent = 'center';
div.style.fontSize = '24px';

document.onkeydown = (event) => {
  if (event.keyCode === 17) {
    div.onclick = () => div.innerText = 1;
  } else if (event.keyCode === 18) {
    div.onclick = () => div.innerText = 2;
  }  else if (event.keyCode === 16) {
    div.onclick = () => div.innerText = 3;
  }
}

// document.onkeydown = (event) => console.log(event.keyCode);
//
//
//
// /* 8. Создайте кнопку и элемент. При нажатии на кнопку, будет скрываться элемент */

let hidingButton = document.querySelector('input');

let hiddenElem = document.querySelector('div');

hidingButton.addEventListener('click', () => hiddenElem.style.display = 'none');




/* 9. Создайте раскрывающееся меню */

let divTriangle = document.getElementById('triangle');

let li = document.body.children[0].children[1].children;

// console.log(li);

divTriangle.addEventListener('click', () => {
  divTriangle.style.transform = 'rotate(136deg)';
  for (let key of li) {
    key.style.display = 'block'
  };
});
