function isLGSeven(numbers){
    if(typeof numbers !== 'number'){
        return 'Please give me a number'
    }
    else{
        const defer = numbers - 7;
        if(defer < 7){
            return defer;
        }
        else{
            return numbers * 2;
        }
    }

}
console.log(isLGSeven(15))