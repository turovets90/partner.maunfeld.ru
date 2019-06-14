$(document).ready(function(){



    $('.hamburger').on('click',function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');
        $(this).toggleClass('act');

        $('.mm_close').on('click',function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
            $('.hamburger').removeClass('act');
        });
        return false;
    });

    if($(window).innerWidth() < 991){
        $(document).on('click', function(e) {
            if (!$(e.target).closest(".main_menu.open").length) {
                $(".main_menu.open").removeClass('open');
                $("html").removeClass('page-noscroll');
                $('.hamburger').removeClass('act');
            }
            e.stopPropagation();
        });
    }


    if($(window).innerWidth() < 991){
        $('.partner_btn').click(function(){
            $(this).next().slideToggle();
        });
    }




    if($('.main_slider > div').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            //fade:true,
            infinite:false,
            autoplay: true,
            //speed: 1000,
            autoplaySpeed:9000,
        });
    }


    if($(".home_slider > div").length >4){
        $('.home_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            infinite:false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }


    if($(".sertificates_slider > div").length >4){
        $('.sertificates_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            infinite:false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow:1,
                    }
                }
            ]
        });
    }


    if($(".slick_slider > div").length >4){
        $('.slick_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow:1,
                    }
                }
            ]
        });
    }



    var input = document.querySelector("#phone");
    window.intlTelInput(input, {
        // allowDropdown: false,
        // autoHideDialCode: false,
        // autoPlaceholder: "off",
        // dropdownContainer: document.body,
        // excludeCountries: ["us"],
        // formatOnDisplay: false,
        // geoIpLookup: function(callback) {
        //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
        //     var countryCode = (resp && resp.country) ? resp.country : "";
        //     callback(countryCode);
        //   });
        // },
        // hiddenInput: "full_number",
        // initialCountry: "auto",
        // localizedCountries: { 'de': 'Deutschland' },
        // nationalMode: false,
        // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
        // placeholderNumberType: "MOBILE",
        // preferredCountries: ['cn', 'jp'],
        // separateDialCode: true,
        utilsScript: "/js/utils.js",
    });





});


