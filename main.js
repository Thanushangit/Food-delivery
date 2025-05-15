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






  // animatin 

  const sr =ScrollReveal({
    origin: "top",
    distance:"60px",
    duration:"2500",
    delay:"300",
    reset:false
  })

  sr.reveal(`.hero_text,.cart_heading`);
  sr.reveal(`.hero_image`,{delay:500, scale:0.5});
  sr.reveal(`.service_card,.food_item`,{interval:100,delay:200});
  sr.reveal(`.mobile,.newsletter_bg`);
  sr.reveal(`.mobile_content`,{origin:"left"});
  sr.reveal(`.food_item_container`,{origin:"left",delay:"200"});
   sr.reveal(`.footer`,{origin:"bottom",duration:2000,delay:200,mobile:false});
   sr.reveal(`.gallery_item`,{scale:0.5,interval:100});
   sr.reveal(`.customer_container`,{duration:"3000"});
     sr.reveal(`.dishes_item`,{interval:100,delay:200});
      sr.reveal(`.newsletter_text`,{origin:"bottom",duration:3500,delay:500,mobile:false});
    


  
