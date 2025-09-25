document.addEventListener("DOMContentLoaded", () => {
  const text = "Cybersecurity Analyst | Builder | Learner";
  const tagline = document.querySelector(".tagline");
  let index = 0;

  // Typing effect
  function typeEffect() {
    if (index < text.length) {
      tagline.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 80);
    } else {
      // Add blinking cursor
      const cursor = document.createElement("span");
      cursor.textContent = "|";
      cursor.classList.add("cursor");
      tagline.appendChild(cursor);
      blinkCursor(cursor);

      // Trigger reveal once typing is done
      revealElementsSequentially();
    }
  }

  // Blinking cursor
  function blinkCursor(cursor) {
    setInterval(() => {
      cursor.style.visibility =
        cursor.style.visibility === "hidden" ? "visible" : "hidden";
    }, 500);
  }

  // Sequential reveal
  function revealElementsSequentially() {
    const elements = document.querySelectorAll(".reveal");
    let delay = 0;
    elements.forEach((el) => {
      setTimeout(() => {
        el.classList.add("show");
      }, delay);
      delay += 400; // stagger each reveal
    });
  }

  // Active nav highlighting on scroll
  function highlightNavOnScroll() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (
          pageYOffset >= sectionTop &&
          pageYOffset < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  }

  // Initialize
  tagline.textContent = "";
  typeEffect();
  highlightNavOnScroll();
});
