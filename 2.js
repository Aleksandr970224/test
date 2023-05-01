/*Задание 1
Перепишите код с использованием тернарного оператора

let country = 'Sweden';
let access;
if (country == 'Sweden') {
access = true;
} else{
access = false;
}*/

let country = 'Sweden';
let access = (country === "Sweden") ? true : false;
console.log(access);



/*Задание 14.2 Создать переменную и записать в нее число, например 10.
10 раз увеличить значение этой переменной на 1. Результат (1 шт.) вывести в консоль.*/

for (var example = 10; example < 21; example++);

console.log(example);


/*Задание 3
Увеличивая счетчик цикла на 2, нужно 5 раз:
- запрашивать у пользователя ввод числа
- проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"*/

for (let number = 6; number < 16; number = number + 2) {
  let userNumber;
  userNumber = +prompt('Введите число: ');
  if (userNumber === 10) {
    alert('Равно 10');
  } else {
    alert('Не равно 10');
  }
};


/*Задание 4
Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
Задавать количество чисел, которые нужно вывести, при помощи функции prompt.*/

let number = +prompt();

for (i = 0; i <= number; i++) {
  if (i < 100) {
  console.log(i ** 2);
  }
};


/*Задание 14.5 Напишите программу, которая выводит в консоль числа от 1 до 100.
При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»*/

for (i = 0; i < 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  }
};

//Второй вариант:
for (i = 0; i < 100; i++) {
  (i % 3 === 0 && i % 5 === 0) ? console.log('FizzBuzz') :
  (i % 3 === 0) ? console.log('Fizz') :
  (i % 5 === 0) ? console.log('Buzz') : console.log();
}



/* Задание 6
Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
alert( `number ${i}!` );
}*/

let i = 0;

while (i < 3) {
  alert( `number ${i}!`);
  i++;
}


/* Задание 7
Переписать задание 4 в виде функции. Т.е. описать функцию, которая выводит квадраты чисел из заданного диапазона (диапазон будет попадать в функцию как аргументы).

Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
* Задавать количество чисел, которые нужно вывести, при помощи функции prompt.*/

let number1 = +prompt();
let number2 = +prompt();

function getQuadrateOfNumber(min, max) {
  for (i = min; i <= max; i++) {
    i < 100 && console.log(i ** 2);
  };
};

getQuadrateOfNumber(number1, number2);

// for(i = 0; i <= number; i++) {
//   i < 100 && console.log(i ** 2);
// };

// i = 0;

// while(i <= number) {
//   i < 100 && console.log(i ** 2);
//   i++;
// };
//
//
//
// /* Задание 8
Написать функцию, котрая возвращает строку - случайный цвет в формате rgb. Это будет строка вида "rgb(10,55,250)"

Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
function getRandomInteger(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}
Подсказка:

Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255.

Одна функция может вызывать другую функцию*/

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// function getRandomRGB(num1, num2, num3) {
//   let result = (num1 >= 0 && num1 <= 255 && num2 >= 0 && num2 <= 255 && num3 >= 0 && num3 <= 255) ?
//     `rgb(${num1}, ${num2}, ${num3})` : 'no'
//   return result;
// }

function getRandomRGB(num1, num2, num3) {
  if (num1, num2, num3 <= 255 && num1, num2, num3 >=0) {
    return `rgb(${num1}, ${num2}, ${num3})`;
  } else return 'no'
}


console.log(getRandomRGB(getRandomInteger(0, 255), getRandomInteger(0, 255), getRandomInteger(0, 255)));



/* Задание 9
Написать функцию, которая принимает целое число n.

Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.

Такая функция не будет ничего возвращать, она просто выводит информацию в консоль.

Пример, при запуске функции с параметром 3:
"1 integer"
"1.5 decimal"
"2 integer"
"2.5 decimal"*/

function getNumberInteger(n) {
  for (i = 1; i < n; i = i + 0.5) {
    let result = (i === Math.floor(i)) ? ' integer' : ' decimal';
    console.log(i + result);
  }
};

getNumberInteger(5);


// function getNumberInteger(n) {
//   for (i = 1; i < n; i = i + 0.5) {
//     let result = (i % 1 === 0) ? ' integer' : ' decimal';
//     console.log(i + result);
//   }
// };

// getNumberInteger(5);
