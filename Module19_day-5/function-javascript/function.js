function getTotal(num1,num2,num3){
    console.log('Hellow world')
    var sum = num1 + num2 + num3;
    var avarege =sum / 3;
    return avarege;
}
var num1Value=2;
var num2Value=4;
var num3Value=7;
var total = getTotal(num1Value, num2Value, num3Value);

console.log(total.toFixed(2));