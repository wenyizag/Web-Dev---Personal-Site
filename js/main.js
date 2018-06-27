$(document).ready(function(){

	$(window).load(function(){
		$('.seq-preloader').fadeOut();
		$('.sequence').delay(500).fadeOut("slow");
	})


        // cache
        var $body = $('body');
        var currSlide = 0;
        var $slides = $('.slides');
        var $slide = $('.slide');

        $($('a')[0]).addClass('active');

	function showSlide(n){
		

		currSlide = Math.min($slide.length - 1, Math.max(0, currSlide + n));
		var displaycment = window.innerWidth * currSlide;
		setTimeout( function() {$slides.css('transform', 'translateX(-' + displaycment +'px)')}
			, 200);

		$('nav a.active').removeClass('active');
		$($('a')[currSlide]).addClass('active');
	}

	$(window).resize(function(){
		var displaycment =  window.innerWidth * currSlide;
		$slides.css('transform', 'translateX(-' + displaycment +'px)');

		if ($(window).width() <= 600){	
			$('nav ul li em').hide();
			$('nav .logo').hide();
			$('nav .mini-logo').show();
		}else{
			$('nav ul li em').show();
			$('nav .logo').show();
			$('nav .mini-logo').hide();
		}
	});

	$('nav a, .main-btn a').click(function(e){
		var newSlide = $(this).attr("href")[1];

		var diff = newSlide - currSlide -1;
		showSlide(diff);
		e.preventDefault();
	})

    // $('#form-submit .date').datepicker({
    // });



});