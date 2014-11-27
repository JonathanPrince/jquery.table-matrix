#jquery.table-matrix

##Description

Simple jQuery plugin for creating a data matrix from an HTML table.

Returns a 2D array of table data, can be used with a callback function.

##Usage

Include jQuery and plugin scripts.

**Basic usage:**
```js
// save output in a variable
var data = $( "#myTable" ).tableMatrix();
```

**Specify Callback Function:**
```js

var myCallback = function( data ){
  // do something with the data...
};

$( "#my-table" ).tableMatrix( myCallback );
```

