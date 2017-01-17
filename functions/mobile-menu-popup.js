const mbutton = document.querySelector('#mobile-menu-button');
const menu = document.querySelector('#popup-menu');
const links = menu.querySelectorAll('a');
console.log(links)
function popupMenu(){
  menu.classList.toggle('open')
}
mbutton.addEventListener('click',popupMenu);

links.forEach(link => link.addEventListener('click',popupMenu));
