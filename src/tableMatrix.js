( function( $ ){
  $.fn.tableMatrix = function( callback ){
    var matrix = [];
    this.find( "tr" ).each( function( index, tableRow {
      var row = [];
      $( tableRow ).find( "td, th" ).each( function( i, value ){
        row.push( value.innerHTML );
      });
      matrix.push( row );
    }); 
    callback( matrix );
  };
}( jQuery ) );