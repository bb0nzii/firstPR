document.addEventListener('DOMContentLoaded', () => {
const header = document.querySelector('.main-header');
const triggerElement = document.querySelector('.main-sec1');

window.addEventListener('scroll', () => {
    const triggerTop = triggerElement.getBoundingClientRect().top;

    if (triggerTop <= 0) {
    header.classList.add('scrolled');
    } else {
    header.classList.remove('scrolled');
    }
});
});