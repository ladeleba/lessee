const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

yesBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  confettiHearts();
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
});

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function moveNoButton() {
  const pad = 12;
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  const rect = noBtn.getBoundingClientRect();
  const maxX = vw - rect.width - pad;
  const maxY = vh - rect.height - pad;

  const minX = pad;
  const minY = pad;

  const x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
  const y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

function confettiHearts() {
  const count = 28;
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.textContent = Math.random() > 0.5 ? "💖" : "💘";
    el.style.position = "fixed";
    el.style.left = `${Math.random() * 100}vw`;
    el.style.top = `-10vh`;
    el.style.fontSize = `${16 + Math.random() * 22}px`;
    el.style.zIndex = 9999;
    el.style.transition = "transform 1.8s ease, opacity 1.8s ease";
    document.body.appendChild(el);

    const dx = (Math.random() - 0.5) * 40;
    const dy = 110 + Math.random() * 120;

    requestAnimationFrame(() => {
      el.style.transform = `translate(${dx}vw, ${dy}vh) rotate(${Math.random() * 240}deg)`;
      el.style.opacity = "0";
    });

    setTimeout(() => el.remove(), 1900);
  }
}
