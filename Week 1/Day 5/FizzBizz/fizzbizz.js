let i=1;
while(i<+100){
    if(i%3===0){
        console.log("Fizz!")
    }
    if(i%5===0){
        console.log("Bizz!")
    }
    if(i%3===0&&i%5===0){
    console.log("FizzBizz!!")
    }
    else{
        console.log(i)
    }
    i++;
}


