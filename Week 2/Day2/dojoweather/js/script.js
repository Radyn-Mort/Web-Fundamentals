function loading(element){
    alert("Loading weather report...")
}

function changeTemperature( element ){
    let allDegrees = document.querySelectorAll( ".max, .min" );
    
    for( let i = 0; i < allDegrees.length; i ++ ){
        let currentNum;
        if( element.value === "far" ){
            
            currentNum = Math.round( Number(allDegrees[i].textContent) * 1.8 + 32 );
        }
        else{
            currentNum = Math.round( (Number(allDegrees[i].textContent) - 32) * .5556 );
        }
        allDegrees[i].textContent = currentNum;
    }
}

function acceptCookies(){
    document.querySelector(".cookieJar").remove();
}