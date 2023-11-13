// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
document.getElementById("weather-head").innerHTML = "February 10 Weather Forecast, Seattle";

// Change the styling of every element with class "sun" to set the color to "orange"
let sunElements = document.querySelectorAll(".sun");
sunElements.forEach(element => {element.style.color = 'orange';});

// Change the class of the second <li> from to "sun" to "cloudy"
sunElements[0].className = "cloudy";

