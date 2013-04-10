$(function() {
  var updateResultsContainer = function() {
    var html = []
    html.push("<li>");
    html.push("This is some text for the results container");
    html.push("</li>");
    $('#results').html(html.join(""));
  };

  var updateDemoContainer = function() {
		var html = [];
		html.push("<ul>");
		html.push("<li>This is some text for my demo containter</li>");
		html.push("</ul>");
		var htmlString = html.join("");
		
		$("#results").html(htmlString);
  }
  
  $('#results_test').submit(function() {
    updateResultsContainer();
    return false;
  });

  $('#demo_test').submit(function() {
    updateDemoContainer();
    return false;
  });
  
});