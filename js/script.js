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

/*Задача 3   */
let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));
let c = Number(prompt('Введите третье число'));
const max = Math.max(a, b, c);
console.log(`${max} - наибольшее число`);