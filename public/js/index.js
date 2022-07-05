let burger=document.querySelector('.ham');
let navbar=document.querySelector('.navbar');
let items=document.querySelector('.items');
let rightsection=document.querySelector('.right-section')
burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    items.classList.toggle('v-class-resp');
    rightsection.classList.toggle('v-class-resp');
})