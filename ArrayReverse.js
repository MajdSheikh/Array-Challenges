function reverse(arr) {
    var newarray =[];
    for(var i=arr.length-1 ; i>=0 ; i--){
        newarray.push(arr[i]);
    }
    return newarray;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 
