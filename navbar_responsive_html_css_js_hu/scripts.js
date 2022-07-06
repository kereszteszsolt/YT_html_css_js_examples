button = document.getElementsByClassName("navbar-button")[0];
menu = document.getElementsByTagName("nav")[0];

button.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    button.classList.toggle('clicked');
})
