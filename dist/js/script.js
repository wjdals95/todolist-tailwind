// start: Navbar
(function () {
  const navbar = document.querySelector(".navbar");
  document
    .querySelectorAll('[data-toggle="navbar"]')
    .forEach(function (toggle) {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        navbar.classList.toggle("navbar-active");
      });
    });
  document
    .querySelectorAll('[data-toggle="navbar-item-dropdown"]')
    .forEach(function (toggle) {
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        toggle.parentElement.classList.toggle("active");
      });
    });
})();
// endL Navbar
