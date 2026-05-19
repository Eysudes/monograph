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
  const menuItem = event.target.closest('.naccs .menu div');
  if (!menuItem) return;

  const menuContainer = menuItem.closest('.naccs');
  if (!menuContainer) return;

  const numberIndex = Array.from(menuContainer.querySelectorAll('.menu div')).indexOf(menuItem);

  if (!menuItem.classList.contains('active')) {
    // Remove active from all items
    menuContainer.querySelectorAll('.menu div').forEach(div => {
      div.classList.remove('active');
    });
    menuContainer.querySelectorAll('ul li').forEach(li => {
      li.classList.remove('active');
    });

    // Add active to selected item
    menuItem.classList.add('active');
    const listItem = menuContainer.querySelector('ul').querySelector(`li:nth-child(${numberIndex + 1})`);
    if (listItem) {
      listItem.classList.add('active');
      const listItemHeight = listItem.offsetHeight;
      menuContainer.querySelector('ul').style.height = listItemHeight + 'px';
    }
  }
});

// Menu Dropdown Toggle
const menuTrigger = document.querySelector('.menu-trigger');
const nav = document.querySelector('.header-area .nav');

if (menuTrigger && nav) {
  menuTrigger.addEventListener('click', function() {
    menuTrigger.classList.toggle('active');
    
    // Smooth slide toggle animation
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      nav.style.maxHeight = '0';
    } else {
      nav.classList.add('active');
      nav.style.maxHeight = nav.scrollHeight + 'px';
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