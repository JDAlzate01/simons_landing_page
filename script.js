document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribe-form");
  const modal = document.getElementById("success-modal");
  const email = document.getElementById("email");

  // Add floating effect to the offer badge
  const offerBadge = document.querySelector(".offer-badge");
  if (offerBadge) {
    setInterval(() => {
      offerBadge.style.transform = "scale(0.9) translateY(-5px)";
      setTimeout(() => {
        offerBadge.style.transform = "scale(0.9) translateY(0)";
      }, 1000);
    }, 2000);
  }

  // Form submission handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Here you would typically send the email to your backend
    // For demo purposes, we'll just show the success modal
    modal.style.display = "flex";

    // Reset form
    form.reset();

    // Animate modal
    modal.style.opacity = "0";
    requestAnimationFrame(() => {
      modal.style.opacity = "1";
      modal.style.transition = "opacity 0.3s ease";
    });
  });
});

// Close modal function
function closeModal() {
  const modal = document.getElementById("success-modal");
  modal.style.opacity = "0";
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

// Add smooth scroll for better UX
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add intersection observer for scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Observe all benefit items
document.querySelectorAll(".benefit-item").forEach((item) => {
  observer.observe(item);
});
