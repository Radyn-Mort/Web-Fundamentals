function alwaysHungry(arr) {
    let food = 0;
    for(i=0; i<arr.length;i++){
        if(arr[i]==="food"){
            console.log("yummy")
            food++;
        }
        
    }
    if(food == 0){
        console.log("Im hungry")
    }
}
console.log("chal 1")
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>5){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log("chal 2 ")
console.log(result); // we expect back [6, 8, 10, 9]




function betterThanAverage(arr) {
    var sum = 0;
    var count = 0
    for(let i =0; i < arr.length;i++ ){
        sum+=arr[i]
    }
    sum = sum/arr.length;
    for(let x =0; x < arr.length ; x++ ){
        if(arr[x]> sum){
        count++;
        }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log("chal 3")
console.log(result); // we expect back 4


function reverse(arr) {
    let temp='';
    for(let i =0;i<arr.length/2;i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log("chal 4")
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(let i = 0; i < n-2 ;i++){
        fibArr.push(fibArr[i]+fibArr[i+1])
    }
    // your code here
    return fibArr;
}
console.log("chal 5")
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

