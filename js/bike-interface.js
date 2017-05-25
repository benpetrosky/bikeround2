var Bike = require('./../js/bike.js').bikeModule;

var bikeInfo = function(bikes) {

  bikes.forEach(function(bike){
  $('.output').append("<li>The title of the missing bike is " + bike.title + "the color is " + bike.color  + " the year of the bike is" + bike.year + ".</li>");

  });
};

$(document).ready(function(){
  var currentBikeObject = new Bike();
  $ ("#submit").click(function(){
    var location = $("#location").val();
    $("#location").val("");
    $(".city").text(location)
    currentBikeObject.getBike(location, bikeInfo);
    });
});
