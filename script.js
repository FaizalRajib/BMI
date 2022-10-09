function BMI(){
    var w = document.getElementById('weight').value;
    var h = document.getElementById('height').value;
    var bmi=w/((h/100)*(h/100));
    var bmiw = (bmi.toFixed(2));
    let status;

    if (bmiw <= 18.5){
        status = "Underweight";
    } else if (bmiw < 25){
        status = "Normal Weight";
    } else if (bmiw < 30){
        status = "Overweight";
    } else {
        status = "Obesity";
    }

    document.getElementById("result").innerHTML = `Your BMI is <b>${bmiw}</b> which means You are <b>${status}</b>`;
    // document.getElementById("result").innerText = "Your BMI is " + bmiw + " which means You are " + status;
}