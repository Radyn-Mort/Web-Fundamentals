// 1. count odd

odd=1;
while(odd<=20){
    if(odd%2===1){
        console.log(odd)
    }
    odd++;
}

// 2.divs by 3

 let div=100;
while(div>0){
    if(div%3===0){
        console.log(div)
    }
    div--;
}

//3.print sequence
// 4, 2.5, 1, -0.5, -2, -3.5

let seq =4;
while(seq<=4&&seq>-4){
    console.log(seq)
    seq= seq-1.5;

}

//4.sigma


let sigma=1;
let sum=0;
while(sigma<=100){
    sum= sum+sigma;
    sigma++;
}
console.log(sum)

//5. factorial

let fact=1;
let product=1
while(fact<=12){
    product=product*fact;
    fact++;
}
console.log(product)