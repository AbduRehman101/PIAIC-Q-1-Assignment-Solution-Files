"use strict";
//Develop a program that calculates and prints the sum of the first n even numbers using a for loop...
console.log("Question-One");
function evennumbersum(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}
const n = 10;
console.log(`The sum of the first ${n} even numbers is ${evennumbersum(n)}`);
//Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
console.log("Question-Two");
function numberstobeprint(numbers) {
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numberstobeprint(numbers);
//Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
console.log("Question-Three");
function mixed(numbers) {
    let newnumber = [];
    for (let number of numbers) {
        if (number % 2 == 0) {
            newnumber.push(number);
        }
    }
}
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let oddnumbers = mixed(numbers);
console.log(oddnumbers);
//Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
console.log("Question-Four");
function Calculation(radius) {
    let pi = 3.14;
    return pi * radius * radius;
}
let radius = 13;
let area = Calculation(radius);
console.log('the area of the circle is', area);
//Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array...
console.log("Question-Five");
function Failkarnewala(grades) {
    let fg = grades.filter((grade) => grade < 50);
    let rgc = fg.length;
    grades.splice(0, rgc);
    return grades;
}
let grades = [90, 100, 50, 40, 20, 70, 85, 98, 90.49];
let fg = Failkarnewala(grades);
console.log(fg);
//Write a program that uses a function to find the largest element in an array of numbers...
console.log("Question-Six");
function flg(numbers) {
    let large = numbers[0];
    for (let number of numbers) {
        if (number > large) {
            large = number;
        }
    }
    return large;
}
const numbersg = [10, 4, 5, 7, 3, 12, 98, 100];
const large = flg(numbers);
console.log(large);
