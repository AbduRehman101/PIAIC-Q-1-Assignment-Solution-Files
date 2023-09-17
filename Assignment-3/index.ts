// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
console.log("Question-One");
 console.log("For Celcius");
 var C:number = 12;
 var ConvertedinFahrenheit:number = (C * (9 / 5)) + 32;
 console.log(ConvertedinFahrenheit);
 console.log("For Fahrenheit");
 var F:number = 60;
 var ConvertedinCelcius:number = (F - 32) * 5/9;
 console.log(ConvertedinCelcius);

 // Write a program that calculates the percentage.
 console.log("Question-Two");
 console.log("The Given Number is 453");
 var subject:number = 453;
 var Percentage:number = (subject/1100)*100
 console.log(Percentage)
 console.log("Thats the percentage");

 //Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days...
 console.log("Question-Three");
 console.log("The Days Are 117");
 var days:number = 117;
 var calc:number = (days / 7 );
 console.log ("The number of weeks in it are "); console.log(calc);

 //Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount...
 console.log("Question-Four");
 console.log("The prize is 100$ and the discount is 45%")
 var Prize:number = 100;
 var Disc:number = 45;
 var Total:number = (Disc / Prize) * 100;
 console.log(Total);
 console.log("Thats the Calculated Savings");

 //Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."..
 console.log("Question-Five");
 console.log("The age is 67");
 var age:number = 67;
 if (age <= 10)
 console.log("Minor");
 else if (age < 18)
 console.log("Teenage");
 else if (age > 18)
 console.log("Adult");

 //Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
 console.log("Question-Six");
 console.log("The Temperature is 17");
 var weather:number = 17;
 if(weather >= 25)
 console.log("Its a Mild day Wear Soft Clothes");
 else if(weather <25)
 console.log("Wear warm clothes its cold outside");

//Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
console.log("Question-Seven");
console.log("The number is 505");
var n:number = 505;
if(n %5 ==0)
console.log("It is to 5");
else if (n %3 ==0)
console.log("It is to 3");
else
console.log("its not bro");

// Write a program that checks if the given year is leap year or not..
console.log("Question-Eight");
console.log("The year is 2023");
var year:number = 2023
if ( year%4 ==0)
console.log("It is a leap year");
else 
console.log("Its not a leap year");

// Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
console.log("Question-nine");
console.log("The day is 5")
 var o:number = 5
 if(o<=1)
 console.log("Monday");
 else if(o<=2)
 console.log("Tuesday");
 else if(o<=3)
 console.log("Wednesday");
 else if(o<=4)
 console.log("Thrusday");
 else if(o<=5)
 console.log("Friday");
 else if(o<=6)
 console.log("Saturday");
 else if(o<=7)
 console.log("Sunday");

 // Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax Where the tax amount will be calculated by the amount of bill.
console.log("Question-ten");
console.log("The unit is 100")
console.log("and the prize of one unit is 99")
console.log("the bill will be")
var unit:number = 100;
var bill:number = 100*99
console.log("This is the bill without Tax");
console.log(bill);
console.log("The bill with tax")
console.log("The total tax is 500")
var tx:number = 500
var ttx:number = 500/10
var r:number = ttx*2 + bill 
var p:number = ttx*1.5 + bill
var q:number = ttx + bill
if (bill >= 100)
console.log(q);
else if (bill >= 200)
console.log(p);
else if (bill >= 500)
console.log(r);
