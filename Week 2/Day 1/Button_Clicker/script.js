function logOut(element){
    element.innerText='Log out'
    console.log('buttons')
}
let likes = 0;
function  liked(element){
    alert('Ninja was liked');
    likes++;
    console.log(likes)
    element.innerText = likes+' Liked' 
}
//have sepertate counters without a diffrent var or function

function disapear(element){
    element.remove();
    // how to add new html ? add text input

}