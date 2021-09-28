document.addEventListener("DOMContentLoaded", function() {
    var steps = $('.quiz-step').length;
    var data = [];
    $('.quiz-counter span:last-child').html(steps);

	$('.header-icon').click( function() {
        $('header').toggleClass('active')
        if( $('header').hasClass('active')) {
            $('.header-menu').css('max-height', '999px')
        } else {
            $('.header-menu').css('max-height', '0')
        }
    })

    $('.step-back').click( function() {
        if ($('.quiz-step.active').attr('data-step') == 1) {
            $('.quiz').hide(300)
        } else {
            var currentStep = $('.quiz-step.active').index();
            $('.quiz-step.active').removeClass('active')
            $('.quiz-step').eq(currentStep - 2).addClass('active')
            $('.quiz-counter span:first-child').html(currentStep - 1);
        }
    })

    $('.next-step').click( function() {
        $(this).parent().find('.selected').removeClass('selected')
        $(this).addClass('selected')
        $(this).parent().parent().removeClass('active')
        $(this).parent().parent().next().addClass('active')
        $('.quiz-counter span:first-child').html($('.quiz-step.active').attr('data-step'));
        if( $(this).parent().parent().index() == steps) {
            $('.quiz-step').each(function( index ) {
                var answer = $(this).find('.selected').attr('data-answer');
                var question = $(this).find('.quiz-step__question').html()
                data.push({
                    question: question, 
                    answer:  answer
                });

            });
            console.log(data)
        }
    })

    $('.open-quiz').click( function() {
        $('.quiz').show(300)
    })

    $('.quiz-checkbox__item').click( function() {
        $('.quiz-checkbox__item').toggleClass('selected')
        var value = $(this).html()
        $('.quiz-input label').html(value)
    })
    
    $(".quiz-input input").keyup(function() {
        var input = $(this);

        if( input.val() == "" ) {
            console.log(input.val())
          $(this).parent().parent().find('.main-btn').addClass('disabled')
        } else {
            console.log(input.val())
            $(this).parent().parent().find('.main-btn').removeClass('disabled')
        }
        if (/\D/g.test(this.value))
        {
          // Filter non-digits from input value.
          this.value = this.value.replace(/\D/g, '');
        }
    });

    $('.jumbo-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		infinite: true,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: false,
				infinite: true,
			},
			breakpoint: 769,
			settings: {
				slidesToShow: 1,
				arrows: false,
				centerMode: true,
				centerPadding: '0',
				dots: true
			}
		}]
	});

});
