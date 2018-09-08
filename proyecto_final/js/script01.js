var altura = $('nav').offset().top;
	//verificamos el scroll
	$(window).on('scroll', function(){
        //si escroll es mayor a altura
		if ( $(window).scrollTop() > altura ){
			$('nav').addClass('NavFixed');
		} else {
			$('nav').removeClass('NavFixed');
		}
    });
    
    $("#categoria").on("click", function (Evento) {
        Evento.preventDefault();
        $('html,body').animate({
            scrollTop: 250}, 500);
    });
   
    $("#novedades").on("click", function (Evento) {
        Evento.preventDefault();
        $('html,body').animate({
            scrollTop: 20}, 500);
    });

    $("#acerca_de").on("click", function (Evento) {
        Evento.preventDefault();
        $('html,body').animate({
            scrollTop: $("#pie01").offset().top}, 1500);
    });
    
    $("body").on("click",".submenu a",function () {
        $("li").removeClass('active').animate(200);
        $(this).parent().addClass('active').animate(200);
    });

   

    