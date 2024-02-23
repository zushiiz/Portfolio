const switchTheme = () => {
  const rootElem = document.documentElement
  let dataTheme = rootElem.getAttribute('data-theme'),
      newTheme

  newTheme = (dataTheme === 'light') ? 'dark' : 'light'

  rootElem.setAttribute('data-theme', newTheme)

  localStorage.setItem('theme', newTheme)
}

document.querySelector('#theme-switcher').addEventListener('click', switchTheme)

const ham_menu = document.querySelector('.hamburger');
const mob_menu = document.querySelector('.mobile-menu');

ham_menu.addEventListener('click', function () {
  ham_menu.classList.toggle('is-active');
  mob_menu.classList.toggle('is-active');
});

const mobielswitch = () => {
  const rootElem = document.documentElement
  let dataTheme = rootElem.getAttribute('data-theme'),
      newTheme

  newTheme = (dataTheme === 'light') ? 'dark' : 'light'

  rootElem.setAttribute('data-theme', newTheme)

  localStorage.setItem('theme', newTheme)
}

document.querySelector('.theme').addEventListener('click', switchTheme)