var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);

// var   | Val
// fruit1| apples
//fruit2 |oranges-> apples
//
//
//console| apples and apples




var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);


// var   | Val
// fruit1| apples -> oranges  
//fruit2 | oranges -> apples
//temp    | apples
//
//console| apples and oranges 



var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

// var   | Val
// start |0 ->2->4
// end   |12 ->10->8
// 
//
//console| Start:0, end:12 -> Start:2, end:10 Start:4, end:10->Start:4, end:8




    var i=0;
    var t=array.length -1;
        while( i < array.length){
            var temp = array[i];
            array[i]=array[t];
            array[t]=temp;
            console.log(array[i])
            console
            i ++;
            t --;
            
        }



result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);

// var | val
// i   | 0,
// t   | 5,
//temp | "a"
//array|



