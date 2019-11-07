var cities = [];
var fiveDay = [];

$("#find-city").on("click", function(event) {
    event.preventDefault();

    var cityIn = $("#city-input").val();
    console.log(cityIn)

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityIn + "&appid=cd2c130356fc25320f54d47091844262";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        $("#city-weather").text(JSON.stringify(response));
      });

});

//Renders current city wetaher
function renderCitySearch() {

    $("#city-list").empty();

    for (var i = 0; i < cities.length; i++) {
        var cityBtn = ("<p>");
        cityBtn.addClass("city")
        cityBtn.attr("data-name", cities[i]);
        cityBtn.text(cities[i]);
        $("#city-list").append(cityBtn);
      }
  }

  $('#find-city').on('click', function(event) {
    event.preventDefault();
    var city = $('#city-list').val().trim();
    cities.push(city);
    renderCitySearch();
  });

  renderCitySearch();


//var iconurl="http://openweathermap.org/img/wn/" + iconcode + ".png";

// Renders 5 Day Forecast
// function renderFiveDay() {

//   $("#city-list").empty();

//   for (var i = 0; i < cities.length; i++) {
//       var cityBtn = ("<p>");
//       cityBtn.addClass("city")
//       cityBtn.attr("data-name", cities[i]);
//       cityBtn.text(cities[i]);
//       $("#city-list").append(cityBtn);
//     }
// }

// $('#find-city').on('click', function(event) {
//   event.preventDefault();
//   var city = $('#city-list').val().trim();
//   cities.push(city);
//   renderCitySearch();
// });

// renderCitySearch();