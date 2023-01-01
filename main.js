$(document).ready(function(){
	
var buttonWidth = $("span.discordButton").css('width');
var padLeft = $("span.discordButton").css('padding-left');
$("span.discordButton").on({
	mouseenter: function() {
		$(this).animate({
			'border-radius': '25px',
			'width': '250px',
			'padding-left': '30px'
		}, 200);
	},  
	mouseleave: function() {
		$(this).animate({
			opacity: '1',
			'border-radius': '0px',
			'width': buttonWidth,
			'padding-left': padLeft
		}, 400);
	}, 
	click: function() {
		$(this).animate({
			opacity: '1',
			'width': buttonWidth
		});
	}  
});
});