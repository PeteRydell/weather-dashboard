//var cityList = document.getElementById("#city-list");

var cities = [];

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

function renderCitySearch() {

    $("#city-list").empty();

    for (var i = 0; i < cities.length; i++) {
        var cityP = ("<p>");
        cityP.attr("data-name", movies[i]);
        cityP.text(cities[i]);
        $("#city-list").append(cityP);

    }
}

