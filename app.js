/* 
first we have to generate color codes:
color codes are combination of hexadecimal values starting with # and 6 in number*/
const randomColor = function(){
    let color='#';

    const hex= '0123456789ABCDEF' ;

    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
}
    return color;
}

let intervalId;
const startColorChange= function(){
    if(!intervalId){
        intervalId=setInterval(changebgcolor,1000);
    }

    function changebgcolor(){
        document.body.style.backgroundColor=randomColor();
    }
}

const stopColorChange= function(){
    clearInterval(intervalId);
    bgcolor=null;
}

document.querySelector('#start').addEventListener('click', startColorChange);

document.querySelector('#stop').addEventListener('click', stopColorChange);
