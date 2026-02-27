//// TYPEWRITER EFFECT ////
const typewriterTexts = ["Engineering Excellence", "Innovation & Research", "Future Ready Engineers", "Empowering Young Minds"];
let i = 0, j = 0, currentText = "", isDeleting = false;
const typeSpeed = 150, deleteSpeed = 80, delay = 1500;

function typeWriter() {
  if (i >= typewriterTexts.length) i = 0;
  const fullText = typewriterTexts[i];

  if (!isDeleting) {
    currentText = fullText.substring(0, j + 1);
    j++;
    document.querySelector(".typewriter").textContent = currentText;
    if (currentText === fullText) {
      isDeleting = true;
      setTimeout(typeWriter, delay);
      return;
    }
  } else {
    currentText = fullText.substring(0, j - 1);
    j--;
    document.querySelector(".typewriter").textContent = currentText;
    if (currentText === "") {
      isDeleting = false;
      i++;
    }
  }
  setTimeout(typeWriter, isDeleting ? deleteSpeed : typeSpeed);
}

typeWriter();

//// REVEAL SCROLL EFFECT ////
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let r of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = r.getBoundingClientRect().top;
    const revealPoint = 150;
    if (elementTop < windowHeight - revealPoint) {
      r.classList.add("active");
    } else {
      r.classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);