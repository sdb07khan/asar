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

  /////////////////////////////////////////////////////////////////////////////////////
  // side nav open close function HIGHLIGHT
  const hamburger = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".closeBtn");
  const nav = document.querySelector(".headerNav");

  hamburger.addEventListener("click", () => {
    nav.style.transform = "translateX(0)";
    hamburger.style.display = "none";
    closeBtn.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    nav.style.transform = "translateX(100%)";
    hamburger.style.display = "block";
    closeBtn.style.display = "none";
  });

  // home marquee animation HIGHLIGHT
  // const marquees = document.querySelectorAll(".marqueeContent");

  // marquees.forEach((marquee) => {
  //   // Clone the marquee content
  //   const clone = marquee.cloneNode(true);
  //   clone.classList.add("marquee-clone");
  //   marquee.parentNode.appendChild(clone);

  //   // Calculate the width of original marquee
  //   const totalWidth = marquee.offsetWidth;

  //   // Duration based on speed factor (adjust as needed)
  //   const speed = 100; // pixels per second
  //   const duration = totalWidth / speed;

  //   // Apply animation duration to both original and clone
  //   marquee.style.animationDuration = `${duration}s`;
  //   clone.style.animationDuration = `${duration}s`;
  // });

  // stories section slider HIGHLIGHT
  $(".homeStories .slidesWrapper").slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    slidesToShow: 2.1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".homeStories .leftBtn").click(function () {
    $(".homeStories .slidesWrapper").slick("slickPrev");
  });

  $(".homeStories .rightBtn").click(function () {
    $(".homeStories .slidesWrapper").slick("slickNext");
  });

  const marquees = document.querySelectorAll(".marqueeContent");

  if (marquees.length > 0) {
    marquees.forEach((marquee) => {
      const clone = marquee.cloneNode(true);
      clone.classList.add("marquee-clone");
      marquee.parentNode.appendChild(clone);

      const totalWidth = marquee.offsetWidth;
      const animationDuration = totalWidth / 100;

      marquee.style.animationDuration = `${animationDuration}s`;
      clone.style.animationDuration = `${animationDuration}s`;

      if (marquee.classList.contains("reverse")) {
        marquee.style.animationDirection = "reverse";
        clone.style.animationDirection = "reverse";
      } else {
        marquee.style.animationDirection = "normal";
        clone.style.animationDirection = "normal";
      }
    });
  }

  $(".homeStories .rightBtn").click(function () {
    $(".homeStories .slidesWrapper").slick("slickNext");
  });

  // work single page section slider HIGHLIGHT
  $(".workSingleBanner .slidesWrapper").slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    slidesToShow: 2.7,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".workSingleBanner .leftBtn").click(function () {
    $(".workSingleBanner .slidesWrapper").slick("slickPrev");
  });

  $(".workSingleBanner .rightBtn").click(function () {
    $(".workSingleBanner .slidesWrapper").slick("slickNext");
  });

  // social section slider HIGHLIGHT
  $(".linkedInListings .listingsWrapper").slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    slidesToShow: 4.2,
    adaptiveHeight: true,
  });

  $(".linkedInListings .leftBtn").click(function () {
    $(".linkedInListings .listingsWrapper").slick("slickPrev");
  });

  $(".linkedInListings .rightBtn").click(function () {
    $(".linkedInListings .listingsWrapper").slick("slickNext");
  });

  // social section slider HIGHLIGHT
  $(".instagramListings .listingsWrapper").slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 800,
    slidesToShow: 4.2,
    adaptiveHeight: true,
  });

  $(".instagramListings .leftBtn").click(function () {
    $(".instagramListings .listingsWrapper").slick("slickPrev");
  });

  $(".instagramListings .rightBtn").click(function () {
    $(".instagramListings .listingsWrapper").slick("slickNext");
  });

  //spotlight section slider HIGHLIGHT
  if (window.innerWidth <= 768) {
    $(".homeSpotlight .cardsContainer").slick({
      dots: false,
      arrows: false,
      infinite: false,
      speed: 800,
      slidesToShow: 1,
      adaptiveHeight: true,
    });
    $(".homeSpotlight .leftBtn").click(function () {
      $(".homeSpotlight .cardsContainer").slick("slickPrev");
    });
    $(".homeSpotlight .rightBtn").click(function () {
      $(".homeSpotlight .cardsContainer").slick("slickNext");
    });
  }

  // Fade-in text  HIGHLIGHT
  gsap.utils.toArray(".fade-in").forEach((item, index) => {
    gsap.set(item, { opacity: 0, y: 60 });

    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: index * 0.01,
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });

  gsap.utils.toArray(".op").forEach((item, index) => {
    gsap.set(item, { opacity: 0 });

    gsap.to(item, {
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      delay: index * 0.01,
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
  });

  // Image animations with directional clip path effect HIGHLIGHT
  gsap.utils
    .toArray(".img-left, .img-right, .img-center, .img-door")
    .forEach((img, index) => {
      let clipPathValue = "polygon(0% 110%, 100% 110%, 100% 210%, 0% 210%)";

      if (img.classList.contains("img-left")) {
        clipPathValue = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
      } else if (img.classList.contains("img-right")) {
        clipPathValue = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
      } else if (img.classList.contains("img-center")) {
        clipPathValue = "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)";
      } else if (img.classList.contains("img-door")) {
        clipPathValue = "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)";
      }

      gsap.set(img, {
        opacity: 0,
        clipPath: clipPathValue,
      });

      let finalClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      if (img.classList.contains("img-left")) {
        finalClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      } else if (img.classList.contains("img-right")) {
        finalClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      } else if (img.classList.contains("img-center")) {
        finalClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      } else if (img.classList.contains("img-door")) {
        finalClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      }

      gsap.to(img, {
        opacity: 1,
        clipPath: finalClipPath,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });

  ///////////////////////////////////////////////////////////////////////////////////////// Home Page Map code HIGHLIGHT

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  am4core.options.commercialLicense = true;

  // Create map instance
  var chart = am4core.create("chartdiv", am4maps.MapChart);

  // Set map definition
  chart.geodata = am4geodata_india2019High;

  // Disable all zoom interactions
  chart.chartContainer.wheelable = false;
  chart.seriesContainer.draggable = false;
  chart.seriesContainer.resizable = false;
  chart.maxZoomLevel = 1;
  // chart.zoomControl = new am4maps.ZoomControl();
  // chart.zoomControl.slider.height = 0;

  // Create map polygon series
  var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

  // Set default fill color
  polygonSeries.mapPolygons.template.fill = am4core.color("#668CB0");

  //Set min/max fill color for each area
  polygonSeries.heatRules.push({
    property: "fill",
    target: polygonSeries.mapPolygons.template,
    min: chart.colors.getIndex(0).brighten(1),
    min: chart.colors.getIndex(1).brighten(0.3),
    // logarithmic: true
    // "min": am4core.color("#ffd7b1"),
  });

  // Make map load polygon data (state shapes and names) from GeoJSON
  polygonSeries.useGeodata = true;

  // Set heatmap values for each state
  polygonSeries.data = [
    {
      id: "IN-JK",
      value: 10,
    },
    {
      id: "IN-MH",
      value: 12,
      description: "Urban clean air pilots & community climate labs.",
    },
    {
      id: "IN-UP",
      value: 10,
    },
    {
      id: "US-AR",
      value: 13,
    },
    {
      id: "IN-RJ",
      value: 30,
    },
    {
      id: "IN-AP",
      value: 40,
    },
    {
      id: "IN-MP",
      value: 90,
    },
    {
      id: "IN-TN",
      value: 40,
    },
    {
      id: "IN-JH",
      value: 3,
    },
    {
      id: "IN-WB",
      value: 0,
    },
    {
      id: "IN-GJ",
      value: 0,
    },
    {
      id: "IN-BR",
      value: 0,
    },
    {
      id: "IN-TG",
      value: 0,
    },
    {
      id: "IN-GA",
      value: 0,
    },
    {
      id: "IN-DN",
      value: 0,
    },
    {
      id: "IN-DL",
      value: 0,
    },
    {
      id: "IN-DD",
      value: 0,
    },
    {
      id: "IN-CH",
      value: 0,
    },
    {
      id: "IN-CT",
      value: 0,
    },
    {
      id: "IN-AS",
      value: 0,
    },
    {
      id: "IN-AR",
      value: 0,
    },
    {
      id: "IN-AN",
      value: 0,
    },
    {
      id: "IN-KA",
      value: 0,
    },
    {
      id: "IN-KL",
      value: 0,
    },
    {
      id: "IN-OR",
      value: 0,
    },
    {
      id: "IN-SK",
      value: 0,
    },
    {
      id: "IN-HP",
      value: 15,
    },
    {
      id: "IN-PB",
      value: 14,
    },
    {
      id: "IN-HR",
      value: 13,
    },
    {
      id: "IN-UT",
      value: 12,
    },
    {
      id: "IN-LK",
      value: 12,
    },
    {
      id: "IN-MN",
      value: 5,
    },
    {
      id: "IN-TR",
      value: 4,
    },
    {
      id: "IN-MZ",
      value: 3,
    },
    {
      id: "IN-NL",
      value: 2,
    },
    {
      id: "IN-ML",
      value: 1,
    },
  ];

  // Configure series tooltip
  var polygonTemplate = polygonSeries.mapPolygons.template;

  if (window.innerWidth <= 768) {
    // Remove hover state for mobile
    polygonTemplate.events.off("over"); // Disable default hover behavior

    // Optional: disable hover state fill (fallback)
    polygonTemplate.events.on("over", function (ev) {
      ev.target.isHover = false;
    });

    // Add click event for showing tooltip
    polygonTemplate.events.on("hit", function (ev) {
      ev.target.isHover = true;
      chart.tooltipContainer.dispatchImmediately("over", { target: ev.target });
    });
  } else {
    // Enable default hover for desktop
    polygonTemplate.events.on("over", function (ev) {
      ev.target.isHover = true;
    });

    polygonTemplate.events.on("out", function (ev) {
      ev.target.isHover = false;
    });
  }
  // polygonTemplate.tooltipText = "{name}: {value}";
  // Use HTML instead of plain text
  polygonTemplate.tooltipHTML = `
  <div style="background:#650F1C; padding:12px 16px; border-radius:15px; color:white; font-family:manrope; max-width:200px; white-space:normal; word-wrap:break-word; overflow-wrap:break-word;">
    <div style="font-size:var(--font20); font-weight:300; margin-bottom:6px;">{name}</div>
    <div style="font-size:var(--font12); font-weight:normal; line-height:normal; white-space:normal; word-wrap:break-word; overflow-wrap:break-word;">{description}</div>
  </div>
`;

  // Optional: clear the plain text version to avoid conflict
  polygonTemplate.tooltipText = "";

  // Apply styling safely after tooltip is ready
  polygonTemplate.adapter.add("tooltipHTML", function (html, target) {
    if (target.tooltip && target.tooltip.background) {
      target.tooltip.background.fillOpacity = 0;
      target.tooltip.background.strokeOpacity = 0;
      target.tooltip.filters.clear();
      target.tooltip.pointerOrientation = "down";
    }
    return html;
  });

  polygonTemplate.nonScalingStroke = true;
  polygonTemplate.strokeWidth = 0.5;

  // Create hover state and set alternative fill color
  var hs = polygonTemplate.states.create("hover");
  hs.properties.fill = am4core.color("#B82A2A");

  ////////////////////////////////////// END HIGHLIGHT ///////////////////////////////////////////////////
});
