const arrowBtn = document.querySelector('.arrowBtn');
const hiddenNavDiv = document.querySelector('.hiddenDiv');
const ul = hiddenNavDiv.querySelector('ul');
const btn =hiddenNavDiv.querySelector('button');
const li = ul.querySelectorAll('li');

// for tablet devices
const graphAnalytics = document.querySelector('.graphAnalytics');
const engagement = document.querySelector('.engagement')
const impressions = document.querySelector('.impressions');
const newDiv = document.createElement('div');
newDiv.classList.add('ImpressEngagement');
graphAnalytics.appendChild(newDiv);
newDiv.appendChild(engagement)
newDiv.insertBefore(impressions, engagement)

const h4 = engagement.querySelector('h4')
let h4Text = h4.childNodes[0]


let isVisible = false
arrowBtn.addEventListener('click', ()=>{
    if(!isVisible){
        hiddenNavDiv.style.display = 'flex';
        hiddenNavDiv.style.flexDirection = 'column';
        hiddenNavDiv.style.position = 'absolute';
        hiddenNavDiv.style.top = '10%';
        hiddenNavDiv.style.left = '28%';
        hiddenNavDiv.style.backgroundColor = 'black';
        hiddenNavDiv.style.opacity = '0.8'
        hiddenNavDiv.style.width = '70vw'

       
       
        hiddenNavDiv.addEventListener('mouseover', ()=>{
            ul.style.cursor = 'pointer'
            btn.style.cursor = 'pointer'
        })

       
       btn.style.textAlign= 'center'
       btn.style.justifyContent = 'center'
       btn.style.width = '60%'
       btn.style.margin= '0 auto'


        ul.style.display = 'flex'; 
        ul.style.flexDirection = 'column';
        ul.style.color = 'white';
        ul.style.border = '1px solid green';
        ul.style.alignItems = 'center';
        ul.style.justifyContent = 'center';
        ul.style.width = '100%'

        for(let i=0; i<li.length; i++){
            
            li[i].style.borderBottom = '1px solid rgb(82, 83, 83)';
            li[i].style.width= '100%'
            li[i].style.margin= '0 auto'
            li[i].style.textAlign= 'center'
            li[i].style.display = 'flex'
            li[i].style.justifyContent= 'center'
            li[i].style.alignItems = 'center'
            li[0].style.height = '60px'
            li[0].style.padding= '30px 0 0'
            
        }

        isVisible = true;
    }else{
        hiddenNavDiv.style.display = 'none';
        isVisible = false
    }
})

window.addEventListener('resize', ()=>{

    if(window.innerWidth>=768 && window.innerWidth<=991){
        h4Text.textContent = 'Engagement'
        newDiv.style.display = 'flex'
        newDiv.style.flexDirection = 'column'
        newDiv.style.gap = '20px'
    }else{
        h4Text.textContent = 'TotalEngagement'
    }


    if(window.innerWidth > 767){
        hiddenNavDiv.style.display = 'none'
        arrowBtn.style.display = 'none'
    }else if(window.innerWidth <= 767){
        arrowBtn.style.display = 'block'
    }
})










// You were in tablet mode

// To make .impressEngagement display flexed

// And then make the graphAnalytics well displayed 