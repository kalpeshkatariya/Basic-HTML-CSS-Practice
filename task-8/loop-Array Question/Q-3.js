// How do you find the largest and smallest number in an unsorted integer array? (sort the array)


var arr = [90, 56, 89, 78, 25, 20, 100, 99, 56, 25, 26, 89];

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
