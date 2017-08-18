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
    // initiator
    $('.range-slider__range').each(function() {
      $(this).parent().find('.range-slider__value').html($(this).val());
      $(this).parent().find('.range-slider__value').css('left', (5 + ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min')) * ($(this).width() - 17)) + 'px');
      $(this).css('box-shadow', 'inset ' + Math.floor($(this).width() * ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'))).toString() + 'px 0 0 0 #00a55e');
    });

    $('.range-slider__range').on('input', function() {
      var val = $(this).val();
      var max = $(this).attr('max');
      var min = $(this).attr('min');
      var wid = $(this).width()
      var thumb = 17;
      var pos = (val - min) / (max - min);
      $(this).parent().find('.range-slider__value').html(val);
      $(this).parent().find('.range-slider__value').css('left', (5 + pos * (wid - thumb)) + 'px');
      $(this).css('box-shadow', 'inset ' + Math.floor(wid * pos).toString() + 'px 0 0 0 #00a55e');
    });

});
