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
