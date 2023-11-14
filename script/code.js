let celciusValue = document.querySelector('[data-c]');
let 
let output=document.getElementById('output')


function convertC(){
  // console.log(celciusValue.value);
  let fahrenheitValue = +celciusValue.value

 let result= (fahrenheitValue*9/5) + 32
  
 output.textContent= result + 'F';
}
document.getElementById('fahrenheitBtn').addEventListener('click', convertC)



