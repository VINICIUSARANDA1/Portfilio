document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburger-button');
    const languagesMenu = document.querySelector('.languages');
  
    hamburgerButton.addEventListener('click', function() {
      languagesMenu.classList.toggle('show');
    });
  });
  