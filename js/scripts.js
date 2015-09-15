function Movie(movieTitle, movieTime, viewerAge, movieAge, ticketQuantity) {
  this.movieTitle = movieTitle;
  this.movieTime = movieTime;
  this.viewerAge = viewerAge;
  this.movieAge = movieAge;
  this.ticketQuantity = ticketQuantity;
}
$(function() {
  $("form#movies").submit(function(event) {
    event.preventDefault();

    var selectedTitle = $("select#movieTitles option:selected").val();
    var selectedTime = $("select#movieTimes option:selected").val();
    var selectedAge = $("select#ticketType option:selected").val();
    var ticketQuantity = parseInt($("select#ticketQuantity option:selected").val());
    var newMovie = new Movie(selectedTitle, selectedTime, selectedAge, ticketQuantity);

    var ticketPrice = 8;
    if (newMovie.movieTitle === ("The Visit") || newMovie.movieTitle === ("Black Mass") || newMovie.movieTitle === ("Straight Outta Compton")) {
      ticketPrice += 2;
    }  else {
      ticketPrice;
    }

    if (newMovie.movieTime === ("4:45 PM") || newMovie.movieTime === ("6:15 PM") || newMovie.movieTime === ("8:45 PM") || newMovie.movieTime === ("10:05 PM")) {
      ticketPrice +=2;
    } else {
      ticketPrice;
    }

    if (newMovie.viewerAge === ("adult")) {
      ticketPrice +=2;
    } else {
        ticketPrice;
      }

    if (ticketQuantity === 2) {
      ticketPrice *= 2;
    } else if (ticketQuantity === 3) {
      ticketPrice *= 3;
    } else if (ticketQuantity === 4) {
      ticketPrice *= 4;
    } else {
      ticketPrice;
    }

    $("#display-price").empty().append("<h2><span class='movie-cost'>" + ticketPrice + "</span> Dollars</h2>");
  });
});
