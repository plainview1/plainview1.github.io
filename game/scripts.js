var main = function(){

	var count = 0;
	var firstClicked;
	var firstSrc;
	var nextSrc;

	// Snackbars
	var showSnackbarGood = function(){
		var x = $('.good');
		x.css("visibility", "visible");
		setTimeout(function(){ x.css("visibility", "hidden"); }, 1000);
	};

	var showSnackbarBad = function(){
		var x = $('.bad');
		x.css("visibility", "visible");
		setTimeout(function(){ x.css("visibility", "hidden"); }, 1000);
	};

	// Remove image dragging - so user won`t drag image
	$('.tile').children('img').attr("ondragstart", "return false");

	// Click handler
	$('.tile').click(function clicked(){
			
		count++;			

		if ( count === 1 ) {
			$(this).addClass('active').off('click', clicked);
			
			// First object to manipulate(removeClass if wrong choose)
			firstClicked = $(this);
			// First image to compare width next one
			firstSrc = $(this).children('img').attr('src');

		} else {
			
		$(this).addClass('active');
		
		// Second image to compare
		nextSrc = $(this).children('img').attr('src');

			if ( firstSrc === nextSrc ) {
				showSnackbarGood();

				// Next round
				firstClicked = 0;
				nextSrc = 0;
				count = 0;

			} else {
				$(this).addClass('active');
				alert('Try again!');
				$(this).removeClass('active');
				firstClicked.removeClass('active').on('click', clicked);

				// Next round
				count = 0;
				firstClicked = 0;
				nextSrc = 0;
			}
		}
	});

};

$(document).ready(main)