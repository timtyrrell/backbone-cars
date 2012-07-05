/**
* jQuery alterClass plugin
*
* Remove element classes with wildcard matching. Optionally add classes:
* $( '#foo' ).alterClass( 'foo-* bar-*', 'foobar' )
*
* Copyright (c) 2011 Pete Boere (the-echoplex.net)
* Free under terms of the MIT license: http://www.opensource.org/licenses/mit-license.php
*
*/
(function ( $ ) {

	$.fn.addRemoveClassesLike = function ( additions, removals ) {

	var _this = this;

	if ( removals.indexOf( '*' ) === -1 ) {
		// Use native jQuery methods if there is no wildcard matching
		_this.removeClass( removals );
		return !additions ? _this : _this.addClass( additions );
	}

	var patt = new RegExp( '\\s' +	removals.replace( /\*/g, '[A-Za-z0-9-_]+' ).split( ' ' ).join( '\\s|\\s' ) + '\\s', 'g' );

	_this.each( function ( i, it ) {
		var cn = ' ' + it.className + ' ';
		while ( patt.test( cn ) ) {
			cn = cn.replace( patt, ' ' );
		}
		it.className = $.trim( cn );
	});

	return !additions ? _this : _this.addClass( additions );
};

})( jQuery );