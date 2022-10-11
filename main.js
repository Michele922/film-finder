const list = document.querySelector("ul");

const addMovieToDom = (movie) => {
  const listElement = document.createElement("li");
  const newAnkerTag = document.createElement("a");
  const image = document.createElement("img");

  list.appendChild(listElement);
  listElement.appendChild(newAnkerTag);
  newAnkerTag.appendChild(image);

  image.src = movie.poster;
};

const showLatestMovies = () => {
  const filteredMovies = getAllLatestMovies();
  console.log("See all filtered movies", filteredMovies);

  filteredMovies.map(addMovieToDom);
};

const showAvengerMovies = () => {
  const filteredMovies = getMovieByTitle("Avenger");
  console.log("See all avenger movies", filteredMovies);

  filteredMovies.map(addMovieToDom);
};

const showXmenMovies = () => {
  const filteredMovies = getMovieByTitle("X-Men");
  console.log("See all X-men movies", filteredMovies);
  filteredMovies.map(addMovieToDom);
};

const showPrincessMovies = () => {
  const filteredMovies = getMovieByTitle("Princess");
  console.log("See all princess movies", filteredMovies);
  filteredMovies.map(addMovieToDom);
};

const showBatmanMovies = () => {
  const filteredMovies = getMovieByTitle("Batman");
  console.log("See all batman movies", filteredMovies);
  filteredMovies.map(addMovieToDom);
};

showBatmanMovies();
