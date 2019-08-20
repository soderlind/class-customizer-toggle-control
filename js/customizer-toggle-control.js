/*
 * Script run inside a Customizer control sidebar
 *
 * Enable / disable the control title by toggeling its .disabled-control-title style class on or off.
 */
( function( $ ) {
	wp.customize.bind( 'ready', function() { // Ready?

		var customize = this; // Customize object alias.

		//get the toggle controls
		var toggleControls = $('.customize-toogle-label').parent();

		var toggleControlIds = [];

		//Segment in the id of the control that is added by wordpress, but not needed for our purpose
		var idSegment = "customize-control-";

		//fill the id array
		for (var control of toggleControls){
			//remove the segment from the control id
			var controlId = control.id.substring(idSegment.length, control.id.length);
			toggleControlIds.push(controlId);
		}

		$.each( toggleControlIds, function( index, control_name ) {
			customize( control_name, function( value ) {
				var controlTitle = customize.control( control_name ).container.find( '.customize-control-title' ); // Get control  title.
				// 1. On loading.
				controlTitle.toggleClass('disabled-control-title', !value.get() );
				// 2. Binding to value change.
				value.bind( function( to ) {
					controlTitle.toggleClass( 'disabled-control-title', !value.get() );
				} );
			} );
		} );
	} );
} )( jQuery );
