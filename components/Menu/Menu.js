let state = 0;
const togglefunction = () => {
  // Toggle "menu--open" 
  // menu.classList.toggle('menu--open') 
  if(state === 0) {
  TweenMax.to('.menu', .5, {right:'-1%'});
  state = 1;
  } else {
  TweenMax.to('.menu', 1, {right:'-40%'})
  state = 0;
  };
  
};

// Reference to .menu Class
const menu = document.querySelector('.menu');

// Reference to .menu-button class
const menuButton = document.querySelector('.menu-button');
// menuButton reference, click handler that calls toggleMenu
menuButton.addEventListener('click', togglefunction);


// TweenMax.to('.menu-button', 2, {opacity:0, scale:0, Bounce});