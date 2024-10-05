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
// *****************
// Index Files
// *****************

// *****************************
//      Slider Destinations
// *****************************
const slidesContainer = document.querySelector('.slides');
const slideImages = [
  'public/aswan-2.jpg',
  'public/luxor-2.jpg',
  'public/cairo-2.jpg',
  'public/cairo-2.jpg',
  'public/cairo-2.jpg',
  'public/cairo-2.jpg',
  'public/cairo-2.jpg',
];

let index = 0;
let slideWidth = 0;

function createSlides() {
  slideImages.forEach(image => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    const img = document.createElement('img');
    img.src = image;
    img.alt = 'Image';
    slide.appendChild(img);
    slidesContainer.appendChild(slide);
  });
}

function initSlider() {
  createSlides();
  slideWidth = document.querySelector('.slide').offsetWidth;
  slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

function autoSlide() {
  index++;
  if (index >= slideImages.length) {
    index = 0;
  }
  slidesContainer.style.transition = 'transform 0.5s ease-in-out';
  slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

setInterval(autoSlide, 3000);

function updateSlideWidth() {
  slideWidth = document.querySelector('.slide').offsetWidth;
  slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

initSlider();

window.addEventListener('resize', updateSlideWidth);

// *****************************
//      Slider Reviews
// *****************************

const textSlidesContainer = document.querySelector('.text-slides');
const slideTexts = [
  'This is the first paragraph in the text slider.',
  'Here is another paragraph in the text slider.',
  'The third paragraph completes the text slider.',
  'The third paragraph completes the text slider.',
  'The third paragraph completes the text slider.',
  'The third paragraph completes the text slider.',
  'The third paragraph completes the text slider.',
];

let textIndex = 0;
let textSlideWidth = 0;

function createTextSlides() {
  slideTexts.forEach(text => {
    const textSlide = document.createElement('div');
    textSlide.classList.add('text-slide');
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    textSlide.appendChild(paragraph);
    textSlidesContainer.appendChild(textSlide);
  });
}

function initTextSlider() {
  createTextSlides();
  textSlideWidth = document.querySelector('.text-slide').offsetWidth;
  textSlidesContainer.style.transform = `translateX(-${textIndex * textSlideWidth}px)`;
}

function autoTextSlide() {
  textIndex++;
  if (textIndex >= slideTexts.length) {
    textIndex = 0;
  }
  textSlidesContainer.style.transition = 'transform 0.5s ease-in-out';
  textSlidesContainer.style.transform = `translateX(-${textIndex * textSlideWidth}px)`;
}

setInterval(autoTextSlide, 4500);

function updateTextSlideWidth() {
  textSlideWidth = document.querySelector('.text-slide').offsetWidth;
  textSlidesContainer.style.transform = `translateX(-${textIndex * textSlideWidth}px)`;
}

initTextSlider();

window.addEventListener('resize', updateTextSlideWidth);
