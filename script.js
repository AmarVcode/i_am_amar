// Typewriter Effect
const heroTyping = document.querySelector(".hero-typing");
const heroRoles = ["Web Developer", "UI/UX Designer", "Freelancer"];
let heroIndex = 0;
let heroCharIndex = 0;
let heroCurrentRole = "";
let heroIsDeleting = false;

function heroTypeEffect() {
  heroCurrentRole = heroRoles[heroIndex];
  if (!heroIsDeleting) {
    heroTyping.textContent = heroCurrentRole.substring(0, heroCharIndex + 1);
    heroCharIndex++;
    if (heroCharIndex === heroCurrentRole.length) {
      heroIsDeleting = true;
      setTimeout(heroTypeEffect, 1500);
      return;
    }
  } else {
    heroTyping.textContent = heroCurrentRole.substring(0, heroCharIndex - 1);
    heroCharIndex--;
    if (heroCharIndex === 0) {
      heroIsDeleting = false;
      heroIndex = (heroIndex + 1) % heroRoles.length;
    }
  }
  setTimeout(heroTypeEffect, heroIsDeleting ? 80 : 120);
}

heroTypeEffect();
