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
const maxTrails = 5; // 잔상 최대 개수
const trails = [];

document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('img');
  trail.src = 'https://raw.githubusercontent.com/bb0nzii/firstPR/main/src/icon/sunflower.svg'; // 이미지 경로
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


//배너 구름
const clouds = document.querySelectorAll('.bg-cloud');

clouds.forEach((cloud) => {
  let x = 0;
  let y = 0;
  let targetX = 0;
  let targetY = 0;
  let speed = 0.03;

  function updateTarget() {
    targetX = Math.random() * 300 - 150;
    targetY = Math.random() * 200 - 100;
  }

  // 목표를 아주 자주 갱신 (부드러운 흐름 유지)
  setInterval(updateTarget, 3000); // 0.3초마다 살짝 방향 바꿈

  function animate() {
    x += (targetX - x) * speed;
    y += (targetY - y) * speed;

    cloud.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(animate);
  }

  updateTarget(); // 초기 목표 설정
  animate();
});

