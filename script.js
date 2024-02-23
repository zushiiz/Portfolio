const ham_menu = document.querySelector('.hamburger');
const mob_menu = document.querySelector('.mobile-menu');

ham_menu.addEventListener('click', function () {
  ham_menu.classList.toggle('is-active');
  mob_menu.classList.toggle('is-active');
});