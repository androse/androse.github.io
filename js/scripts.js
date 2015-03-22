$(document).ready(function() {
  window.setInterval(highlightNewPath, 100);

  function highlightNewPath() {
    $('.highlighted-poly')
      .attr('class', 'triangle-poly-face');

    var trianglePolygons = $('.triangle-poly-face');
    var randomSelection = Math.floor(Math.random() * trianglePolygons.length);
    $(trianglePolygons[randomSelection])
      .attr('class', 'triangle-poly-face highlighted-poly');
  }

});
