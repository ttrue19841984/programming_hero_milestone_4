function findOddSum(numbers){
     let sum = 0;
    for(let i = 0; i < myNumbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum)
    }
    return sum;
}
function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i<myNumbers.length; i++ ){
        const index =i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element)
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [5, 7, 8, 10, 45, 30];
const myOddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(myOddNumbers);
console.log(findOddSum(myNumbers));


