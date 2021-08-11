let menu = document.querySelector(`#menu`);
let menuOn = document.querySelector(`#toggle-icon`);
menuOn.addEventListener("click", function(){
    menu.classList.toggle('menu-on'); // toggle para saltar entre clases 
})