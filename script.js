let show= true;
const navMenu = document.querySelector('.nav-menu');
const menuToggle = document.querySelector('.menu-toggle');



menuToggle.addEventListener('click', ()=>{

    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    
});