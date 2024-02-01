// for(var i=1; i<=20; i++){
//     if(i>5){
//         break;
//     }
//     console.log(i)
// }
// var items = ['bottle', 'mouse', 'sunglass', 'pen'];
// for(var i=0; i<items.length; i++){
//     var item=items[i];
//     if(items == 'sunglass'){
//         break;
//     }
//     console.log(item)
// }
var numbers = [23, 34, 12, 85, 25, 97]
for(var i = 0; i < numbers.length; i++){
   var number = numbers[i];
   if(number > 40){
    continue;
   }
    console.log(number)
}