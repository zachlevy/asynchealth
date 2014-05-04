// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .
//= require swfobject
//= require scriptcam


/* JWPlayer cloud hosted with erichwelz@gmail.com account */


$(function() {
	console.log("page loaded");


	/* START FORM PAGE */
	$('#quote-carousel').carousel({
		pause: true,
		interval:0,
	});
	$(".subpage").hide();
	$(".subpage-1").show();
	$("#subpage-2").click(function () {
		$(".subpage").hide();
		$(".subpage-2").show();
	});
	$("#subpage-3").click(function () {
		$(".subpage").hide();
		$(".subpage-3").show();
	});
	/* END FORM PAGE */

	/* START FORM QUESTIONS */
	$(".checkbox").change("checked", function () {
		$(".question-select").removeClass("alert-success");
		$(".checkbox").each(function() {
			if ($(this).is(":checked")) {
				var question = $(this).attr("id");
				$("#question-" + question).addClass("alert-success");
				console.log("works");
			}
		});
	});
	$(".radio-people").change("checked", function () {
		console.log("radio people change");
		$(".people-select").removeClass("alert-success");
		$(".radio-people").each(function() {
			if ($(this).is(":checked")) {
				var question = $(this).attr("id");
				$("#people-" + question).addClass("alert-success");
				console.log("works");
			}
		});
	});
	/* END FORM QUESTIONS */
});
