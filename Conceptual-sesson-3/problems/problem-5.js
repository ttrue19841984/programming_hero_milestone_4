function findingBadData(arr) {
  if (!Array.isArray(arr)) {
    return "Please give me an Array";
  } 
  else {
    let badData = 0;
    // for (let i = 0; i < arr.length; i++) {
    //   if (typeof arr[i] !== "number") {
    //     return "Please provied me an Array of number";
    //   }
    //   else{
    //     if(arr[i] < 0){
    //         badData++;
    //     }
    //     }
    //   }
    for(let item of arr){
      if(typeof item !=='number'){
        return 'provied me an Array of number'
      }
      else{
        if(item < 0){
          badData++;
        }
      }
    }
      
    return badData;
    }
  }
const arr = [2, -5, -13];
console.log(findingBadData(arr));
