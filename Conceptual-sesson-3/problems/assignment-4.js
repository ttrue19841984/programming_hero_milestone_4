

function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please provied me a number";
  } else {
    const result = Math.pow(number, 3);
    return result;
  }
}



function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please provied me a string";
  } else {
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
}




function sortMaker(arr) {
if(!Array.isArray(arr)){
  return 'Please provied an array';
}
else{
  let first = arr[0];
  let second = arr[1];

  const temp = first;
  first = second;
  second = temp;

  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  } else if (arr[0] === arr[1]) {
    return "equal";
  } else {
    arr[0] > 0 && arr[1] > 0;
    if (arr[0] < arr[1]) {
      return [first, second];
    } else {
      return arr;
    }
  }
}
}




function findAddress(obj) {
  const address = (obj.street || "__") + "," + (obj.house || "__") + "," + (obj.society || "__");

  return address;
}




function canPay(changeArray, totalDue) {
  if (!Array.isArray() && !changeArray.length) {
    return "Please provied an valid array";
  } else {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
      const element = changeArray[i];
      sum += element;
    }
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}

