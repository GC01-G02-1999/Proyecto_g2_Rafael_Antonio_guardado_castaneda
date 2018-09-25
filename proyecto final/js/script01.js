/*var altura = $('nav').offset().top;
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
    
    $("body").on("click",".active-submenu a",function () {
        $(this).parent().addClass('active').animate(200);
    });*/

    
    $("p").mouseover(function(){
        $("p").css("color","green");
    });
    
    $("p").mouseout(function(){
        $("p").css("color","black");

    });

    $("h2").mouseover(function(){
        $("h2").css("color","black");
    });
    
    $("h2").mouseout(function(){
        $("h2").css("color","black");
    });


$("#img01").mouseover(function(){
    $("#img01").css("width","350");
    $("#img01").css("height","200");
    $("#img01").css("background-color","yellow");
});

$("#img01").mouseout(function(){
    $("#img01").css("width","240");
    $("#img01").css("height","200");
    $("#img01").css("background-color","red");
});

var scroll = new SmoothScroll('.some-selector',{
    header: '[data-scroll-header]'
});


    var scroll = new SmoothScroll('a[href*="#"]');

    var scroll = new SmoothScroll('a[href*="#"]', {

// Selectors
ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
header: null, // Selector for fixed headers (must be a valid CSS selector)
topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"

// Speed & Easing
speed: 500, // Integer. How fast to complete the scroll in milliseconds
clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
offset: function (anchor, toggle) {

// Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
// This example is a function, but you could do something as simple as `offset: 25`

// An example returning different values based on whether the clicked link was in the header nav or not
if (toggle.classList.closest('.my-header-nav')) {
return 25;
} else {
return 50;
}

},
easing: 'easeInOutCubic', // Easing pattern to use
customEasing: function (time) {

// Function. Custom easing pattern
// If this is set to anything other than null, will override the easing option above

// return <your formulate with time as a multiplier>

// Example: easeInOut Quad
return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

},

// History
updateURL: true, // Update the URL on scroll
popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)

// Custom Events
emitEvents: true // Emit custom events

});