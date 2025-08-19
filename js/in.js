// home-move
window.addEventListener("DOMContentLoaded", function() {
    const elements = [
        document.querySelector('.main-h1'),
        document.querySelector('.main-p'),
        document.querySelector('.button2 a')
    ];

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('show');
        }, index * 400); 
    });
});

// counter 
    let hours = 14;
    let minutes = 30;
    let seconds = 15;

    function updateCountdown() {
      seconds--;
      if (seconds < 0) {
        seconds = 59;
        minutes--;
      }
      if (minutes < 0) {
        minutes = 59;
        hours--;
      }
      if (hours < 0) {
        clearInterval(timer);
      }

      document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    }
    let timer = setInterval(updateCountdown, 1000);


// review slides
         let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000); 
