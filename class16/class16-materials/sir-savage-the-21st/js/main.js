//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function print21() {
    for ( var i = 0; i < 21; i++) {
        document.querySelector("#savageSays").innerText += " 21 "
    }
}
//Bonus can you make it print '21' 21 times to the dom?
document.querySelector('img').addEventListener('click', print21)