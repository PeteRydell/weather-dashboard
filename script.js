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
        event.preventDefault();
        $('#city-weather').empty()

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

  for (var i = 0; i < cities.length; i++){
    var a = $("<ul>");
    a.addClass("city-search");
    a.attr("data-name", cities[i]);
    a.text(cities[i]);
    $("#city-list").append(a);
  };

  $("#add-city").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var city = $("#city-input").val().trim();

    // Adding movie from the textbox to our array
    cities.push(city);

});
  renderCitySearch();
};

$("#find-city").on("click", function(event) {
  event.preventDefault();

  var cityIn = $("#city-input").val();
  console.log(cityIn)
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityIn + "&appid=cd2c130356fc25320f54d47091844262";
  
  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      event.preventDefault();
      // $("#five-day").text(JSON.stringify(response));
   
      var dayOne = $("<div id='dayOne'>");

          // Storing the first of five city temps
          var cityTempOne = response.temp;

          // Creating an element to have the city name displayed
          var pDayOne = $("<p>").text(cityTempOne);

          // Displaying the city
          dayOne.append(pDayOne);

          // $("#day-one").prepend(fiveDay);
      });
});
