/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(function ($) {

	/*----------------------------------------------------*/
	/* FitText Settings
	------------------------------------------------------ */

	setTimeout(function () {
		$('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	}, 100);


	/*----------------------------------------------------*/
	/* Smooth Scrolling
	------------------------------------------------------ */

	$('.smoothscroll').on('click', function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});
	});


	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/

	// $('.item-wrap a').magnificPopup({

	// 	type: 'inline',
	// 	fixedContentPos: false,
	// 	removalDelay: 200,
	// 	showCloseBtn: false,
	// 	mainClass: 'mfp-fade'

	// });

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
	function updateFooter(){
		path = location.pathname.substring(1) ==""?"home": location.pathname.substring(1)

		$('.'+path+'Nav').trigger("click");
	}
	$(window).on('load', function () {
		homeNav = $('.homeNav:first');
		footer = $("footer");
		$('#nav').on("click", function (event) {
			if(event.target.text == "Home" )//&& $('#nav a.active').text()=="Home")
				 footer.hide();
			else footer.show(); 
		});
		updateFooter()
		
	});

	window.addEventListener('popstate', function(event) {
		if (event.state) {
		  updateFooter();
		}
	   }, false);
	// }
	// /*----------------------------------------------------*/
	// /*	Flexslider
	// /*----------------------------------------------------*/
	//    $('.flexslider').flexslider({
	//       namespace: "flex-",
	//       controlsContainer: ".flex-container",
	//       animation: 'slide',
	//       controlNav: true,
	//       directionNav: false,
	//       smoothHeight: true,
	//       slideshowSpeed: 7000,
	//       animationSpeed: 600,
	//       randomize: false,
	//    });



});
