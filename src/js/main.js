$(document).ready(function(){

	// Background Scroll

	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
		
		if(scrollPos > 50) {
			$("header>nav").addClass("transform");
		}
		else {
			$("header>nav").removeClass("transform");
		}

	});

	// Smooth scroll on click

	$("header nav ul li a,header .navBurger a, footer nav ul li a,.scrollDown").click(function(e){
		e.preventDefault();
		var sectionSelector = $(this).attr("href");
		var $section = $(sectionSelector);
		$("html, body").animate(
			{
				scrollTop: $section.offset().top-110
			}, 1000,
			function(){$("#burger,.navBurger").removeClass("burgerShow")}
		);
	});

	// Menu 800px

	$("#burger,header .navBurger a").click(function(e){
		e.preventDefault();
		$("#burger").toggleClass("burgerShow");
		$(".navBurger").toggleClass("burgerShow");

	});


	// Cycle foireux

	$('#slideQuotes').cycle({ 
    	fx:      'scrollLeft', 
    	timeout:  4000 
	});

	// Show Nav
	var nav01 = $("#show .showNav a:first-child");
	var nav02 = $("#show .showNav a:last-child");
	var small01 = $(".show01");
	var small02 = $(".show02");
	var small03 = $(".show03");
	var small04 = $(".show04");
	var small05 = $(".show05");
	var small06 = $(".show06");
	var small07 = $(".show07");
	var small08 = $(".show08");
	var main01 = $(".main01");
	var main02 = $(".main02");

	$(nav01).click(function(e){
		e.preventDefault();
		$(this).addClass("active");
		$(nav02).removeClass("active");
		$(small01).css("display","inline-block");
		$(small02).css("display","inline-block");
		$(small03).css("display","inline-block");
		$(small04).css("display","inline-block");
		$(small05).css("display","none");
		$(small06).css("display","none");
		$(small07).css("display","none");
		$(small08).css("display","none");
		$(main01).css("display","inline-block");
		$(main02).css("display","none");
	});

	$(nav02).click(function(e){
		e.preventDefault();
		$(this).addClass("active");
		$(nav01).removeClass("active");
		$(small01).css("display","none");
		$(small02).css("display","none");
		$(small03).css("display","none");
		$(small04).css("display","none");
		$(small05).css("display","inline-block");
		$(small06).css("display","inline-block");
		$(small07).css("display","inline-block");
		$(small08).css("display","inline-block");
		$(main01).css("display","none");
		$(main02).css("display","inline-block");
	});

	// Europe vs usa

	$(".usa").click(function(e){
		e.preventDefault();
		$(".europe").removeClass("active");
		$(this).addClass("active");
		$("#europeData").hide();
		$("#usData").show();
	});

	$(".europe").click(function(e){
		e.preventDefault();
		$(".usa").removeClass("active");
		$(this).addClass("active");
		$("#usData").hide();
		$("#europeData").show();
	});

	// More dates

	$(".moreTour").click(function(e){
		e.preventDefault();
		$("#tour #usData a").removeClass("tourHide");
		$(this).addClass("tourHide");
	});

	$(".lessTour").click(function(e){
		e.preventDefault();
		$("#tour #usData a:nth-last-child(-n+6), .lessTour").addClass("tourHide");
		$(".moreTour").removeClass("tourHide")
	});


	// News
	$(".smallNews").click(function(e){
		e.preventDefault();
		$(".mainNews").addClass("newsTransform");
		$(".smallNews").removeClass("newsTransform");
		$(this).addClass("newsTransform");
	});

	$(".mainNews").click(function(e){
		e.preventDefault();
		$(".mainNews").removeClass("newsTransform");
		$(".smallNews").removeClass("newsTransform");
	});

});	

// console.log("Hello Console !");
// alert("Hello alert !");

// jQuery() ou $()

