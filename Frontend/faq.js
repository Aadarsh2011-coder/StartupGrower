const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const span = question.querySelector("span");
      const isActive = question.classList.contains("active");
      faqQuestions.forEach((other) => {
        if (other !== question) {
          other.classList.remove("active");
          other.nextElementSibling.classList.remove("active");
          other.nextElementSibling.style.maxHeight = null;
          other.querySelector("span").textContent = "+";
        }
      });
      if (isActive) {
        question.classList.remove("active");
        answer.classList.remove("active");
        answer.style.maxHeight = null;
        span.textContent = "+";
      } else {
        question.classList.add("active");
        answer.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
        span.textContent = "−";
      }
    });
  });