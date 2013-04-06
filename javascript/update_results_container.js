$(function() {
  var updateResultsContainer = function() {
    var html = []
    html.push("<li>");
    html.push("This is some text for the results container");
    html.push("</li>");
    $('#results').html(html.join(""));
  };

  $('#results_test').submit(function() {
    updateResultsContainer();
    return false;
  });


});