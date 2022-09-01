function alwaysHungry(arr) {
    var counter=0;
    for(var i=0 ; i<arr.length ; i++){
        if(arr[i]=="food"){
            console.log("yummy");
            counter++;
        }
    }       
    if(counter==0){
        console.log("Im hungry");
    }
} 
var food = [3.14, "food", "pie", true, "food"];
alwaysHungry(food);


