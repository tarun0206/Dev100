document.querySelector('#check').addEventListener('click', judge);

function judge(){
  const PDay = document.querySelector('#day').value
  const day = PDay.toLowerCase();
  if(day === 'saturday' || day === 'sunday'){
    document.querySelector('#placeToSee').innerHTML = 'WEEEEKENDDD!!!!';
  }

  else{
    document.querySelector('#placeToSee').innerHTML = 'BOOOORING!!!!';
  }
}