"use strict";
//Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
console.log("Question-one");
function insert(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
const originalArray = [1, 2, 3, 4, 5];
const modifiedArray = insert(originalArray, 2, 10);
console.log(modifiedArray);
//Write a program that uses a while loop to print the first 25 integers.
console.log("Question-Two");
let count1 = 1;
while (count1 <= 25) {
    console.log(count1);
    count1++;
}
//Write a program that uses a while loop to print the first 10 even numbers.
console.log("Question-Three");
let count = 1;
let evenCount = 0;
while (evenCount < 10) {
    if (count % 2 === 0) {
        console.log(count);
        evenCount++;
    }
    count++;
}
//Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number...
console.log("Question-Four");
function calculateFactorial(n) {
    if (n < 0) {
        throw new Error("Input must be a positive integer.");
    }
    let factorial = 1;
    let currentNumber = 1;
    while (currentNumber <= n) {
        factorial *= currentNumber;
        currentNumber++;
    }
    return factorial;
}
const number = 5;
const factorial = calculateFactorial(number);
console.log(`Factorial of ${number} is: ${factorial}`);
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(name, price, quantity) {
        const newItem = { name, price, quantity };
        this.items.push(newItem);
        this.printCart();
    }
    removeItem(index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
            this.printCart();
        }
        else {
            console.log("Invalid index. Item not removed.");
        }
    }
    updateQuantity(index, quantity) {
        if (index >= 0 && index < this.items.length) {
            this.items[index].quantity = quantity;
            this.printCart();
        }
        else {
            console.log("Invalid index. Quantity not updated.");
        }
    }
    printCart() {
        console.log("Current Cart Contents:");
        this.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - Price: $${item.price} - Quantity: ${item.quantity}`);
        });
        console.log("============================");
    }
}
const cart = new ShoppingCart();
cart.addItem("Item 1", 10, 2);
cart.addItem("Item 2", 20, 1);
cart.updateQuantity(0, 3);
cart.updateQuantity(1, 2);
cart.removeItem(0);
cart.addItem("Item 3", 15, 4);
//Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
console.log("Question-Six");
function removeNegativeNumbers(numbers) {
    const positiveNumbers = numbers.filter(num => num >= 0);
    return positiveNumbers;
}
const numberArray = [1, -2, 3, -4, 5, -6, 7];
const positiveNumbersArray = removeNegativeNumbers(numberArray);
console.log("Original Array:", numberArray);
console.log("Array with Negative Numbers Removed:", positiveNumbersArray);
//Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
console.log("Question-Seven");
function calculateSum(numbers) {
    let sum = 0;
    let index = 0;
    while (index < numbers.length) {
        sum += numbers[index];
        index++;
    }
    return sum;
}
const numberArra1 = [1, 2, 3, 4, 5];
const sum = calculateSum(numberArra1);
console.log(`Sum of the numbers: ${sum}`);
//Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
console.log("Question-Eight");
function cToF(celsius) {
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}
function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}
