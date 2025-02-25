// A simple in-memory store for demo purposes.
let movies = [];

export function addMovie(movie) {
  movies.push(movie);
}

export function getMovies() {
  return movies;
}

export function getMovieById(id) {
  return movies.find(m => m.id === id);
}