/*Задание 13_2: Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай!
 * (вместо Николай должно показываться имя, которое ввел пользователь)*/

let userName = prompt();
alert(`Привет, ${userName}`);


/*Задание 13.3 Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число.
Выведите в консоль результат.*/

let userNumber = prompt('Введите число:');
let userNumberGrade = prompt('Введите степень, для предыдущего числа:');
console.log(userNumber ** userNumberGrade); //prompt возвращает строку, но возведение в степень приводит строки к числам


/* Задание 13.5 Создать произвольную переменную, присвоить ей произвольное строковое значение. 
C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.*/

let myVariable = 'hello';

if (myVariable === 'hidden') {
  myVariable = 'visible';
} else {
  myVariable = 'hidden'
}

alert(myVariable);


/*Задание 13.6 Создать переменную и присвоить ей число.
Записать условие:
- если переменная равна нулю, присвоить ей 1;
- если меньше нуля - строку “less then zero”;
- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).*/

let myNumber = 25;

if (myNumber === 0) {
  myNumber = 1;
} if (myNumber < 0) {
  myNumber = 'Less then zero';
} else {
  myNumber *= 10;
}

console.log(myNumber);


/*Задание 13.7 Запросите у пользователя число и запишите его в переменную.
(Не забывайте, что от пользователя мы всегда получаем строку).
Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.*/

let userNumberFirst = +prompt();

let numberResult = userNumberFirst;

if (numberResult < 5) {
  numberResult = 0;
} else {
  numberResult = 1;
};
console.log(numberResult);



/* Задание 13.8 Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
* предусмотреть вариант ввода одинаковых чисел*/

let userNumber1 = +prompt();
let userNumber2 = +prompt();

let userNumberMax = "Большее число: ";
if (userNumber1 >= userNumber2) {
  userNumberMax += userNumber1;
} else {
  userNumberMax += userNumber2;
} if (userNumber1 === userNumber2) {
  console.log('Числа не могут быть равны!');
};

if (userNumber1 !== userNumber2) {
  console.log(userNumberMax);
};



/* Задание 13.9 Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.*/

let num1 = +prompt();
let num2 = +prompt();

if (num1 % num2 === 0) {
  console.log('yes');
} else {
  console.log('no');
};


/*Задание 13.10 Запросить у пользователя средний балл, записать в переменную.
Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).*/

let middleBall = prompt();

if ( middleBall <= 4) {
  console.log("Двоечник, иди учись!");
} if (middleBall >= 5 & middleBall <= 8) {
  console.log("Неплохо, но давай еще поднажмем!");
} if (middleBall >= 9) {
  console.log("Ого, да ты настоящий отличник!");
};




/*Задание 13.11 Запросить у пользователя ответы на 2 вопроса:
- балл за экзамен (от 0 до 100)
- количество выполненных проектов (от 0 и больше)
Вывести в консоль общий выпускной балл в соответствии с этими значениями:
- 100, если балл за экзамен более 90 или количество проектов более 10.
- 90, если балл за экзамен более 75 и количество проектов не менее 5.
- 75, если балл за экзамен более 50 и количество проектов не менее 2.
- 0 во всех других случаях.*/

let scoreForExam = +prompt();
let numberOfCompletedProject = +prompt();

if (scoreForExam > 90 || numberOfCompletedProject > 10) {
  console.log(100);
};
if (scoreForExam > 75 && scoreForExam <= 90 && numberOfCompletedProject >= 5 && numberOfCompletedProject <= 10) {
  console.log(90);
};
if (scoreForExam > 50 && scoreForExam <= 75 && numberOfCompletedProject >= 2 && numberOfCompletedProject < 5) {
  console.log(75);
;}
if (scoreForExam <= 50 && numberOfCompletedProject < 2) {
  console.log(0);
};
//Что значит: "Во всех других случаях"?
// if (scoreForExam <= 100 && numberOfCompletedProject < 10) {
//   console.log(0);
// }
// else { console.log(0);}



/*Задание 13.12 День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.

Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.*/

let carRentPerDay = 40;
let DayRent = +prompt();

if (DayRent >= 7) {
  console.log(DayRent * 40 - 50);
};
if (DayRent >= 3 && DayRent < 7) {
  console.log(DayRent * 40 - 20);
};
