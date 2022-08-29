document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value
  const main = day.toLowerCase()
  if(main == 'saturday' || main == 'sunday'){
    document.querySelector('#placeToSee').innerHTML = 'WEEKENDDDD!!!'
  }
  else{
    document.querySelector('#placeToSee').innerHTML = 'BOOOOOOOOORINGG!!!'
  }
  //Conditionals go here


}
