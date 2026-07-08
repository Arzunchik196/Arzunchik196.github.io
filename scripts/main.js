document.addEventListener('DOMContentLoaded', function () {
  const year = document.querySelector('[data-current-year]');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(function (link) {
    const linkPage = link.getAttribute('href');

    if (linkPage === currentPage) {
      link.classList.add('is-active');
    }
  });
});
