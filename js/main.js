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



//커서이미지
const maxTrails = 10; // 잔상 최대 개수
const trails = [];

document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('img');
  trail.src = '../src/icon/sunflower.svg'; // 이미지 경로
  trail.style.position = 'absolute';
  trail.style.width = '80px';
  trail.style.pointerEvents = 'none';
  trail.style.left = `${e.pageX - 40}px`;
  trail.style.top = `${e.pageY - 40}px`;
  trail.style.opacity = '0.25';
  trail.style.transition = 'opacity 0.5s ease-out';
  trail.style.zIndex = 1000;

  document.body.appendChild(trail);
  trails.push(trail);

  // 바로 사라지기 시작
  setTimeout(() => {
    trail.style.opacity = '0';
  }, 0);

  // 0.5초 후 완전히 사라지고 DOM에서 제거 + 배열에서 제거
  setTimeout(() => {
    trail.remove();

    // 배열에서 제거
    const index = trails.indexOf(trail);
    if (index > -1) trails.splice(index, 1);
  }, 500);

  // 최대 개수 초과하면 가장 오래된 잔상 즉시 제거
  if (trails.length > maxTrails) {
    const oldest = trails.shift(); // 배열에서 꺼내기
    if (oldest) oldest.remove();
  }
});