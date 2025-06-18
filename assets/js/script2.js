document.addEventListener("DOMContentLoaded", function () {

    let body = document.body;
    let mobile = window.matchMedia("(max-width: 767px)");
    let desktop = window.matchMedia("(min-width: 768px)");



    if (mobile.matches) {

        // !about page 

        $(document).ready(function () {
            // Initialize slider and store reference
            let $aboutSlider = $('.aboutMeetPeople .sectionWrapper .content');

            $aboutSlider.slick({
                dots: false,
                arrows: false,
                autoplay: false,
                autoplaySpeed: 2000,
                slidesToShow: 2,
                slidesToScroll: 1,
            });

            // Bind navigation buttons
            $('.aboutMeetPeople .nav .left').on('click', function () {
                $aboutSlider.slick('slickPrev');
            });

            $('.aboutMeetPeople .nav .right').on('click', function () {
                $aboutSlider.slick('slickNext');
            });
        });


    }


    // !2nd phase code ========================

    const copyUrl = document.getElementById("urlCopy");

    copyUrl?.addEventListener("click", function () {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(function () {
            alert("URL copied to clipboard!");
        }, function (err) {
            console.error("Failed to copy: ", err);
        });
    });


    const grid = document.getElementById('dynamicGrid');
    const blocks = grid.querySelectorAll('.block');


    // let maxIndex = blocks.length;
    // let gridSize = Math.max(4, maxIndex); // minimum 4x4

    // grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    // grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    // Place blocks diagonally
    blocks.forEach((block, index) => {
        const pos = index + 1;
        block.style.gridColumn = pos;
        block.style.gridRow = pos;
    });






})