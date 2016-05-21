$(document).ready(function() {

        $('.certificate-item').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">открыть в полном размере</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: false,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	}); 
	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	$('.testimonials-slider').owlCarousel({
		loop:true, 
		margin:10, 
		nav:true, 
		dots:true,			
		autoplay:false, 
		smartSpeed:1000, 
		autoplayTimeout:2000,
		responsive:{ 
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	$('.certificates-slider').owlCarousel({
		loop:true,		
		nav:true,		
		autoplay:false, 
		smartSpeed:1000, 
		autoplayTimeout:2000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Анимация счетчика
	//Документация: https://github.com/johnjcamilleri/jquery-spincrement
	//Документация по подключению скрола http://webcareer.ru/animirovannoe-uvelichenie-chisel-na-jquery.html
	
	var show = true;
	var countbox = "#counts";
	$(window).on("scroll load resize", function(){

        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена

        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа

        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа

        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
        	$(".spincrement").spincrement({
        		thousandSeparator: "",
        		duration: 1200
        	});

        	show = false;
        }
    });

	$("#spin-1").spincrement({
		thousandSeparator: "", // Разделитель тыcячных
		duration: 1000,        // Продолжительность анимации в миллисекундах
		to: 15,
		from: 0        
	});
	$("#spin-2").spincrement({
		thousandSeparator: "", // Разделитель тыcячных
		duration: 1000,        // Продолжительность анимации в миллисекундах
		to: 1462,
		from: 0        
	});
	$("#spin-3").spincrement({
		thousandSeparator: "", // Разделитель тыcячных
		duration: 1000,        // Продолжительность анимации в миллисекундах
		to: 900,
		from: 0        
	});
	$("#spin-4").spincrement({
		thousandSeparator: "", // Разделитель тыcячных
		duration: 1000,        // Продолжительность анимации в миллисекундах
		to: 73,
		from: 0        
	});

	

});
