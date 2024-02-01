// function getEvenNumber(numbers){
//     if(numbers%2 === 1){
//         return 'odd';
//     }else{
//         return 'Even';
//     }
// }
// const isOddNumbers = getEvenNumber(34);
// console.log(isOddNumbers)
// function getEvenNumber(num){
//     const remainder = num % 2;
//     if( remainder === 0){
//         return "true";
//     }else{
//         return "false";
//     }
// }
// const myNumberIsEven = getEvenNumber(32);
// console.log(myNumberIsEven);

// function odd(num){
//     const element = num % 2;
//     if(element !== 0){
//         return "true";
//     }else{
//         return "false";
//     }
// }
// const myOddNumber = odd(32);
// console.log(myOddNumber);

// function isFeet(inchi){
//     const element = inchi / 60;
//     return element;
// }
// const getFeet = isFeet(120);
// console.log(getFeet)

// function sumOfNumbers(numbers){
//     let sum =0;
//     for(let i = 1; i < numbers; i++){
//         sum = sum + i;
//         console.log(i, sum);
//     }
//     return sum;
// }
// const getSum = sumOfNumbers(3);
// console.log(getSum)
// function getNum(num){
//     let sum =0;
//     for(let item of num){
//         sum = sum + item;
//         console.log(item, sum)
//     }
//     return sum;
// }
// const arr = [2, 5, 9, 2];
// const getNumber = getNum(arr);
// console.log(getNumber)

// function number(num){
//     let sum = 0;
//     for(let i = 1; i < num; i++){
//         sum += i;
//         console.log(i , sum);
//     }
//     return sum;
// }


// 

    
        


// const sum=number(6);
// console.log(sum);

// function factorial(num){
//     let result = 1;
//     for(let i = num ; i >=1; i--){
//         result = result * i;
//         console.log(i)
//     }
//     return result;
// }
// const result1 = factorial(3);
// console.log(result1);
// function factorial(num){
//     result=1;
//     let x=num;
//     while(x >=1){
//         result = result * x;
//         console.log(x)
//         x--;
//     }
//     return result;
// }
// const multi= factorial(6);
// console.log(multi);
// function findLargest(num){
//     let largest = num[0];
//     for(let i = 1; i<num.length; i++){
//         const currentItem = num[i];
//         if(currentItem > largest){
//             largest = currentItem;
//         }
//     }
//     return largest;
// }

// const arr = [4, 7, 6, 9, 2, 9];
// const largest = findLargest(arr);
// console.log(largest);

// function getLergastNumber(numbers){
//     let sum = 0;
//     for(let item of numbers){
//         const index = item;
//         if(index % 2 === 0){
//             sum= sum + item;
//         }
//     }
//     return sum;
// }



// const arr = [2, 39, 23, 12, 9 ,53, 80, 26];
// const leargestNumber = getLergastNumber(arr);
// console.log(leargestNumber)
// const myInfo ={
//     name:'shohel',
//     age:39;
//     home:'birampur'
// }

// function Info(info){
//     const sentence = 'amar nam '+info.name+', amar boyos'+ info.age + ', amar bari'+ info.home;
//     return sentence;
// }
// console.log(Info(myInfo))

// function factorial(num){

// if( num === 0 || num === 1){
//     return 1;
// }



//    let result =1;
//     for(let i = 1; i <= num; i++){
//         result = result * i;
//     }
//     return result;
// }
// console.log(factorial(5))
// console.log(factorial(0))

// function getString(letter){
//     let largest = letter[0]
//     for(let i=1; i<letter.length; i++){
//         if(letter[i].length > largest.length ){
//             largest = letter[i];
//         }
//     }
//     return largest;
// }

// const arr = ['sawon', 'metoo', 'manik', 'reju', 'mahmudul', 'atik'];
// const countLetter = getString(arr);
// console.log(countLetter);

// function odd(a, b){
//     if(typeof a !== 'number' || typeof b !== 'number'){
//         return 'give me two number'
//     }
//     return a+b;
// }

// console.log(odd('5', 6))
// function findSum(arr){
// if(!Array.isArray(arr)){
//     return 'please give me an array';
// }
// let sum =0;
// for(let item of arr){
//     sum += item;
// }
// return sum;
// }
// const x = [2, 3, 9, 12];
// console.log(findSum(5));
function findVowel(s){
    if(typeof s !== 'string'){
        return 'please give me a string';
    }
    let vowel = 0;
    let consonent = 0;
    let space = 0;
    for(let i=0; i < s.length;i++){
        let char = s[i];
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            vowel++;
        }else if(char !== ' '){
            consonent++;
        }else{
            space++
        }
    }
    const obj ={
        vowelcount : vowel,
        consonentCount: consonent,
        spaceCount: space
    }
    return obj;
}

const sentence = 'the name of our country is Bangladesh';
console.log(findVowel(sentence));