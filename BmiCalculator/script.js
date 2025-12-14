const form = document.getElementById('bmiCalculator');
const btn = document.getElementsByClassName('btn');


 form.addEventListener('click',(event)=>{
    event.preventDefault();
     const weight = document.getElementById('weight').value;
     const height = document.getElementById('height').value;
     const results = document.getElementById('result');
 
           results.innerHTML = `bmi is ${(weight / ((height * height)/10000)).toFixed(2)}`;

    });