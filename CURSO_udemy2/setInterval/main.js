const circle = document.getElementById('circle');
const xFinalPosition = 200;
let xPos = 0;

const interval = window.setInterval(()=>{
    if(xPos > xFinalPosition){
        return window.clearInterval(interval);
    }
    xPos += 1;
    circle.style.transform = `translateX(${xPos}px)`;
}, 1);