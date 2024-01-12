const id = document.getElementById('guessField')
console.log(id);
let rand=Math.floor(Math.random()*100)+1;


let myArr = [];
let g=10;
const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const value = parseInt(document.querySelector('#guessField').value)
    const addArr= document.querySelector('.guesses');
    const hint = document.querySelector('.hint');
    const remain=document.querySelector('.lastResult');
    g=g-1;
    myArr.push(value);
    addArr.innerHTML = `${myArr}`;

    if(value<rand){
        hint.innerHTML=`Higher number plz`
    }
    else if(value>rand){
        hint.innerHTML=`Lower number plz`
    }
    else{
        hint.innerHTML=`You guessed it in ${10-g} attempts`
    }

    remain.innerHTML=`${g}`
    

})