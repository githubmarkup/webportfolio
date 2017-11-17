$(function() {
	$( "#testaccordion" ).accordion({
		header: "h3",
		collapsible: true,
		active: false,
		heightStyle: "content",
		icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
	});
});

$(document).ready(function(){
    $(".navbar-nav").on("click","a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate(
        {scrollTop: top}, 1000);
    });
});