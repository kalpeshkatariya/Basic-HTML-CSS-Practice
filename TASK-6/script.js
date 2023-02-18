----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//task
//using conditional statements

var x = "25";
if (x.length <= 1) {
    console.log("this sentense is below 1 length");


}
else if (x.length < 3) {
    console.log("this sentense is also below 3 length");
}
else {
    console.log("this sentense in not true");
}


//first problem over

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //find the biggest of 3 numbers (89, 78, 56 )

var x = 890;
var y = 780;
var z = 560;

if (x > y) {
    if (x > z) {
        console.log("x is the biggest number")

    }
    else {
        console.log("z is the biggest number ");

    }
}

else {
    if (y > z) {
        console.log("y is the biggest number ");

    }
    else {
        console.log("z is the biggest number");
    }
}

//quiestion 2 is over

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //value is even or odd

var n = 123456789;




if (n % 2 == 0) {
    console.log("this value is even ")
}
else {
    console.log("this value is odd");
}


//question 3 is over 

----------------------------------------------------------------------------------------------------------------------------------------------------------------------



//Question 4 
//given number is multiple of 3 or  not e.g.10900

var x = 930;

if (x % 3 == 0) {
    console.log("yes this number is maultiple of 3 ");
}
else {
    console.log("no this number is not a maultiple of 3  ");

}


//Question 4  over


---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //check particular sub-word exist in a string or not e.g. i am learning js: 'js' exists or not


var x = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui non maiores modi debitis laboriosam omnis, nihil officia doloremque quidem dolorem assumenda. Repellendus repudiandae possimus dignissimos. Harum reprehenderit doloremque quae, reiciendis ducimus pariatur minus cum aperiam, quidem iustoi am learning js , html , css  alias commodi non provident quisquam. Sed voluptas minus optio temporibus adipisci. Modi perspiciatis, tenetur eaque unde, libero adipisci blanditiis nisi error KaLpEsH eveniet dignissimos assumenda delectus doloremque. AnIL Accusamus ut pariatur, debitis iusto a labore aut. Voluptas, dolorum quibusdam repudiandae sunt voluptatem voluptatibus ullam iusto culpa consequuntur quis laborum velit ipsa nam rerum null qui tenetur edyoda";

//Enter a search keyword
var t = "js";

//all string to lowwercase
var k = x.toLowerCase();
var l = t.toLowerCase();//t
var m = k.trim();
var n = l.trim();


//conditional operator

if (m.search(n) == -1) {
    console.log("This not exist in string");
}
else {
    console.log(" this exists in string "), console.log(m.search(n));
}


//but when not define the value in serach keyword then output is wrong.

//question 5 is over 

---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
  /question 6  start

//calculate simple interest ((p/r * t) * 100 )
var p = 1730000; //principe amount
var r = 9.35; //rate of intrest per annum
var t = 20; //times in years
var f = (p * t * r / 100);

console.log(f);

//question 6 is over

---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //given year leap year or not (29 in feb): 2020

var l = 2047;

if (l % 4 == 0) {
    console.log("this year is leap year");
}
else {
    console.log("This year is not leap year");
}

//Question 7 is over


---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
  
  //0-6 display day week depending upon what user is entering (0-> sunday) : using switch


var w =5;

switch (w) {

    case 0:
        console.log("Today is Sunday");
        break;

    case 1:
        console.log("Today is Monday");
        break;

    case 2:
        console.log("Today is Tuesday");
        break;

    case 3:
        console.log("Today is Wednesday");
        break;

    case 4:
        console.log("Today is Thursday");
        break;

    case 5:
        console.log("Today is Friday");
        break;

    case 6:
        console.log("Today is Saturdy");
        break;

    default:
        console.log("Please Enter a Correct value Between 0 TO 6");
        break;


}


//Question 8 is over


--------------------------------------------------------------------------------------------------------------------------------------------------------------------


// // Implicit coersion:
// // practice questions on implicit coersion
console.log('A' - 1); //NaN
console.log('A' + 1);//A1
console.log(2 + '2' + '2');//222
console.log('hello' + 'world' + 89);//helloword89
console.log('hello' - 'world' + 89);//NaN
console.log('hello' + 78);//hello78
console.log('78' -  90 + '2');//-122
console.log(2 - '2' + 90);//90
console.log(89 - '90' / 2);//44
console.log(true == false) > 2 //false
console.log("50" - 20 - "30");//3030


----------------------------------------------------------------------------------------------------------------------------------------------------------------------




// // practice expression with operators
// // practice on pre & post

//
var numVal = 30;
var u = --numVal;
numVal++;
console.log(u);//
console.log(numVal);//
//29,30

//
var a = 40;
var b = a++;
b++;
console.log(a);//
console.log(b);//
//41,41

//
var f = 50;
var g = f++;
g--;
console.log(g);//
console.log(f);//
//49,51

//
var val = 10;
val++;
var h = --val;
h++;
console.log(h);
console.log(val);
//11,10

//
var num = 20;
num++;
var t = ++num;
num++;
--num
console.log(num, t);
//22,22

//
var num = 10;
--num;
var y = ++num + 10;
--y;
console.log(y);
console.log(num);
//19,10

//
var num = 30;
++num;//31
num++ - 10;
console.log(num);
//32

---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
// Edyoda Assignment - 1     
//-----------------------------------------------------------------------------------------------------------------------------------------------


// Question 1:

// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.

var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '


var str4 = str1 + " " + str2.trim() + str3;

console.log(str4);
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());


// question 1 is over

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Question 2:
// vowel - A,E,I,O,U

// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.

var enteredAlphabet = (prompt("Enter a Alphabet Value"));
var p = enteredAlphabet.toUpperCase();

switch (p) {

    case "A":
        console.log("A is a Vowel");
        break;

    case "E":
        console.log("E is a Vowel");
        break;

    case "I":
        console.log("I is a Vowel");
        break;

    case "O":
        console.log("O is a Vowel");
        break;

    case "U":
        console.log("U is a Vowel");
        break;

    case "B":
        console.log("B is a Consonante");
        break;

    case "C":
        console.log("C is a Consonante");
        break;

    case "D":
        console.log("D is a Consonante");
        break;

    case "F":
        console.log("F is a Consonante");
        break;

    case "G":
        console.log("G is a Consonante");
        break;

    case "H":
        console.log("H is a Consonante");
        break;

    case "J":
        console.log("J is a Consonante");
        break;

    case "K":
        console.log("K is a Consonante");
        break;

    case "L":
        console.log("L is a Consonante");
        break;

    case "M":
        console.log("M is a Consonante");
        break;

    case "N":
        console.log("N is a Consonante");
        break;

    case "P":
        console.log("P is a Consonante");
        break;

    case "Q":
        console.log("Q is a Consonante");
        break;

    case "R":
        console.log("R is a Consonante");
        break;

    case "S":
        console.log("S is a Consonante");
        break;

    case "T":
        console.log("T is a Consonante");
        break;

    case "V":
        console.log("V is a Consonante");
        break;

    case "W":
        console.log("W is a Consonante");
        break;

    case "X":
        console.log("X is a Consonante");
        break;

    case "Y":
        console.log("Y is a Consonante");
        break;

    case "Z":
        console.log("Z is a Consonante");
        break;

    default:
        console.log("This is a Non-Alphabetic Value");
        break;

}


//Questin 2 is over

//-----------------------------------------------------------------------------------------------------------------------------------------------

// Question 3:

// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.



var val1 = parseInt(prompt("Enter a First Value"));
var res = (prompt("Enter a +,-,*,/"));
var op = res.toString();
var val2 = parseInt(prompt("Enter a second Value"));;


25
switch (op) {

    case "+":
        console.log(val1 + val2);
        break;

    case "-":
        console.log(val1 - val2);
        break;

    case "*":
        console.log(val1 * val2);
        break;

    case "/":
        console.log(val1 / val2);
        break;

    case "%":
        console.log(val1 % val2);
        break;

    default:
        console.log("Please Enter a Correct Value");
        break;

}

// question 3 is over

//-----------------------------------------------------------------------------------------------------------------------------------------------


// Question 4:

// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.

// Properties of triangle:

// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.

// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.

// A triangle is said Scalene Triangle, if none of its sides are equal.
//traingle maximum value is 180 degree.


var a = parseInt(prompt("Enter a first side value"));
var b = parseInt(prompt("Enter a second side value"));
var c = parseInt(prompt("Enter a third side value"));

if (a == b) {


    if (b == c) {

        console.log("This is a Equilateral Triangle");
    }
    else {
        console.log("This is a Isosceles Triangle");
    }
}
else if (b == c) {
    console.log("This is a Isosceles Triangle");

}
else if (a == c) {
    console.log("This is a Isosceles Triangle");

}

else {
    console.log("This is a Scalene Triangle");
}

//Find a value of pythagoras theorem

var p = (a * a) + (b * b)

console.log(" c Square value is = " + p);



// Question 4 is over

// --------------------------------------------------------------------------------------------------------------------------------------------------

// Question 5:



// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:

// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.

// For example, input: 20 units then bill is Rs10

// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354



var units = parseInt(prompt("Enter a Unit"));
var bill = 0;

if (units <= 50 && units > 0) {

    bill = bill + (units * 0.50);
    units = 0;

}
else if (units > 0) {

    bill = 50 * 0.5;
    units = units - 50;
}

//

if (units <= 100 && units > 0) {

    bill = bill + units * 0.75;
    units = 0;

}
else if (units > 0) {

    bill = bill + 100 * 0.75;
    units = units - 100;
}
//

if (units <= 100) {

    bill = bill + units * 1.2;
    units = 0;

}
else if (units > 0) {

    bill = bill + 100 * 1.2;
    units = units - 100;
}

//

if (units > 0) {

    bill = bill + units * 1.5

}

bill = bill + (bill * 0.2);
console.log(bill);


// Question 5 is over


//-----------------------------------------------------------------------------------------------------------------------------------------------
