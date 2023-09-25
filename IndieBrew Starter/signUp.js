const nav = document.querySelector('nav')
const anchor = nav.querySelector('a')
let anchorText = anchor.childNodes[2]

window.addEventListener('resize', ()=>{
    if(window.innerWidth<=768){
        anchorText.textContent = ""
    }
    else{
        anchorText.textContent = "Back to homepage"
    }
})