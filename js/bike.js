var apiKey = require('./../.env').apiKey;

function Bike(title, color, year){
  this.title = title;
  this.color = color;
  this.year = year;
}

Bike.prototype.getBike = function(location, bikeInfo){
  var bikes = [];
  $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location="+ location + "&distance=10&stolenness=proximity&appid=" + apiKey).then(function(response){
    for (var i=0; i < 25; i++) {
    var title = response.bikes[i].title;
    var color = response.bikes[i].frame_colors;
    var year = response.bikes[i].year;
    newBike = new Bike(title, color, year);
    bikes.push(newBike);


  }
  bikeInfo(bikes);
}) .fail(function(error) {
    $('.output').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
