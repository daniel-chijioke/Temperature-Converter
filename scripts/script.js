const inputCelsius = document.querySelector('.js-celsius-input');
const inputFahrenheit = document.querySelector('.js-fahrenheit-input');
const inputKelvin = document.querySelector('.js-kelvin-input');

const outCelsius = document.querySelector('.js-celsius-output');
const outFahrenheit = document.querySelector('.js-fahrenheit-output');
const outKelvin = document.querySelector('.js-kelvin-output');

let outputCelsius;
let outputFahrenheit;
let outputKelvin;

inputCelsius.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        celsiusFunction();
    }
});

inputFahrenheit.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        fahrenheitFunction();
    }
});

inputKelvin.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        kelvinFunction();
    }
});

function celsiusFunction() {
    let inputCelsius1 = Number(inputCelsius.value);

    outputFahrenheit = (inputCelsius1 * 9 / 5) + 32;
    outFahrenheit.innerHTML = `${outputFahrenheit.toFixed(2)}`;
    
    outputKelvin = (inputCelsius1 + 273.15);
    outKelvin.innerHTML = `${outputKelvin.toFixed(2)}`;

    outCelsius.innerHTML = ``;
    inputCelsius.value = ``;
}

function fahrenheitFunction() {
    let inputFahrenheit1 = Number(inputFahrenheit.value);

    outputCelsius = (inputFahrenheit1 - 32) * 5 / 9;
    outCelsius.innerHTML = `${outputCelsius.toFixed(2)}`;
    
    outputKelvin = ((inputFahrenheit1 - 32) * 5 / 9) + 273.15;
    outKelvin.innerHTML = `${outputKelvin.toFixed(2)}`;
    
    outFahrenheit.innerHTML = ``;
    inputFahrenheit.value = ``;
}

function kelvinFunction() {
    let inputKelvin1 = Number(inputKelvin.value);
    
    outputFahrenheit = ((inputKelvin1 - 273.15) * 9 / 5) + 32;
    outFahrenheit.innerHTML = `${outputFahrenheit.toFixed(2)}`;
    
    outputCelsius = (inputKelvin1 - 273.15);
    outCelsius.innerHTML = `${outputCelsius.toFixed(2)}`;

    outKelvin.innerHTML = ``;
    inputKelvin.value = ``;
}