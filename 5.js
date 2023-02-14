/* Задание 1
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

Вам понадобятся методы строк. */

let ucFirst = (str) => {
  let result;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== ' ' && str[i] !== ',') {
      result = str[i];      
      return result;
    };
  };
};

let string = 'hello, World';
console.log(ucFirst(string));




/* Задание 2

Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру.*/

let checkSpam = (str) => {
  let result = str.toLowerCase();
  if (result.includes('badword') || result.includes('xxx')) {
  return true;
  } else { return false; };
};

// let string = 'badWord';
// let string = 'badword';
// let string = 'badord';
let string = 'XXX';
// let string = 'xxx';
// let string = 'XX';
// let string = 'spam';
console.log(checkSpam(string));




/* Задание 3

Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»

Обратите внимание: метод reverse существует только у массивов.*/

let str = 'Hi, Bob';

let getStrReverse = (string) => {
  let arr = string.split('');
  arr = arr.reverse();
  let reverseStr = arr.join('');
  return reverseStr;
};

console.log(getStrReverse(str));




/* Задание 4

Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком.


let stations = [

'MAN675847583748sjt567654;Manchester Piccadilly',

'GNF576746573fhdg4737dh4;Greenfield',

'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',

'SYB4f65hf75f736463;Stalybridge',

'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'

];


Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:

MAN: Manchester Piccadilly

Вывести эти строки в консоль

ПОДСКАЗКА:

1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
2. Найдите номер символьного номера точки с запятой.
3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
4. Объедините две новые переменные и строк*/


let stations = [

  'MAN675847583748sjt567654;Manchester Piccadilly',

  'GNF576746573fhdg4737dh4;Greenfield',

  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',

  'SYB4f65hf75f736463;Stalybridge',

  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'

];

let lettersCodeOfStation = [];

for (let i = 0; i < stations.length; i++) {
  lettersCodeOfStation.push(stations[i].slice(0, 3));
};

console.log(lettersCodeOfStation);


let indexOfSemicolon = [];

for (let i = 0; i < stations.length; i++) {
  if (stations[i].includes(';')) {
    indexOfSemicolon.push({
      index: stations[i].indexOf(';'),
    });
  };
};

console.log(indexOfSemicolon);


let infoForUser = [];

for (let i = 0; i < stations.length; i++) {
  infoForUser.push(stations[i].slice(indexOfSemicolon[i]['index']));
  infoForUser[i] = infoForUser[i].slice(1);
};

console.log(infoForUser);


let newStations = [];

for (i = 0; i < indexOfSemicolon.length; i++) {
  newStations = newStations.concat(`${lettersCodeOfStation[i]}: ${infoForUser[i]}`);
};

console.log(newStations);

console.log(newStations[0]);

console.log(stations);
