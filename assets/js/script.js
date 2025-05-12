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
  const marquees = document.querySelectorAll(".marqueeContent");

  marquees.forEach((marquee) => {
    // Clone the marquee content
    const clone = marquee.cloneNode(true);
    clone.classList.add("marquee-clone");
    marquee.parentNode.appendChild(clone);

    // Calculate the width of original marquee
    const totalWidth = marquee.offsetWidth;

    // Duration based on speed factor (adjust as needed)
    const speed = 100; // pixels per second
    const duration = totalWidth / speed;

    // Apply animation duration to both original and clone
    marquee.style.animationDuration = `${duration}s`;
    clone.style.animationDuration = `${duration}s`;
  });

  // stories section slider HIGHLIGHT
  $(".homeStories .slidesWrapper").slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    slidesToShow: 2.1,
    adaptiveHeight: true,
  });
});

$(".homeStories .leftBtn").click(function () {
  $(".homeStories .slidesWrapper").slick("slickPrev");
});

$(".homeStories .rightBtn").click(function () {
  $(".homeStories .slidesWrapper").slick("slickNext");
});
