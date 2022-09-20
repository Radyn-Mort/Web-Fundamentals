function loading(element){
    alert("Loading weather report...")
}

function tempType(element){
    let allTemps = document.querySelectorAll('.min,.max')
    if(element.value==='fa'){
        for(let i =0; i<allTemps;i++){
            let currentTemp = Math.round(Number(allTemps[i].textContent)* 1.8+32)
            console.log(currentTemp)
        }
    }
    if(element.value==='ce'){

    }
    allTemps[i].textContent = currentTemp;
}

function acceptCookies(){
    document.querySelector(".cookieJar").remove();
}