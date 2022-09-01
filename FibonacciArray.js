function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i=2 ; i<n ; i++){
        fibArr.push(fibArr[i-1]+fibArr[i-2]);
    }
    return fibArr;
}
var x = 10;
var result = fibonacciArray(x);
console.log(result);