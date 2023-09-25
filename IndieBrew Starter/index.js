const arrowBtn = document.querySelector('.arrowBtn');
const nav = document.querySelector('nav');
const hiddenDiv = nav.querySelector('.hiddenDiv');


let isVisible = false;
arrowBtn.addEventListener('click',()=>{
    if(!isVisible){
        hiddenDiv.style.display= 'flex';
        isVisible = true;
    }
    else {
        hiddenDiv.style.display = "none";
        isVisible = false;
    }


})

window.addEventListener('resize', ()=>{
    if(window.innerWidth>767){
        hiddenDiv.style.display='none'
    }
})