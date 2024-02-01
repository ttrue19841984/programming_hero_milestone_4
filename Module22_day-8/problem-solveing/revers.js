// function reverseString(text){
//     let revers= '';
//     for( let i = text.length - 1; i >= 0; i--){
//         const element = text[i];
//         revers = revers + element;
//         console.log(element, revers);
//     }
//     return revers;
// }

// const myString = 'I am a good boy';
// const reversed = reverseString(myString);
// console.log( "reveresed output:", reversed)

// function revereseWords(str){
//     const words = str.split(' ');
//     const result = [];
//     for(let i=str.length-1; i >= 0; i--){
//         const element = words[i];
//         result.push(element);
//     }
//     const reveres = result.join(' ');
//     return reveres;
// }

// const myString = 'I am a good boy';
// const reversed = revereseWords(myString);
// console.log( "reveresed output:", reversed)
// function add(a,b){
//     return a + b;
// }
// console.log(add('adam' + 'eve'))
const num = -78;
const ans = Math.abs(num);
console.log(typeof ans);