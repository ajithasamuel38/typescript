"use strict";
let number1 = document.getElementById('num1');
let number2 = document.getElementById('num2');
let buttonElement = document.querySelector('button');
const numResults = [];
const stringResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printresult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = number1.value;
    let num2 = number2.value;
    const result = add(+num1, +num2);
    numResults.push(result);
    const stringresult = add(num1, num2);
    stringResults.push(stringresult);
    printresult({ val: result, timestamp: new Date() });
    console.log(numResults, stringResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It worked");
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
