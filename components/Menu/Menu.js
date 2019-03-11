
const toggleMenu = () => {
  // Toggle "menu--open" 
  menu.classList.toggle('menu--open') 
}

// Reference to .menu Class
const menu = document.querySelector('.menu');

// Reference to .menu-button class
const menuButton = document.querySelector('.menu-button');
// menuButton reference, click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
