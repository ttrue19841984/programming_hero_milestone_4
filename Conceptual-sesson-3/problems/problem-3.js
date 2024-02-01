function mindGame(number){
    // if(typeof number !== 'number'){
    //     console.log('please give me a number');
    // }
    // else if(number <= 0){
    //     console.log('please give me a positive number')
    // }
    if(typeof number !== 'number' || number <= 0){
        console.log('Please provied a number')
    }
    else{
        const result = (((number*3)+10)/2)-5;
        return result;
    }
}
console.log(mindGame(5));