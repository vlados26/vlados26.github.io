//Функция для бесконечного скролла
$(function () {
    $(".inf-scr").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".inf-scr:hidden").slice(0, 4).slideDown();
        if ($(".inf-scr:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        /*$('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);*/
    });
});

//Функция для main slider
$(function(){
  $('.main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		dots: false,
		swipe: false,
    prevArrow: $('.prev'),
  	nextArrow: $('.next'),
		pauseOnHover: true,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}, {
			breakpoint: 520,
			settings: {
				slidesToShow: 1
			}
		}]
	});
});

//Функция для reviews slider
$(function(){
  $('.reviews-text').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		dots: true,
    prevArrow: $('.prev'),
  	nextArrow: $('.next'),
		pauseOnHover: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}, {
			breakpoint: 520,
			settings: {
				slidesToShow: 1
			}
		}]
	});
});
$('.reviews-text').on('init', function(event, slick){
   var $items = slick.$dots.find('li');
   $items.addClass('transparent-circle');
   $items.find('button').remove();
});

//Функция для customers slider
$(function(){
  $('.customer-logos').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		dots: false,
    prevArrow: $('.prev'),
  	nextArrow: $('.next'),
		pauseOnHover: false,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 520,
			settings: {
				slidesToShow: 2
			}
		}]
	});
});

//Функция для кнопкии вверх
$(function () {  
  $(window).scroll(function () {  
  if ($(this).scrollTop() > 300) $('a#move_up').fadeIn(200);  
  else $('a#move_up').fadeOut(400);  
  });  
  $('a#move_up').click(function () {  
  $('body,html').animate({  
  scrollTop: 0  
  }, 800);  
  return false;  
  });  
});  

//Фуекция для yellow-contact
( function ( $ ) {
    "use strict";

    $.fn.bsTouchSlider = function ( options ) {
        var carousel = $( ".carousel" );
        return this.each( function ( ) {

            function doAnimations( elems ) {
                //Cache the animationend event in a variable
                var animEndEv = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elems.each( function ( ) {
                    var $this = $( this ),
                        $animationType = $this.data( 'animation' );
                    $this.addClass( $animationType ).one( animEndEv, function ( ) {
                        $this.removeClass( $animationType );
                    } );
                } );
            }

            //Variables on page load
            var $firstAnimatingElems = carousel.find( '.item:first' ).find( "[data-animation ^= 'animated']" );
            //Initialize carousel
            carousel.carousel( );
            //Animate captions in first slide on page load
            doAnimations( $firstAnimatingElems );
            //Other slides to be animated on carousel slide event
            carousel.on( 'slide.bs.carousel', function ( e ) {
                var $animatingElems = $( e.relatedTarget ).find( "[data-animation ^= 'animated']" );
                doAnimations( $animatingElems );
            } );
            //swipe initial 
            $( ".carousel .carousel-inner" ).swipe( {
                swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
                    this.parent( ).carousel( 'next' );
                },
                swipeRight: function ( ) {
                    this.parent( ).carousel( 'prev' );
                },
                threshold: 0
            } );

        } );
    };
} )( jQuery );
$(document).ready(function() {
    // Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label'); 
                } else {
                    $parent.removeClass('js-hide-label');   
                }                     
            } 
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } 
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } 
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        });
    } 
});
