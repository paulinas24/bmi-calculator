"use strict";

//  TU NIE ZACIĄGA VALUE 
// const height = document.getElementById('height').value;
// const weight = document.getElementById('weight').value; 
// let btn = document.querySelector('#btn'); 


// function calculateBmi(height, weight){

//     let bmi = (weight / ((height * height)/10000)).toFixed(2);
//     console.log(bmi)
//     if (bmi < 18.6) {
//         result.innerHTML = `You are underweight :( ${bmi}`
//     } else if(bmi >= 18.6 && bmi < 24.9){
//     result.innerHTML = `Congrats! Normal weight ${bmi}`
//     } else {
//         result.innerHTML = ` You are overweight! :( ${bmi}`
//     }
// }

function clear() {
    window.location.reload()
}

// btn.addEventListener('click', calculateBmi(height, weight)) 

const btn = document.getElementById("calculation");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("There are empty fields. Please fill them out to calculate your BMI");
    return;
  } height = height / 100;

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);



//   document.querySelector("#result").innerHTML = ` Your BMI is: ${BMI}`);

  if (BMI < 18.5) {
    document.querySelector("#result").innerHTML = ` Your BMI is: ${BMI}. You are underweight!`;
  } else if (BMI >= 18.5 && BMI < 25) {
    document.querySelector("#result").innerHTML = ` Your BMI is: ${BMI}You are healty!`;
  } else if (BMI >= 25 && BMI < 30) {
    document.querySelector("#result").innerHTML = ` Your BMI is: ${BMI}. You are Overweight! :(`;
  } else if (BMI >= 30) { 
    document.querySelector("#result").innerHTML = ` Your BMI is: ${BMI}. You are Obese!!`; }
});