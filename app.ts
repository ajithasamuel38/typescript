let number1 = document.getElementById('num1') as HTMLInputElement;
let number2 = document.getElementById('num2') as HTMLInputElement;
let buttonElement = document.querySelector('button')!;

const numResults: Array<number>= [];

const stringResults : string[]= [];

type NumorString = number | string;

type Result = {val: number; timestamp: Date}

interface ResultObj{
    val: number; 
    timestamp: Date
}

function add(num1: NumorString, num2: NumorString){

    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    }else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' '+ num2;
    }
      return +num1 + +num2;
}

function printresult(resultObj: ResultObj){
    console.log(resultObj.val);
}

buttonElement.addEventListener('click', ()=>{
        const num1 = number1.value;
        let num2 = number2.value;
        const result = add(+num1, +num2);
        numResults.push(result as number);
        const stringresult = add(num1, num2);
        stringResults.push(stringresult as string);
         printresult({ val: result as number, timestamp: new Date()});
         console.log(numResults, stringResults);
})

const myPromise = new Promise<string>((resolve, reject)=>{
   setTimeout(() =>{
    resolve("It worked");
   }, 1000);
})

myPromise.then((result) =>{
    console.log(result.split('w'));
})