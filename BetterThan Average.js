function betterThanAverage(arr) {
    var sum = 0;
    counter=0
        for(var i=0 ; i<arr.length ; i++){
            sum+=arr[i];
            }
            var average= sum/arr.length;

            for(var i=0 ; i<arr.length ; i++){
                if(arr[i]>average){
                    counter++;
                }
            }
    return counter;
}
var x=[6, 8, 3, 10, -2, 5, 9];
var result = betterThanAverage(x);
console.log(result); 