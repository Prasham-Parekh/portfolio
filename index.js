const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', function() {
    navItems.forEach(i => i.classList.remove('clicked'));
    navItems.forEach(i => i.classList.add('not-clicked'));
    
    this.classList.remove('not-clicked');
    this.classList.add('clicked');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('year').textContent = new Date().getFullYear();
});