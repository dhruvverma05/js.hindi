const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();

  const heigth = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector("#results");
  const hit = document.querySelector('.hit')

  if( heigth === "" || heigth <=0 || isNaN(heigth)) {
    results.innerHTML ="please give a valid height"
  }
  else if( weight === "" || weight <=0 || isNaN(weight)) {
    results.innerHTML ="please give a valid weight"
  } else{
    bmi = (weight / ((heigth*heigth ) / 10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`

  }
  if(bmi <18.6){
    hit.textContent = "under weight"
  }else if (bmi <= 25){
    hit.textContent ="normal"
  }else {
    hit.textContent = "overweight"
  }
})