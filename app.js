// VARIABLES
const previousElement = document.querySelector(".previous-display");
const currentElement = document.querySelector(".current-display");
const acButton = document.querySelector(".ac");
const pmButton = document.querySelector(".pm");
const percentButton = document.querySelector(".percent");

const additionButton = document.querySelector(".addition");
const subtractionButton = document.querySelector(".subtraction");
const multiplicationButton = document.querySelector(".multiplication");
const divisionButton = document.querySelector(".division");
const equalButton = document.querySelector(".equal");

const decimalButton = document.querySelector(".decimal");
const number0 = document.querySelector(".number-0");
const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const number4 = document.querySelector(".number-4");
const number5 = document.querySelector(".number-5");
const number6 = document.querySelector(".number-6");
const number7 = document.querySelector(".number-7");
const number8 = document.querySelector(".number-8");
const number9 = document.querySelector(".number-9");

const numbersArray = [
  number0,
  number1,
  number2,
  number3,
  number4,
  number5,
  number6,
  number7,
  number8,
  number9,
];

let previousOperand = "";
let currentOperand = "";
let operation = undefined;
let temporaryOperand = "";

function DisplayNumber() {
  if (operation) {
    previousElement.innerHTML = `${previousOperand} ${operation}`;
  } else {
    previousElement.innerHTML = previousOperand;
  }

  currentElement.innerHTML = currentOperand;
}

function Appendnumber(number) {
  if(number== "." && currentOperand.includes(".")) return;
  if(number == 0 && currentOperand == "0") return;
  if(currentOperand.length > 7) return;
  currentOperand = currentOperand.toString() + number.toString();
  DisplayNumber();
}

function ChooseOperation(selectedOperation) {
  if(temporaryOperand) {
    previousOperand = temporaryOperand.toString();
    currentOperand= "";
    temporaryOperand = "";
    operation = selectedOperation;
    DisplayNumber();
    return;
  }
  operation = selectedOperation;
  previousOperand = currentOperand;
  acButton.innerHTML = "AC"
  currentOperand = "";
  DisplayNumber();
}

function compute() {
  let computation;
  const previous = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if(!operation) return;
  if (isNaN(previous) || isNaN(current)) return;

  switch (operation) {
    case "+":
      computation = previous + current;

      break;

    case "-":
      computation = previous - current;
      break;

    case "x":
      computation = previous * current;
      break;

    case "÷":
      computation = previous / current;
      break;

    default:
      break;
  }
  
  if(isNaN(computation)) return;

  currentOperand = computation;
  previousOperand = "";
  operation = undefined;
  DisplayNumber();
  temporaryOperand = currentOperand;
  currentOperand = "";
}

function Percent() {
  currentOperand = currentOperand / 100;
  DisplayNumber();
}

function PlusMinus() {
  currentOperand = currentOperand * -1;
  DisplayNumber();
}

function AllClear() {
  if (!previousOperand) {
    currentOperand = currentOperand.slice(0, currentOperand.length - 1);
  } else {
    previousOperand = "";
    currentOperand = "";
    operation = undefined;
    acButton.innerHTML = "C"
  }

  DisplayNumber();
}

//ADDEVENTLISTENER TO NUMBER BUTTONS

for (let i = 0; i < numbersArray.length; i++) {
  const number = numbersArray[i];
  number.addEventListener("click", () => {
    Appendnumber(i);
    temporaryOperand = "";

  });
}

decimalButton.addEventListener("click", ()=>{
  Appendnumber(".");
  
})

//ADDEVENTLISTENER TO OPERATOR BUTTONS
multiplicationButton.addEventListener("click", () => {
  ChooseOperation("x");
});

divisionButton.addEventListener("click", () => {
  ChooseOperation("÷");
});

additionButton.addEventListener("click", () => {
  ChooseOperation("+");
});

subtractionButton.addEventListener("click", () => {
  ChooseOperation("-");
});

equalButton.addEventListener("click", () => {
  compute();
});

// ADD EVENT LISTENER TO AC, PM AND PERCENT BUTTONS

acButton.addEventListener("click", () => {
  AllClear();
});

pmButton.addEventListener("click", () => {
  PlusMinus();
});

percentButton.addEventListener("click", () => {
  Percent();
});



//FUNCTIONS
// let reset = document.getElementById("content2");
// let division = document.getElementById("content5");
// let multiplication =document.getElementById("content9");
// let subtraction = document.getElementById("content13");
// let addition = document.getElementById("content17");
// let equalEnter = document.getElementById("content20");
// let zero = document.getElementById("content18");
// let one = document.getElementById("content14");
// let two = document.getElementById("content15");
// let three = document.getElementById("content16");
// let four = document.getElementById("content10");
// let five = document.getElementById("content11");
// let six = document.getElementById("content12");
// let seven = document.getElementById("content6");
// let eight = document.getElementById("content7");
// let nine = document.getElementById("content8");
// let point = document.getElementById("content19");
// let displayScreen = document.getElementById("content1");
// let minusPlus = document.getElementById("content3");
// let percentage = document.getElementById("content4");
// let allContentButtons = document.getElementsByTagName("button");
// let previousDisplay = document.querySelector(".previous_display");
// let currentDisplay = document.querySelector(".current_display");

// //Not:sayilara ait objeleri array icinde tanimladik
// let numberElementsArray = [
//     zero,one,two,three,four,five,six,seven,eight,nine
// ]

//Not:functions  for loop icine koydugumuz HandleNumberClick fonksiyonu ile hesap makinesi
//ekranina sayilari ekledik
// let HandleNumberClick = (numStr) => {
//     let previousDisplay = currentDisplay.textContent;
//     if (previousDisplay === '0'){ //not: en basta 0 olmamasi icin if kosuluyla  0 yerine ekrana numstr yazdirdik.
//         currentDisplay.innerHTML = numStr;
//     }else{currentDisplay.innerHTML += numStr; //Not: Else ile ekrana sayilari eklemeye devam ettik
//      }

// }

// //Not:for loop ile Arrayin icine attigimiz number objelerini tek tek yakalayiphepsine AddEventListener eklemis olduk.
// for (let i = 0; i < numberElementsArray.length; i++) {
//      const numberObjets = numberElementsArray[i];
//      numberObjets.addEventListener("click", ()=>{
//          HandleNumberClick(i.toString());

//         // console.log(typeof(i.toString()));
//         // console.log(typeof(i));

//      })

//  }
