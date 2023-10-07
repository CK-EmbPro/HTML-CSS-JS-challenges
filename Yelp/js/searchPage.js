const arrowBtn = document.querySelector('.arrowBtn');
const nav = document.querySelector('nav');
const hiddenDiv = nav.querySelector('.hiddenDiv');
let isNotShown = true;

arrowBtn.addEventListener('click',()=>{
    if(isNotShown){
        hiddenDiv.style.display = 'flex';
        isNotShown = !isNotShown;
    }else{
        hiddenDiv.style.display = 'none';
        isNotShown = !isNotShown;
    }
})

window.addEventListener('resize',()=>{
    if(window.innerWidth > 992){
        hiddenDiv.style.display = 'none';
    }
})