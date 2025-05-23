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


})