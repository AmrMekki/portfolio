// Theme Toggle
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);

  const themeBtn = document.querySelector(".theme-toggle");
  themeBtn.textContent = newTheme === "light" ? "🌙" : "☀️";

  localStorage.setItem("theme", newTheme);
}

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeBtn = document.querySelector(".theme-toggle");
  themeBtn.textContent = savedTheme === "light" ? "🌙" : "☀️";
});

// Modal Functions
function openModal(modalId) {
  document.getElementById(modalId).classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active");
  document.body.style.overflow = "auto";
}

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.classList.remove("active");
    });
    document.body.style.overflow = "auto";
  }
});

// Download Resume
function downloadResume() {
  const resumeContent = `
AMR MEKKI
AI Engineer & Full-Stack Developer

Email: amr.mekki21@gmail.com
Phone: (+20) 100 906 5067
Location: Cairo, Egypt
LinkedIn: https://www.linkedin.com/in/amrmekki
GitHub: https://www.github.com/AmrMekki

PROFESSIONAL SUMMARY
AI Engineer with expertise in computer vision, deep learning, and agentic AI systems, specializing in pose estimation, gait analysis, and healthcare applications...

(continue with your resume text)
  `;

  const blob = new Blob([resumeContent], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Amr_Mekki_Resume.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').replace('#', '');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Copy email to clipboard and show popup
document.getElementById('copy-email').addEventListener('click', function(e) {
  e.preventDefault();
  navigator.clipboard.writeText('amr.mekki21@gmail.com').then(() => {
    showCopiedPopup();
  });
});

// Popup function
function showCopiedPopup() {
  let popup = document.createElement('div');
  popup.textContent = 'Email copied!';
  popup.style.position = 'fixed';
  popup.style.bottom = '40px';
  popup.style.right = '40px';
  popup.style.background = '#0066FF';
  popup.style.color = '#fff';
  popup.style.padding = '12px 24px';
  popup.style.borderRadius = '8px';
  popup.style.fontSize = '1rem';
  popup.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
  popup.style.zIndex = '9999';
  popup.style.opacity = '0';
  popup.style.transition = 'opacity 0.3s';

  document.body.appendChild(popup);

  // Fade in
  setTimeout(() => { popup.style.opacity = '1'; }, 10);

  // Fade out and remove
  setTimeout(() => {
    popup.style.opacity = '0';
    setTimeout(() => { document.body.removeChild(popup); }, 300);
  }, 1500);
}
