$(document).ready(function() {

/* dropdown - update value on selection */
  $('.dropItem').click(function() {
    $(this).parent().parent().find('.dropDown').html($(this).text());
  });

/* add - check buttons on investment list */
  $('.addBtn').click(function() {
    if ($(this).attr('src') == 'client_res/img/icons/plus.png') {
      $(this).attr('src', 'client_res/img/icons/check.png');
      $(this).attr('width', '22');
      $(this).addClass('added');
      $(this).parent().parent().addClass('added');
    } else {
      $(this).attr('src', 'client_res/img/icons/plus.png');
      $(this).attr('width', '18');
      $(this).removeClass('added');
      $(this).parent().parent().removeClass('added');
    }
  });

/* input text - validation and formatting of numeric input */
	var $cont = $(".inputCont");
  var $alloc = $(".inputAlloc");
  var $year = $(".inputYear");

  // conditions for contribution amounts
	$cont.on( "keyup", function( event ) {

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

  // conditions for allocation amounts
	$alloc.on( "keyup", function( event ) {

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
        input = Math.min(input, 100);

				$this.val( function() {
					return ( input === "" ) ? "" : input.toLocaleString( "en-US" );
				} );
		} );

    // conditions for years
  	$year.on( "keyup", function( event ) {

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
          input = Math.min(input, (new Date()).getFullYear());

  				$this.val( function() {
  					return ( input === 0) ? "" : input;
  				} );
  		} );

  /* range slider - update label */
    // initiator
    $('.range-slider__range').each(function() {
    $(this).parent().find('.baseRange').html('$' + $(this).val() + 'k');
    $(this).parent().find('.lockinRange').html($(this).val() + '%');
      $(this).parent().find('.range-slider__value').css('left', (2 + ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min')) * ($(this).width() - 17)) + 'px');
      $(this).css('box-shadow', 'inset ' + Math.floor($(this).width() * ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'))).toString() + 'px 0 0 0 #00a55e');
      $(this).css('-o-box-shadow', 'inset ' + Math.floor($(this).width() * ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'))).toString() + 'px 0 0 0 #00a55e');
      $(this).css('-ms-box-shadow', 'inset ' + Math.floor($(this).width() * ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'))).toString() + 'px 0 0 0 #00a55e');
      $(this).css('-moz-box-shadow', 'inset ' + Math.floor($(this).width() * ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'))).toString() + 'px 0 0 0 #00a55e');
      $(this).css('-webkit-box-shadow', 'inset ' + Math.floor($(this).width() * ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'))).toString() + 'px 0 0 0 #00a55e');
    });

    $('.range-slider__range').on('input', function() {
      var val = $(this).val();
      var max = $(this).attr('max');
      var min = $(this).attr('min');
      var wid = $(this).width()
      var thumb = 17;
      var pos = (val - min) / (max - min);
      $(this).parent().find('.baseRange').html('$' + val + 'k');
      $(this).parent().find('.lockinRange').html(val + '%');
      $(this).parent().find('.range-slider__value').css('left', (5 + pos * (wid - thumb)) + 'px');
      $(this).css('box-shadow', 'inset ' + Math.floor(wid * pos).toString() + 'px 0 0 0 #00a55e');
      $(this).css('-o-box-shadow', 'inset ' + Math.floor(wid * pos).toString() + 'px 0 0 0 #00a55e');
      $(this).css('-ms-box-shadow', 'inset ' + Math.floor(wid * pos).toString() + 'px 0 0 0 #00a55e');
      $(this).css('-moz-box-shadow', 'inset ' + Math.floor(wid * pos).toString() + 'px 0 0 0 #00a55e');
      $(this).css('-webkit-box-shadow', 'inset ' + Math.floor(wid * pos).toString() + 'px 0 0 0 #00a55e');
    });

    $(window).resize(function() {
      $('.range-slider__range').each(function() {
        $(this).parent().find('.range-slider__value').html($(this).val());
        $(this).parent().find('.range-slider__value').css('left', (5 + ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min')) * ($(this).width() - 17)) + 'px');
        $(this).css('box-shadow', 'inset ' + Math.floor($(this).width() * ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'))).toString() + 'px 0 0 0 #00a55e');
        $(this).css('-o-box-shadow', 'inset ' + Math.floor($(this).width() * ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'))).toString() + 'px 0 0 0 #00a55e');
        $(this).css('-ms-box-shadow', 'inset ' + Math.floor($(this).width() * ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'))).toString() + 'px 0 0 0 #00a55e');
        $(this).css('-moz-box-shadow', 'inset ' + Math.floor($(this).width() * ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'))).toString() + 'px 0 0 0 #00a55e');
        $(this).css('-webkit-box-shadow', 'inset ' + Math.floor($(this).width() * ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'))).toString() + 'px 0 0 0 #00a55e');
      });
    });

  /* further information slide up */
    $('.furtherHead').click(function() {
      if ($('#furtherContent').is(':hidden')) {
        $('#furtherContent').slideDown();
      } else {
        $('#furtherContent').slideUp();
      }
    });

});
