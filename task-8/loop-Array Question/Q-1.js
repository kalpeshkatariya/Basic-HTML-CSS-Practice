//How do you find the missing number in a given integer array of 1 to 100.

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]




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

