//---Easy
//create a function that subtracts two numbers and alerts the difference
function easy(){
  var num1 = 5;
  var num2 = 3;
  var diff = num1 - num2;
  alert(diff);
}

//create a function that divides three numbers and console logs the quotient
function three(){
    var num1 = 6;
    var num2 = 3;
    var num3 = 2;
    var quotient = num1 / num2 / num3;
    console.log(quotient);
}
//create a function that multiplys three numbers and returns the product
function multiply(){
    var num1 = 2;
    var num2 = 3;
    var num3 = 4;
    var product = num1 * num2 * num3;
    return product;
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function medium(){
    var num1 = 5;
    var num2 = 3;
    var num3 = 2;
    var sum = num1 + num2;
    var remainder = sum % num3;
    return remainder;
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hard(){
    var num1 = 5;
    var num2 = 3;
    var num3 = 2;
    var num4 = 4;
    var product = num1 * num2;
    var sum = num3 + num4;
    var diff = num3 - num4;
    if (product > 100){
        console.log(sum);
    }
    else if (product < 100){
        console.log(diff);
    }
    else {
        var product2 = num1 * num2 * num3;
        var remainder = product2 % num4;
        alert(remainder);
    }
}