window.addEventListener('resize', function () {
  document.body.style.overflowX = 'hidden';
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const mobileNav = document.getElementById("mobile-nav");
  const menuIcon = document.getElementById("menu-icon");
  const closeMenu = document.getElementById("close-menu");

  let menuOpen = false;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
      header.style.top = "0"
    } else {
      header.classList.remove("scrolled");
      header.style.top = "46px"
    }
  });

  menuIcon.addEventListener("click", function () {
    mobileNav.style.display = "flex";
    menuOpen = true;
  });

  closeMenu.addEventListener("click", function () {
    mobileNav.style.display = "none";
    menuOpen = false;
  });
});
// *******************
// Contact us
// *******************
// document.querySelector('#contact-form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   e.target.elements.name.value = '';
//   e.target.elements.email.value = '';
//   e.target.elements.message.value = '';
// });
// ************************
// Scroll To Top Button
// ************************
// document.getElementById("scroll-to-top").onclick = () => {
//   window.screenY = 0;
// }

// ******************
// Scroll Up Button
// ******************
let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
