const checkoutForm = document.querySelector('.check-out-form');
const bgOverlay = document.querySelector('.bgo');
const donateBtn = document.querySelector('.donate-btn');
const primaryBtn = document.querySelector('.primary-btn');
const body = document.querySelector('body');
const menuBtn = document.querySelector('.menu-btn');
const upperNavigation = document.querySelector('.upper-navigation');
const closeMenu = document.querySelector('.close-menu');

donateBtn.addEventListener('click', function () {
  checkoutForm.classList.add('popup-form');
  bgOverlay.style = 'display: block;';
  body.style = 'overflow: hidden';
});

primaryBtn.addEventListener('click', function () {
  checkoutForm.classList.add('popup-form');
  bgOverlay.style = 'display: block;';
  body.style = 'overflow: hidden';
});

bgOverlay.addEventListener('click', function () {
  checkoutForm.classList.remove('popup-form');
  bgOverlay.style = 'display: none;';
  body.style = 'overflow: none';
});

menuBtn.addEventListener('click', function () {
  upperNavigation.classList.add('open');
  body.style = 'overflow: hidden';
  menuBtn.style = 'display: none;';
});

closeMenu.addEventListener('click', function () {
  upperNavigation.classList.remove('open');
  body.style = 'overflow: none';
  menuBtn.style = 'display: block;';
});
