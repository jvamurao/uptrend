//https://codepen.io/mariomelchor/pen/OggPLo?editors=1010
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    price:   '.price',
    name: '.name',
    category: '.category',
    price: function( itemElem ) {
      var text = $( itemElem ).find('.price').text().replace( '$', '' );
      return parseFloat( text );
    }
  }
});

$('.filters-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('.sort-by-button-group').on( 'click', 'button', function() {

  var sortValue = $(this).attr('data-sort-value');

  var direction = $(this).attr('data-sort-direction');

  var isAscending = (direction == 'asc');
  var newDirection = (isAscending) ? 'desc' : 'asc';

  $grid.isotope({ sortBy: sortValue, sortAscending: isAscending });

  $(this).attr('data-sort-direction', newDirection);

  var span = $(this).find('.glyphicon');
  span.toggleClass('glyphicon-chevron-up glyphicon-chevron-down');

});
