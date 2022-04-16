'use strict ';
// Selecting Elements
const hamburger = document.querySelector('.hamburger');
const bookmark = document.getElementById('bookmark-project');
// Event Listener
hamburger.addEventListener('click', () => {
  hamburger.parentElement.classList.toggle('show');
  if (hamburger.parentElement.classList.contains('show')) {
    hamburger.src = `images/icon-close-menu.svg`;
  } else {
    hamburger.src = `images/icon-hamburger.svg`;
  }
});
bookmark.addEventListener('click', (e) => {
  e.preventDefault();
  bookmark.querySelector('.bookmark-icon').style.background = 'hsl(0, 0%, 0%)';
  bookmark.querySelector('.bookmark-link').style.color = 'hsla(0, 0%, 0%,0.3)';
});
