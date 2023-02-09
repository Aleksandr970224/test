/* Задание 1
Написать функцию, которая принимает два параметра и складывает их.

Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.


Примеры результатов вызова функции:

sum(2,4); // 6

sum('d',4); // введенные данные не являются числами

sum(1, [2]); // введенные данные не являются числами

sum(1); // введите два параметра

sum(); // введите два параметра */


let fff;

function sumNumbers (num1, num2) {
  if(typeof num1 === typeof 6 && typeof num2 === typeof 6) {
  console.log(num1 + num2);} 
  else if ((typeof num1 === typeof fff  && typeof num2 === typeof fff) || (typeof num1 === typeof fff  || typeof num2 === typeof fff)) {
    console.log('введите два параметра');
  } else { console.log(`введенные данные не являются числами`);}
};

sumNumbers(3, 5);




/* 
Задание 2
Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка
"Функция "square" не может быть вызвана без аргумента"

function square(a) {
  console.log(a * a)
}

square(10) // 100

square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента*/

let aaa;

function square(a) {
  if (typeof a === typeof 6) {
  console.log(a * a);
  } else if (typeof a === typeof aaa) {
    console.log('Uncaught Error: Функция "square" не может быть вызвана без аргумента');
  };
};

square(10);




/* Задание 3
Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.

Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”

Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.

Написать функцию в стрелочном синтаксисе.*/

let numberUser = +prompt("Введите число: ");

let getRandomNumber = (num) => {
  let randomNum = Math.ceil(Math.random() * 10);
  if (num <= 10 && num > 0 && num === randomNum) {
    return 'Вы выиграли';
  } else if (num > 10 || num <= 0) {
    return 'число не больше 10 и не меньше 0';
  } else { return `Вы не угадали, ваше число -  ${num},  а выпало число ${randomNum}` };
};

console.log(getRandomNumber(numberUser));




/* Задание 4
Определить массив, например let arr = [5, 4, 3, 8, 0];
Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
Например, запуск функции filterFor(arr, 5) дает результат [5,8]
запуск функции filterFor(arr, 10) дает результат []
запуск функции filterFor(arr, 3.11) дает результат [4,5,8]*/


let arr = [5, 4, 3, 8, 0];

function filterFor(array, a) {
  let newArr = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] >= a) {
      newArr.push(array[i]);
    };
  };
  return newArr;
};

console.log(filterFor(arr, 5));





/* Задание 5

Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.*/


let arr = [3, 5, 7,];

// console.log(arr.map((copyArr => copyArr)));

let copyArray = [];

function copyArr(array) {
  copyArray.push(array);
};

arr.map(copyArr);

console.log(copyArray);




/* Задание 6

Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.


Проверить работу функции можно на объекте:

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}*/


const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
};

let sumObjectValues = (obj) => {
  let result = 0;
  for (let key in obj) {
    if(typeof obj[key] === typeof 6){
      result = result + obj[key];
    };
  };
  return result;
};

console.log(sumObjectValues(objectWithNumbers));
