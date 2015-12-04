// The Odin Project

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Solution

var sum = 0;
var max = 1000;

for(var number = 0; number < max; number++){

if(number % 3 === 0){
    sum += number;
}
else if(number % 5 === 0){
    sum += number;
}

}

console.log(sum);