function isjavaScriptFile(string){
    if(typeof string !== 'string'){
        console.log('please give me a string')
    }
    else{
        // if(string.toLowerCase().endsWith('.js')=== true){
        //     return true;
        // }else{
        //     return false;
        // }
        // or
    //  return   string.toLowerCase().endsWith('.js');
    // or
    const arr = string.split('.');
    const lastIndex = arr.pop();
    return lastIndex.toLowerCase() === 'js';
    }
}
console.log(isjavaScriptFile('script.js.html'))