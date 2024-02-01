// for(let i=1; i<=7; i++){
//     if(i%2=== 0){
//         console.log('even')
//     }
//     else{
//         console.log('odd')
//     }
// }



// function add(num1, num2) {
//   const sum = num1 + num2;
//   return sum / 2;
// }

// const result1 = add(112, 113);
// const result2 = add(9, 200);
// const totalResult = result1 + result2;
// console.log(totalResult);


// const obj = {
//     name: 'mahmudunnabi',
//     age: 38,
//     email: 'abc@gmail.com'
// }

// for(let propertyName in obj){
//     const value = obj[propertyName];
//     console.log(propertyName, value)
// }



// function inchiToFeet(inchi){
//         const result = inchi/12;
//         return result;
// }



// console.log(inchiToFeet(200))

// function isLeapYear(year){
//      if(year%4===0){
//         return 'leapYear';
//     }
//     else{
//         return 'not a leapyear'
//     }
//      }
    
// console.log(isLeapYear(2022));


// function oddNumber(num){
//     if(typeof num !== 'number' || num < 0){
//         return 'please give me a positive number'
//     }
//     else{
//         const result = num%2;
//         if(result === 1){
//             return "odd"
//         }else{
//             return 'even'
//         }
//     }

// }

// console.log(oddNumber(55));



// function findOddSum(num){
// if(!Array.isArray(num)){
//     return "please give me a array";
// }
// else{
// let sum = 0;
// for(let item of num){
    
//      sum = sum + item;
// }
// return sum;
// }


// }
// const arr1 = [5, 7, 8, 10, 45, 30];
// const totalSum1 = findOddSum(arr1);
// console.log(totalSum1);


// function findOddSum(num){
//     if(!Array.isArray(num)){
//         return "please give me a array";
//     }
//     else{
//         let oddNumber = [];
//         for(let i = 0; i < num.length; i++){
//             const index= num[i];
//             if(index % 2 === 1){
//                 oddNumber.push(index);
//             }
            
//         }
//     return oddNumber;

    
//     }
// }
//     const arr = [5, 7, 8, 10, 45, 30];
//     const totalSum = findOddSum(arr);
//     const oddnumber = 
//     console.log(totalSum);

let first =5;
let second = 7;
// console.log(first, second)
const temp = first;
first = second;
second=temp;
// console.log(first, second);
[first, second]=[second,first]
console.log(first, second);