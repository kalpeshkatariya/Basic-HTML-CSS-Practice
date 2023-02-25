// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1

//ANS :

var array = [1, 2, 3, 4, 5, 1, 3];


const number = 4;
const result = searchArray(array, number);
console.log(result); // Output: [2, 4]


function searchArray(array, number) {

  let positions = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      positions.push(i);
    }
  }
  if (positions.length > 0) {
    return positions;
  } else {
    return -1;
  }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5


//ANS :


var arr = [1, 2, 3, 4, 5]
for (var i = 0; i <= arr.length; i++) {
  var str = ""

  for (var j = arr.length - 1; j >= i; j--) {
    str += arr[j]
  }
  console.log(str)
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]



//ANS:

var ar = [3, 2, 1, 4, 5, 45];
ar.sort(function (a, b) {
  return a - b;
});
console.log(ar);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False


//ANS:


function areAnagrams(str1, str2) {
  // Convert the strings to lowercase and remove all non-alphabetic characters
  str1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
  str2 = str2.replace(/[^a-z]/gi, '').toLowerCase();

  // Check if the two strings have the same length
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the characters in both strings and compare them
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Example usage:
console.log(areAnagrams('LISTEN', 'SILENT')); // true
console.log(areAnagrams('HELLO', 'JELLO')); // false
console.log(areAnagrams('kalpesh', 'peshlak')); // true


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH



//ANS:

var str = "Hello";

function reverseString(str) {
  let reversedStr = '';

  // Loop through the string from the end and add each character to the new string
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

console.log(reverseString(str));



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 6:
//How do you find the missing number in a given integer array of 1 to 100.

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]


//ANS :


function myfunction() {

      var o = document.getElementById('digit').value

      for (i = 0; i < 100; i++) {

            if (nums[i] == o) {

                  document.getElementById('demo').innerHTML = `Yes ${o} is the avaliable in Array`;
                  document.body.style.backgroundColor = "green"; break;
            }
            else {
                  document.getElementById('demo').innerHTML = `No ${o} is the Not avaliable in Array`;
                  document.body.style.backgroundColor = "red";
            }
            continue;
      }
}

// HTML FILE


 <p id="demo"></p>
    <form action="">

        <input type="number" placeholder="Enter a  value" name="value" id="digit" min="0" max="100" required>
        <button type="button" onclick="myfunction()" placeholder="Submit">Submit</button>

    </form>


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 7:
// // From 1 to 100, print "foo" if multiple of 3, "bar" if multiple of 5, if  multiple of both display "hello" or else print the number
// e.g.
// 1
// 2
// foo
// 4
// bar
// foo-->

//ANS :



for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("hello");
      } else if (i % 3 === 0) {
        console.log("foo");
      } else if (i % 5 === 0) {
        console.log("bar");
      } else {
        console.log(i);
      }
    }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


// Question 8:
// How do you find the largest and smallest number in an unsorted integer array? (sort the array)


var arr = [90, 56, 89, 78, 25, 20, 100, 99, 56, 25, 26, 89];



//ANS :



var num = foundnumber(arr);
console.log(num);



function foundnumber(arr){


      var min = arr[0];
      var max = arr[0];

      for (i=0;i<arr.length;i++){


            if(arr[i] < min ) {
                  min = arr[i];

            }
            else  if (arr[i] > max) {
                  max = arr[i];

            }
      }
      return{min,max}
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 9:
// How do you find duplicate numbers in an array if it contains multiple duplicates?


//ANS:

let arr = [1, 2, 3, 2, 4, 5, 4];
let duplicates = [];

for(let i=0; i<arr.length; i++){
  for(let j=i+1; j<arr.length; j++){
    if(arr[i] === arr[j]){
      duplicates.push(arr[i]);
    }
  }
}

console.log(duplicates); // Output: [2, 4]


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 10:
// How do you reverse an array in place in JavaScript?  (using loops) In place means you cannot create a new array. You have to update the original array.

//ANS:

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}

let arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr);
console.log(arr); // Output: [5, 4, 3, 2, 1]


//------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 11:
// How do you find the duplicate number on a given integer array?  ( sort array, nesting of loops)


//ANS :



let arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8];

let duplicates = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
  }
}

console.log(duplicates); // Output: [4, 6, 8]


//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 12:
// How do you find all pairs of an integer array whose sum is equal to a given number?


//ANS:


let arr = [1, 2, 3, 4, 5, 6];
let sum = 7;
let pairs = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === sum) {
      pairs.push([arr[i], arr[j]]);
    }
  }
}

console.log(pairs); // Output: [[1, 6], [2, 5], [3, 4]]

//------------------------------------------------------------------------------------------------------------------------------------------------------------------


