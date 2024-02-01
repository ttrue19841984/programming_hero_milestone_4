// function printDetails(person){
// if(typeof person !== 'object'){
//     console.log('please provied me a valid object') ;
// }else{
//     const name = person.name || 'nai';
//     const age = person.age || 'nai';
//     const email = person.email || 'nai';
//     const bou = person.bou || 'nai';
    
//     return 'amar nam ' + name + '. amar boys '+age+'. amar email '+email+'. amr bou '+bou;
// }

// }
// const obj = {
//     name: 'mahmudunnabi',
//     age: 38,
//     email: 'abc@gmail.com'
// }
// console.log(printDetails(obj));

function compare(a, b) {
    if (a == b) {
    return true;
    } else {
    return false;
    }
   }
   const result = compare(15, "15");
   console.log(result);