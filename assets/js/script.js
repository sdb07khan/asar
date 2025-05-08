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

  // home marquee animation HIGHLIGHT
  const marquee = document.querySelector(".marqueeContent");
  const clone = marquee.cloneNode(true);
  clone.classList.add("marquee-clone");
  marquee.parentNode.appendChild(clone);

  const totalWidth = marquee.offsetWidth;
  const animationDuration = totalWidth / 100; // adjust speed factor

  marquee.style.animationDuration = `${animationDuration}s`;
  clone.style.animationDuration = `${animationDuration}s`;
});
