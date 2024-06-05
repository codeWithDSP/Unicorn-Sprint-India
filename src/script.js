// // Hamburger Menu Toggle
// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navLinks.classList.toggle("active");
// });

// Contact Form Submission (Add any needed JS for form validation/submission handling)
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully! You will be replied in 48 hours.");
  contactForm.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});
