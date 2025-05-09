// thid code for the slider menu

const sliderE1= document.getElementById('slildermenu');
const menuiconE1=document.getElementById('menuicon');
const navlinkE1 = document.querySelectorAll('#nav-link')

menuiconE1.addEventListener('click',()=>{
    sliderE1.classList.toggle('left-[0]')
    menuiconE1.classList.toggle('ri-close-large-line')
    
})

navlinkE1.forEach(link =>{
    link.addEventListener('click',()=>{
        sliderE1.classList.toggle('left-[0]')
        menuiconE1.classList.toggle('ri-close-large-line')

        
        
    })
})

