$(document).ready(function(){



    $('.hamburger').on('click',function () {
        $('#nav').toggleClass('open');
        $('html').toggleClass('page-noscroll');
        $(this).toggleClass('act');

        $('.mm_close').on('click',function () {
            $('#nav').removeClass('open');
            $('html').removeClass('page-noscroll');
            $('.hamburger').removeClass('act');
        });
        return false;
    });

    if($(window).innerWidth() < 991){
        $(document).on('click', function(e) {
            if (!$(e.target).closest("#nav.open").length) {
                $("#nav.open").removeClass('open');
                $("html").removeClass('page-noscroll');
                $('.hamburger').removeClass('act');
            }
            e.stopPropagation();
        });
    }

    $('.main_menu .arrow').on('click',function () {
        $(this).toggleClass('rotate');
        $(this).next().slideToggle();
    });




    if($('.main_slider .slider_item').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots:true,
            fade:true,
            infinite:false,
            autoplay: true,
            //speed: 1000,
            autoplaySpeed:9000,
        });
    }

    if($(".serv_slider > div").length >4){
        $('.serv_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            //infinite:false,
           // centerMode: true,
            //variableWidth: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        centerMode: false,
                        variableWidth: true,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: true,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        dots:true,
                    }
                }
            ]
        });
    }


    $('.slick_btn_group .slick_prev').click(function(){
        $('.serv_slider').slick('slickPrev');
    });

    $('.slick_btn_group .slick_next').click(function(){
        $('.serv_slider').slick('slickNext');
    });


    $('.review_item').each(function(){
        var more=$(this).find('.more');
        var show_more=$(this).find('.show_more');
        $(show_more).on('click', function(){
            if($(more).is(':visible')){
                $(more).slideUp();
                $(show_more).text('Читать далее');
            }else{
                $(more).slideDown();
                $(show_more).text('Свернуть');
            }
        });
    });

    if($('.reviews_slider .review_item').length >1){
        $('.reviews_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots:false,
            infinite:false,
            //speed: 1000,
            //autoplay: true,
            //autoplaySpeed: 2000,
            responsive: [

                {
                    breakpoint: 767,
                    settings: {
                        dots:true,
                    }
                }
            ]
        });
    }



    if($(".clients_slider > div").length >4){
        $('.clients_slider').slick({
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
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,

                    }
                }
            ]
        });
    }



   if($(".team_slider > div").length >3){
        $('.team_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            //infinite:false,
            //centerMode: true,
           //variableWidth: true,
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
                        dots:true,
                    }
                }
            ]
        });
    }


    if($(".other_offers_list > div").length >3){
        $('.other_offers_list').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            //infinite:false,
            //centerMode: true,
            //variableWidth: true,
            responsive: [
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
                       // dots:true,
                    }
                }
            ]
        });
    }



    $('#show_more').on('click', function(){
        if($('#more').is(':visible')){
            $('#more').slideUp();
            $(this).text('Читать далее');
        }else{
            $('#more').slideDown();
            $(this).text('Свернуть');
        }
    });




    if($('.k2_slider > div').length >1){
        $('.k2_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots:true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        });
    }



    if($(".programs_slider > div").length >3){
        $('.programs_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            //infinite:false,
            //centerMode: true,
            //variableWidth: true,
            responsive: [
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
                        // dots:true,
                    }
                }
            ]
        });
    }


    if($(".portfolio_slider > div").length >3){
        $('.portfolio_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true,
            centerPadding: '20%',
            //infinite:false,
            //centerMode: true,
            //variableWidth: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true,
                        centerPadding: '183px',
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: 0,
                        // dots:true,
                    }
                }
            ]
        });
    }


    $('.datepicker').datepicker({
        format: 'mm/dd/yyyy',
        language: 'ru'
    });


    if($(".page_gallery_slider > div").length >3){
        $('.page_gallery_slider').slick({
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
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
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


    $(window).resize(function(){
        var header = $('header').outerHeight();

        if($(this).innerWidth() > 991){
            $('#nav').css({
                'top':header+'px'
            });
        }
        /*$(window).scroll(function(){
            if ($(window).scrollTop() > header) {
                $('header').addClass('fixed');
                $('body').css({
                    'padding-top':header+'px'
                });
            } else {
                $('header').removeClass('fixed');
                $('body').css({
                    'padding-top':'0px'
                });
            }
        });*/
    });
    $(window).resize();

    $("#order_call_form").validate();


});


