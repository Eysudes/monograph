// Header color change on scroll
window.addEventListener('scroll', function() {
  const scroll = window.scrollY;
  const headerText = document.querySelector('.header-text');
  const header = document.querySelector('header');
  
  if (headerText && header) {
    const box = headerText.offsetHeight;
    const headerHeight = header.offsetHeight;

    if (scroll >= box - headerHeight) {
      header.classList.add("background-header");
    } else {
      header.classList.remove("background-header");
    }
  }
});

// Accordion menu toggle
document.addEventListener('click', function(event) {
  // Find the menu item that was clicked (could be anywhere inside it)
  const clickedElement = event.target;
  const naccsContainer = clickedElement.closest('.naccs');
  
  if (!naccsContainer) return;
  
  // Find the immediate menu div parent
  let menuDiv = clickedElement.closest('.menu > div');
  if (!menuDiv) return;
  
  // Get the index of this menu item
  const menuItems = naccsContainer.querySelectorAll('.menu > div');
  const numberIndex = Array.from(menuItems).indexOf(menuDiv);
  
  if (numberIndex === -1) return;
  
  // Remove active from all menu items
  menuItems.forEach(item => item.classList.remove('active'));
  
  // Remove active from all list items
  const listItems = naccsContainer.querySelectorAll('.nacc > li');
  listItems.forEach(item => item.classList.remove('active'));
  
  // Add active to selected items
  menuDiv.classList.add('active');
  if (listItems[numberIndex]) {
    listItems[numberIndex].classList.add('active');
    
    // Update height
    const naccsUl = naccsContainer.querySelector('.nacc');
    if (naccsUl) {
      const selectedHeight = listItems[numberIndex].offsetHeight;
      naccsUl.style.height = selectedHeight + 'px';
    }
  }
});

// Menu Dropdown Toggle
const menuTrigger = document.querySelector('.menu-trigger');
const nav = document.querySelector('.header-area .nav');

if (menuTrigger && nav) {
  menuTrigger.addEventListener('click', function(e) {
    e.stopPropagation();
    menuTrigger.classList.toggle('active');
    nav.classList.toggle('active');
  });
  
  // Close menu when clicking on a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
      menuTrigger.classList.remove('active');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!menuTrigger.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('active');
      menuTrigger.classList.remove('active');
    }
  });
}

// Page loading animation
window.addEventListener('load', function() {
  const preloader = document.getElementById('js-preloader');
  if (preloader) {
    preloader.classList.add('loaded');
  }
});