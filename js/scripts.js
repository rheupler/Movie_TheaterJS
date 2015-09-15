function Movie(movieTitle, movieTime, viewerAge, movieAge, moviePrice) {
  this.movieTitle = movieTitle;
  this.movieTime = [];
  this.viewerAge = viewerAge;
  this.movieAge = movieAge;
  this.moviePrice = moviePrice;
}

$(function() {
  $("input:button").click(function(){
    $(".show-movie-info").show();
    event.preventDefault();
    var inputtedMovieTitle = $(this).val();
    var newMovie = new Movie(inputtedMovieTitle);

    $("ul#movies").append("<li>Showtimes for: <span class='each-movie'>" + newMovie.movieTitle + "</span></li>");
  });
});
