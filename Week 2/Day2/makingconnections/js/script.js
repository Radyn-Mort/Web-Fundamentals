function add(){
    let box =  document.querySelector(".acceptBtn");
    let big = box.parentElement;
    let number = document.querySelector(".circle");
    count = number.innerText;
    count--;
    number.innerText = count;
    big.remove();
    conNumber = document.querySelector(".oval");
    conCount = conNumber.innerText;
    conCount++;
    conNumber.innerText = conCount;


}
function deny(){
    let box =  document.querySelector(".denyBtn");
    let big = box.parentElement;
    let number = document.querySelector(".circle");
    count = number.innerText;
    count--;
    number.innerText = count;
    big.remove();
}

function rename(){
    let name = document.querySelector(".card-body-2 > h1")
    console.log(name)
    name.innerText = "new name";
}