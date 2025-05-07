gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  // header hide on scroll down HIGHLIGHT
  const header = document.querySelector(".header");

  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 50) {
      header.style.top = "-150px";
    } else if (currentScroll < lastScroll) {
      header.style.top = "0";
    }

    lastScroll = currentScroll;
  });

  // margin top dynamic add HIGHLIGHT
  const heroElements = document.querySelectorAll(".heroMarginTop");

  function updateHeroMargins() {
    if (header && heroElements.length > 0) {
      // Check if elements exist
      const headerHeight = header.offsetHeight + 50; // +100px extra
      heroElements.forEach((heroElement) => {
        heroElement.style.marginTop = `${headerHeight}px`; // Apply to EACH element
      });
    }
  }

  // Initial update
  updateHeroMargins();

  // Update on resize
  window.addEventListener("resize", updateHeroMargins);
});
