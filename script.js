const animatedText = document.querySelector('.animated-text');
const texts = ["DEVELOPER", "STUDENT", "FREELANCER"];
let index = 0;

function changeText() {
    animatedText.style.opacity = 0;
    setTimeout(() => {
        animatedText.textContent = texts[index];
        animatedText.style.animation = 'slideInLeft 1s ease-in-out forwards';
        animatedText.style.opacity = 1;
        index = (index + 1) % texts.length;
    }, 500);
}

setInterval(changeText, 3000);

// Initialize first text
animatedText.textContent = texts[index];
animatedText.style.opacity = 1;
