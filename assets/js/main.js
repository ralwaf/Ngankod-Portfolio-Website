const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');

  if (menu.classList.contains('open')) {
    menu.classList.remove('closed');
  } else {
    menu.classList.add('closed');
  }
});




window.addEventListener("scroll", function () {
    var backToTopButton = document.querySelector(".back-to-top");

    if (window.pageYOffset > 0) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});