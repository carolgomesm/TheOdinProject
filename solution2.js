var num1 = 1;
var num2 = 2;
var num3 = 0;
var sum = 0;

while(num1 < 400000){

	if(num1%2 === 0){
		sum += num1;
	}

	num3 = num1 + num2;
	num1 = num2;
	num2 = num3;		
};

console.log(sum);