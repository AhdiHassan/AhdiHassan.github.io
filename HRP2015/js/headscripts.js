/* Run Loader
==================*/
jQuery(document).ready(function($){
	"use strict";

	$("body").queryLoader2({
		backgroundColor: "#fff",
		barColor: "#000",
		barHeight: 100,
		percentage: true,
		completeAnimation: "grow",
		onLoadComplete: hidePrePreloader
	});

	function hidePrePreloader(){
		$(".prePreLoader").hide()
	};
	hidePrePreloader();
			
});