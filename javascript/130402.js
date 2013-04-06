$(function() {
  console.log("Hi");

  var updateResultsContainer = function(data) {
    var currentObs = data.current_observation
    var html = []
    html.push("<ul>");
    html.push("<li>" + currentObs.weather + "</li>");
    html.push("<li>" + currentObs.temperature_string + "</li>");
    html.push("<li>" + currentObs.wind_string + "</li>");
    html.push("</ul>");
    var html_str = html.join("");
    $('#results').html(html_str);
  }

  var weatherData = function(lat, lng) {
    apiKey = "4a5c268c050162e3";
    url = "http://weather-api.herokuapp.com/weather/" + apiKey + "/conditions/g/" + lat + "/" + lng + "/";
    $.ajax({
      url: url,
      success: function(data) {
        var jData = JSON.parse(data)
        updateResultsContainer(jData);
      },
      error: function() {
        console.log("Error");
      }
    });
  };

  var success = function(position) {
    console.log("Success", position.coords.latitude);
    weatherData(position.coords.latitude, position.coords.longitude);
  };

  $('#weather_data').submit(function() {
    navigator.geolocation.getCurrentPosition(success);
    return false;
  });
});