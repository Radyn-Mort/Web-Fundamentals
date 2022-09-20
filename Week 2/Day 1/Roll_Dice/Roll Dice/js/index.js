function rollDice(){
    let arr = ["./images/one.png","./images/two.png","./images/three.png","./images/four.png","./images/five.png","./images/six.png"];
    let alts = ["Side one of dice","Side two of dice","Side three of dice","Side four of dice","Side five of dice","Side six of dice"]
    let x = Math.floor(Math.random()*6);
    let img = document.querySelector("img")
    img.src = arr[x]
    img.alt = alts[x]
}