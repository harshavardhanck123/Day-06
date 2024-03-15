class Movie {
    constructor(title, studio, rating="PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    getPG(movies)
    {
        return movies.filter(movie=>movie.rating==="PG")
    }
  }
  let film = new Movie("Casion Royale","Eon Productions","PG-13")

  const cinema = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "PG-13"),
    new Movie("Movie 3", "Studio 3", "R"),
    new Movie("Movie 4", "Studio 4", "PG"),
    new Movie("Movie 5", "Studio 5", "PG-13"),
  ];
  
  const pgMovies = film.getPG(cinema);
  console.log(pgMovies);