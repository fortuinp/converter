let celciusValue = document.querySelector('[data-c]');

let output= document.getElementById('output')


function convertC(){
  // console.log(celciusValue.value);
  let fahrenheitValue = +celciusValue.value
if (celciusValue.value) {
  let result= (fahrenheitValue*9/5) + 32
   
  output.textContent= result + 'F';
  
}else{
  alert('type in value')
}
}
document.getElementById('fahrenheitBtn').addEventListener('click', convertC)




let fvalue=document.querySelector('[data-f]');

function convertF(){
  let celciusV = +fvalue.value

  if (fvalue.value){
  let result = (celciusV-32) * 5/9 
  output.textContent= result + 'C';
}
else
alert('type in value')

}

document.getElementById('celciusBtn').addEventListener('click', convertF)