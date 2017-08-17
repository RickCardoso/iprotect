$(document).ready(function() {

/* dropdown - update value on selection */
  $('.dropItem').click(function() {
    $(this).parent().parent().find('.dropDown').html($(this).text());
  });

/* input text - validation and formatting of numeric input */
	var $input = $(".inputText");

	$input.on( "keyup", function( event ) {

		// When user select text in the document, also abort.
		var selection = window.getSelection().toString();
		if ( selection !== '' ) {
			return;
		}

		// When the arrow keys are pressed, abort.
		if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
			return;
		}

		var $this = $( this );

		// Get the value.
		var input = $this.val();

		var input = input.replace(/[\D\s\._\-]+/g, "");
				input = input ? parseInt( input, 10 ) : 0;

				$this.val( function() {
					return ( input === 0 ) ? "" : input.toLocaleString( "en-US" );
				} );
		} );

  /* range slider - update label */
    var rangeSlider = function(){
      var slider = $('.range-slider'),
          range = $('.range-slider__range'),
          value = $('.range-slider__value');

      slider.each(function(){

        value.each(function(){
          var value = $(this).prev().attr('value');
          $(this).html(value);
        });

        range.on('input', function(){
          $(this).next(value).html(this.value);
        });
      });
    };

    rangeSlider();

});
