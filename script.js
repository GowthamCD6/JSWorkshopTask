function convertTemperature()
 {
const temperature = parseFloat(document.getElementById("inputTemperature")
.value);
const conversionType = document.getElementById("conversionType").value;


if (isNaN(temperature))
    {
        document.getElementById("outputTemperature").innerText = 
        "Please enter a valid number.";
        return;
    }

let convertedTemperature;

if (conversionType === "CtoF")
    {
        convertedTemperature = (temperature * 9/5) + 32;
        document.getElementById("outputTemperature").innerText = 
        `${temperature} °C = ${convertedTemperature.toFixed(2)} °F`;
    }
else if (conversionType === "CtoK")
    {
        convertedTemperature = (temperature + 273.32);
        document.getElementById("outputTemperature").innerText = 
        `${temperature} °F = ${convertedTemperature.toFixed(2)} °C`;
    }
}


