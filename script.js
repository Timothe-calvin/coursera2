document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting us! We'll get back to you soon.");
      form.reset();
    });
  }
});
