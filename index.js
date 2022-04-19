const reamur=document.getElementById("reamur");
const celcius=document.getElementById("celcius");
const kelvin=document.getElementById("kelvin");
const fahrenheit=document.getElementById("fahrenheit");

function rToAll(){
    let outputCelcius=parseFloat(reamur.value) * 5/4;
    celcius.value=parseFloat(outputCelcius);
    let outputFahrenheit=(parseFloat(reamur.value) * 9/4) + 32;
    fahrenheit.value=parseFloat(outputFahrenheit);
    let outputKelvin=(parseFloat(reamur.value) * 5/4) + 273;
    kelvin.value=parseFloat(outputKelvin);
}
function cToAll(){
    let outputReamur=parseFloat(celcius.value) * 4/5;
    reamur.value=parseFloat(outputReamur);
    let outputFahrenheit=(parseFloat(celcius.value) * 9/5) + 32;
    fahrenheit.value=parseFloat(outputFahrenheit);
    let outputKelvin=parseFloat(celcius.value) + 273;
    kelvin.value=parseFloat(outputKelvin);
}
function fToAll(){
    let outputCelcius=(parseFloat(fahrenheit.value) - 32) * 5/9;
    celcius.value=parseFloat(outputCelcius);
    let outputKelvin=(parseFloat(fahrenheit.value) - 32) * 5/9 + 273;
    kelvin.value=parseFloat(outputKelvin);
    let outputReamur=(parseFloat(fahrenheit.value) - 32) * 4/9;
    reamur.value=parseFloat(outputReamur);
}
function kToAll(){
    let outputReamur=(parseFloat(kelvin.value) - 273) * 4/5;
    reamur.value=parseFloat(outputReamur);
    let outputCelcius=parseFloat(kelvin.value) - 273;
    celcius.value=parseFloat(outputCelcius);
    let outputfahrenheit=(parseFloat(kelvin.value) - 273) * 9/5 +32;
    fahrenheit.value=parseFloat(outputfahrenheit);
}
