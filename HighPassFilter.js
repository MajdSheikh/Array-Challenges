function highPass(arr, cutoff) {
    var filteredArr = [];
        for(var i=0 ; i<arr.length ;i++){
            if(arr[i]>cutoff){
                filteredArr.push(arr[i]);
            }
        }
    return filteredArr;
}
var x=[6, 8, 3, 10, -2, 5, 9]
var y=5 
var result = highPass(x,y);
console.log(result);