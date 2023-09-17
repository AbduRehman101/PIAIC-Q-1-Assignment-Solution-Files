// write a program to calculate the area of rectangle...
let len:number = 20;
let width:number = 15;
let result:number = len * width;
console.log("Area of rectangle", result);

// write a program takes input and calculuate the volume of cube....
let volume:number = 15;
let results:number = volume**3;
console.log("Volume of cube", results);

//write a program that checks if a given number is postive negtaive and zero....
let num:number = 15;
if(num>0){
    console.log("This is a postive number");
}else if (num == 0){
    console.log("this is zero");
}else{
    console.log("this is negtive number");
}

// Write a program that checks if a given number is even o odd...
let num1:number = 19;
if (num1 % 2 == 0){ 
    console.log("its Even");
}else {
    console.log("it,s odd");
}

//Exercise 5:  Write a program that determines if a person is eligible to vote based on their age...
let userAge:number = 19;
if (userAge >=18){
    console.log("you are eligible for vote");
}else{
    console.log("you are not eligible");
}

//Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
 let resultss:number = ((10 + 5) * 3 - 2) / (4 % 3)- 7;
 console.log(resultss);