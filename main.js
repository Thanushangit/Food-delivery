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


// for the menu cart (breakfast,lunch,dinner)

const sections = ['breakFast', 'lunch', 'dinner'];

sections.forEach(section => {
  const btn = document.getElementById(`${section}Btn`);
  btn.addEventListener('click', () => {
    sections.forEach(other => {
      const div = document.getElementById(`${other}Div`);
      const underline = document.getElementById(`${other}BtnUnderLine`);

      const isActive = section === other;

      // Handle section visibility
      div.classList.toggle('hidden', !isActive);
      div.classList.toggle('grid', isActive);
    

      // Handle underline animation
      if (isActive) {
        underline.classList.remove('hidden');
        underline.classList.add('absolute');
        // Expand underline from center out
        setTimeout(() => {
          underline.classList.remove('scale-x-0');
        }, 10);
      } else {
         
        // Collapse underline to center
        underline.classList.add('scale-x-0');
        
        setTimeout(() => {
           
          underline.classList.add('hidden');
          underline.classList.remove('absolute');
        }, 300); // match Tailwind duration
      }
    });
  });
});


// swiper 

const swiperEl = document.getElementById('mySwiper');

  swiperEl.addEventListener('mouseenter', () => {
    swiperEl.swiper.autoplay.stop();
  });

  swiperEl.addEventListener('mouseleave', () => {
    swiperEl.swiper.autoplay.start();
  });