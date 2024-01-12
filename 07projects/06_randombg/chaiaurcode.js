const randomColor = function(){
    const hex='0123456789ABCDEF'
    let color="";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}


const changeBg = function(){
    const body=document.querySelector('body');
    body.style.backgroundColor=`#${randomColor()}`
}




const start = document.querySelector('#start');
let set;

start.addEventListener('click',function(){
    console.log("color change started")
    set = setInterval(changeBg,1000);
})

const stop=document.querySelector('#stop');
stop.addEventListener('click',function(){
    clearInterval(set);
})