/* Задача 1
num1 =  Math.pow(2, 3);
num2 =  Math.pow(3, 3);
console.log(num1 + num2);*/

/*Задача 2 
let maney = Number(prompt('Введите размер заработной платы'));
if (isNaN(maney)) {
    alert('Значение задано неверно!');
}
const wages = (maney) => {
    maney = maney * 0.87;
    console.log(maney);
}
wages(maney);*/

/*Задача 3  
let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));
let c = Number(prompt('Введите третье число'));
const max = Math.max(a, b, c);
console.log(`${max} - наибольшее число`);*/

/*Задача 4 */

let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));

function summNumber(num1, num2) {
    summ = num1 + num2;
    console.log(summ);
}

function diffNumber(num1, num2) {
    max = Math.max(num1, num2);
    min = Math.min(num1, num2);
    diff = max - min;
    console.log(diff);
}

function multiplNumber(num1, num2) {
    multipl = num1 * num2;
    console.log(multipl);
}

function divNumber(num1, num2) {
    div = num1 / num2;
    console.log(div);
}

summNumber(num1, num2);
diffNumber(num1, num2);
multiplNumber(num1, num2);
divNumber(num1, num2);