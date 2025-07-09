//햄버거
console.log('main.js loaded');

const toggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.main-navbar');

if (toggle && navbar) {
  toggle.addEventListener('click', function () {
    navbar.classList.toggle('active');
  });
} else {
  console.warn('toggle 또는 navbar 요소를 찾을 수 없습니다.');
}



//스크롤 애니메이션
document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.scroll-animate');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    targets.forEach(target => observer.observe(target));
});



//탑버튼
document.querySelector('.main-top-btn').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



//탭
function openTab(tabName) {
  document.querySelectorAll('.tab, .tabs').forEach(function(el) {
      el.classList.remove('on');
  });
  document.getElementById(tabName).classList.add('on');
  document.querySelector('.tabs[onclick="openTab(\'' + tabName + '\')"]').classList.add('on');
}