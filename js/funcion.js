$(document).ready(function(){
// Scroll elemneto Menu
	var circulo = $("#circulo").offset().top,
		quienes = $("#quienes").offset().top,
    servicios = $("#servicios").offset().top,
		contacto = $("#contacto").offset().top;

	$("#btn-circulo").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: circulo-100
		},500);
	});
	$("#btn-quienes").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: quienes
		},500);
	});
  $("#btn-servicios").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: servicios
		},500);
	});
	$("#btn-contacto").on("click", function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: contacto
		},500);
	});
});//final de elemento
