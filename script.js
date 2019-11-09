var cities = [];

$("#find-city").on("click", function(event) {
    event.preventDefault();

    var cityIn = $("#city-input").val();
    console.log(cityIn)
    var location = $(this).attr("data-name");
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityIn + "&appid=cd2c130356fc25320f54d47091844262";
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

          var cityDiv = $("<div id='city-weather'>");

          // Storing the city name
          var cityName = response.name;

          // Creating an element to have the city name displayed
          var pOne = $("<p>").text(cityName);

          // Displaying the city
          cityDiv.append(pOne);

          // Storing the city temp
          var cityTemp = response.temp;

          // Creating an element to have the city temp displayed
          var pTwo = $("<p>").text("Temperature: " + cityTemp);

          // Displaying the temp
          cityDiv.append(pTwo);

          // Storing the city humidity
          var cityHum = response.humidity;

          // Creating an element to have the city humidity displayed
          var pThree = $("<p>").text("Humidity: " + cityHum + "%");

          // Displaying the humidity
          cityDiv.append(pThree);

          // Storing the city wind speed
          var cityWind = response.humidity;

          // Creating an element to have the city wind speed displayed
          var pFour = $("<p>").text("Wind Speed: " + cityWind + " MPH");

          // Displaying the wind speed
          cityDiv.append(pFour);

          // Putting the entire city info in the div
          $("#city-weather").prepend(cityDiv);
        });

      });

function renderCitySearch() {

  $("#city-list").empty();

  $('#find-city').on('click', function(event) {
    event.preventDefault();
    var city = $('#city-list').val().trim();
    cities.push(city);
    renderCitySearch();
  });

  renderCitySearch();
}

//var iconurl="http://openweathermap.org/img/wn/" + iconcode + ".png";
