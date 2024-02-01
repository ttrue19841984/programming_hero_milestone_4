// const name = 'shohel';
// let age = 39;
// let isGradueat = true;

// age = 40;

// let num1 = 23;
// let num2 = 48;
// let num3 = 32;
// (num1 == num2 && num1 == num3)
// let oddnum = 0;
// let x = 7;
// while(x <= 19){
//     const odd = x%2 ==1;
    
//         console.log(odd);
    
//     x++;
// }
// let arr = [3, 5, 20, 34, 97, 9, 10];
// let newArray =[0];
// for(let i=0; i<arr.length; i++){
//     const element =arr[i]
//     if( element > newArray){
//         newArray == element
//     }


//     newArray.push(element);

//     console.log(newArray);
// }
// let sum=1;
// for(let i = 1; i<=5; i++){
//     sum = sum * i;
//     console.log(i, sum)
// }
// const friend = [2, 3, 9, 4, 9, 0, 1, 4, 2]
// const partial = friend.slice(2,5);
// console.log(partial);


function removeDuplicat(names){
    const unique =[];
    for(let i=0; i < names.length; i++){
        const name=names[i]
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
const names=[2, 3, 4, 5, 3, 2, 3, 2];
console.log(removeDuplicat(names));



// const shoppingCart =[
//     {name:'shoe', price:1200},
//     {name:'shirt', price:2200},
//     {name:'pant', price:3700},
//     {name:'balt', price:600}
// ]
// function totalCust(products){
//     let sum = 0;
//     for(let i=0; i<products.length; i++){
//         const product=products[i];
//         sum = sum + product.price;
//     }
//     return sum;
// }
// const expance = totalCust(shoppingCart);
// console.log(expance);
// const shoppingCart =[
//     {name:'shoe', price:1200 , quentity:2},
//     {name:'shirt', price:2200 , quentity:5},
//     {name:'pant', price:3700 , quentity:4},
//     {name:'balt', price:600, quentity:3}
// ]
// function totalCust(products){
//     let sum = 0;
//     for(let i=0; i<products.length; i++){
//         const product=products[i];
//         const totalQuentity =product.price * product.quentity;
//         sum = sum + totalQuentity;
//     }
//     return sum;
// }
// const myShopping = totalCust(shoppingCart);
// console.log(myShopping)