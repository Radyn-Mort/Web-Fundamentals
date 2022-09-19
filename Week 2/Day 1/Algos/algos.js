var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor);
console.log(ceiling);
console.log(random);

//var     | Val
//floor   |Math.floor(1.8);
//ceiling |Math.ceil( Math.PI );
//random  |Math.random();

//console|1,4, Random number between 0-1

function d6() {
    var roll = Math.floor(Math.random()*6+1);
    // your code here
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
function oracle(){
    var x = Math.floor(Math.random()*lifesAnswers.length);
    console.log(lifesAnswers[x])

}
for(i=1;i<50;i++){
    oracle()
}
