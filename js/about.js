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