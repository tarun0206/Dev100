//--- Easy
//create a variable and assign it a number
let a = 23
//minus 10 from that number
a = a-10
//print that number to the console
console.log(a)
//--- Medium
//create a variable that holds a value from the input
let inputVal = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
inputVal = inputVal + 25
//alert that number
alert(inputVal)
//--- Hard
//create a variable that holds the h1
let h1 = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', sum)

function sum(){
    console.log(a + Number(inputVal))
}