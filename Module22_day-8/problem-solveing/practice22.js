// function feetToInch(feet){
//     const result =feet * 12;
//     inche = result;
//     return inche;
// }
// const getFeet = feetToInch(24);
// console.log(getFeet);

// function centimeterToMeter(centimeters){
//     const result = centimeters/100;
//     const meter = result;
//     return meter;
// }
// const getMeter = centimeterToMeter(10000);
// console.log(getMeter);
// let book1 = 100;
// let book2 = 200;
// let book3 = 300;
// function paperRequirements(bookQuentity1, bookQuentity2, bookQuentity3) {
//     const book1Price = book1 * bookQuentity1;
//     const book2Price = book2 * bookQuentity2;
//     const book3Price = book3 * bookQuentity3;
//     const totalBookPrice = book1Price + book2Price + book3Price;
//     return totalBookPrice;
// }
// const getResult = paperRequirements(1, 5, 3);
// console.log(getResult);

// const friends = [ 'sajid', 'mamun', 'kamal', 'jubayer bin rased', 'chinku'];

// function bestFriend(names){
//     let largest = names[0];
//     for(let i = 1; i<names.length; i++){
//         const name = names[i];
//         if(name.length > largest.length){
//             largest = name;
//         }

//     }
//     return largest;
// }
// const largestName = bestFriend(friends);
// console.log(largestName);

// const numbers = [45, 87, 96, 11, 63, -56, 71, 28];

// function findNumbers(num) {
//     let numbers = [];
//   for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     if(element < 0){
//         numbers.push(element);
//     }
//   }
//   return numbers;
// }

// const finalResult = findNumbers(numbers);
// console.log(finalResult);

let num =[2, 3, 4, 4, 8, 23, 6, 9, 10, 1];

console.log(num.indexOf(23))