
const textInput = document.getElementById('textInput');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp = 0;

document.getElementById('mybutton').addEventListener('click', () => {
    if(toFahrenheit.checked){
        temp = Number(textInput.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + '°F';


    }
    else if(toCelsius.checked){
        temp = Number(textInput.value);
        temp = (temp - 32) * (5/0);
        result.textContent = temp.toFixed(1) + '°C';
        

    }
    else{
        result.textContent = 'Select a unit';
    }
});