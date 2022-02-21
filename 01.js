//1
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.



function positiveSum(arr) {
    var total = 0;
    for (i=0; i < arr.lenght; i++) {
        if (arr[i] > 0) {
            total += arr[i];
        }
    }
    return total;
}




//2
// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var sum1;
var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
  }
sum1 = summation(2);
alert(sum1);

//3
h = 0
m = 1
s = 1

result = 61000;

function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
};

//4
function greet(name){
  
   return `Hello, ${name} how are you doing today?`;
}

//5 
function greet(){
  return 'hello world!'
}

//6


