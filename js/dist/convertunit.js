const units = {
    length: {
        meters: 1,
        kilometers: 0.001,
        centimeters: 100,
        millimeters: 1000,
        miles: 0.000621371,
        yards: 1.09361,
        feet: 3.28084,
        inches: 39.3701
    },
    weight: {
        kilograms: 1,
        grams: 1000,
        milligrams: 1000000,
        pounds: 2.20462,
        ounces: 35.274
    },
    volume: {
        liters: 1,
        milliliters: 1000,
        cubic_meters: 0.001,
        cups: 4.22675,
        pints: 2.11338,
        quarts: 1.05669,
        gallons: 0.264172
    }
};

function populateUnits() {
    const unitType = document.getElementById('unit-type').value;
    const inputUnit = document.getElementById('input-unit');
    const outputUnit = document.getElementById('output-unit');

    inputUnit.innerHTML = '';
    outputUnit.innerHTML = '';

    for (let unit in units[unitType]) {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.text = unit;
        inputUnit.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.text = unit;
        outputUnit.appendChild(option2);
    }
}

function convertUnit() {
    const unitType = document.getElementById('unit-type').value;
    const inputValue = document.getElementById('input-value').value;
    const inputUnit = document.getElementById('input-unit').value;
    const outputUnit = document.getElementById('output-unit').value;

    if (!inputValue || !inputUnit || !outputUnit) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const baseValue = inputValue / units[unitType][inputUnit];
    const outputValue = baseValue * units[unitType][outputUnit];

    document.getElementById('result').textContent = `${inputValue} ${inputUnit} = ${outputValue.toFixed(4)} ${outputUnit}`;
}

window.onload = populateUnits;
