const arrowBtn = document.querySelector('.arrowBtn');
const ul = document.querySelector('.responsiveUl')


let isUlVisible = false;
arrowBtn.addEventListener('click', ()=>{
    if (ul.style.display === 'none' || ul.style.display === '') {
        ul.style.display = 'flex';
        ul.style.flexDirection = 'column';
        ul.style.alignItems='center'
        ul.style.justifyContent = 'center2';
        ul.style.position = 'absolute'
        ul.style.top = '14.3%';
        ul.style.left = '60%';
        ul.style.height = '50vh'
        ul.style.width = '40vw'
        ul.style.backgroundColor = 'white'
        ul.style.opacity = '0.7'
        ul.style.color = 'black'
        ul.style.fontSize = '20px'
        ul.style.fontWeight = 'bold'
        ul.style.paddingTop= '30px'
        ul.style.listStyle = 'none'
        ul.style.gap = '20%'

        

        isUlVisible = true
    } else {
        ul.style.display = 'none';

        isUlVisible = false
    }
})


window.addEventListener('resize',()=>{
    if(window.innerWidth > 992){
        ul.style.display = 'none'
        arrowBtn.style.display = 'none'
    }else if(window.innerWidth <= 992){
        arrowBtn.style.display = 'block'
    }
})