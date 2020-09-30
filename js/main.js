const modal = document.querySelector(".modal-coupone");
const addBonus = document.querySelector(".add-bonus");
const closeButton = document.querySelector(".close");

const btnMobileMenu = document.querySelector(".mobile-menu-btn a");
const btnCloseMobileMenu = document.querySelector(".close-mobile-menu");
const mobileMenu = document.querySelector(".mobile-menu");

const onModal = () => modal.classList.toggle('is-open');
const onMobileMenu = () => mobileMenu.classList.toggle('open');

addBonus.addEventListener('click', onModal);
closeButton.addEventListener('click', onModal);

btnMobileMenu.addEventListener('click', onMobileMenu);
btnCloseMobileMenu.addEventListener('click', onMobileMenu);