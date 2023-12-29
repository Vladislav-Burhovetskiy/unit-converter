const converterData = [
    {
        kategory: "length",
        unit: 3.281,
        unitNameOne: "meters",
        unitNameTwo: "feet"
    },
    {
        kategory: "volume",
        unit: 0.264,
        unitNameOne: "liters",
        unitNameTwo: "gallons"
    },
    {
        kategory: "mass",
        unit: 2.204,
        unitNameOne: "kilos",
        unitNameTwo: "pounds"
    }
]

const convertBtn = document.querySelector("button");
const input = document.querySelector("input");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

let convertTo = 0;
let convertBack = 0;
let sctring = "";
let number = 0;

convertBtn.addEventListener("click", () => {
    input.value ? number = input.value : number = 20;
    
    for (let i = 0; i < converterData.length; i++) {
        convert(number, converterData[i].unit);

        string = `
            ${number} ${converterData[i].unitNameOne} = ${convertTo} ${converterData[i].unitNameTwo} | 
            ${number} ${converterData[i].unitNameTwo} = ${convertBack} ${converterData[i].unitNameOne}
        `;

        if (converterData[i].kategory === "length") {
            lengthEl.textContent = string;
        } else if (converterData[i].kategory === "volume") {
            volumeEl.textContent = string;
        } else if (converterData[i].kategory === "mass") {
            massEl.textContent = string;
        }
    }
});

function convert(inputNumber, unitNumber) {
    convertTo = (inputNumber * unitNumber).toFixed(3);
    convertBack = (inputNumber / unitNumber).toFixed(3);
}
