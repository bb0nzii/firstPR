// function includeHTML() {
//   const elements = document.querySelectorAll('[w3-include-html]');
//   elements.forEach(el => {
//     const file = el.getAttribute("w3-include-html");
//     if (file) {
//       fetch(file)
//         .then(response => {
//           if (!response.ok) throw new Error("Page not found");
//           return response.text();
//         })
//         .then(data => {
//           el.innerHTML = data;
//           el.removeAttribute("w3-include-html");
//           includeHTML(); // 재귀 호출: 중첩 인클루드 지원
//         })
//         .catch(error => {
//           el.innerHTML = "Include failed.";
//           console.error(error);
//         });
//     }
//   });
// }

// function includeHTML(callback) {
//   const elements = document.querySelectorAll('[w3-include-html]');
//   let remaining = elements.length;

//   if (remaining === 0 && typeof callback === 'function') {
//     callback(); // 인클루드 대상이 없으면 바로 콜백 실행
//     return;
//   }

//   elements.forEach(el => {
//     const file = el.getAttribute("w3-include-html");
//     if (file) {
//       fetch(file)
//         .then(response => {
//           if (!response.ok) throw new Error("Page not found");
//           return response.text();
//         })
//         .then(data => {
//           el.innerHTML = data;
//           el.removeAttribute("w3-include-html");

//           // 중첩 인클루드를 위한 재귀 호출
//           includeHTML(() => {
//             remaining--;
//             if (remaining === 0 && typeof callback === 'function') {
//               callback();
//             }
//           });
//         })
//         .catch(error => {
//           el.innerHTML = "Include failed.";
//           console.error(error);
//           remaining--;
//           if (remaining === 0 && typeof callback === 'function') {
//             callback();
//           }
//         });
//     } else {
//       remaining--;
//       if (remaining === 0 && typeof callback === 'function') {
//         callback();
//       }
//     }
//   });
// }

function includeHTML(callback) {
  const elements = document.querySelectorAll('[w3-include-html]');
  let remaining = elements.length;

  if (remaining === 0) {
    if (typeof callback === 'function') callback();
    return;
  }

  elements.forEach(el => {
    const file = el.getAttribute("w3-include-html");
    if (!file) {
      remaining--;
      if (remaining === 0 && typeof callback === 'function') callback();
      return;
    }

    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error("Page not found");
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
        el.removeAttribute("w3-include-html");
      })
      .catch(error => {
        el.innerHTML = "Include failed.";
        console.error(error);
      })
      .finally(() => {
        remaining--;
        if (remaining === 0 && typeof callback === 'function') callback();
      });
  });
}




// 햄버거
// document.addEventListener('DOMContentLoaded', function () {
//   const toggle = document.querySelector('.menu-toggle');
//   const navbar = document.querySelector('.main-navbar');

//   toggle.addEventListener('click', function () {
//     navbar.classList.toggle('active');
//   });
// });