const list = document.querySelector("ul");
const radioButtons = document.querySelectorAll("#film-filter");

const addMoviesToDom = (movie) => {
  const listElement = document.createElement("li");
  const newAnchorTag = document.createElement("a");
  const image = document.createElement("img");

  listElement.classList.add("movie-list-item");

  list.appendChild(listElement);
  listElement.appendChild(newAnchorTag);
  newAnchorTag.appendChild(image);

  newAnchorTag.href = `https://www.imdb.com/title/${movie.imdbID}/`;
  newAnchorTag.target = "_blank";
  image.src = movie.poster;
};

const showAllMovies = () => {
  getAllMovies().map(addMoviesToDom);
};

// Filter latestmovies
const showLatestMovies = () => {
  const filteredMovies = getAllLatestMovies();
  console.log("See all filtered movies", filteredMovies);

  filteredMovies.map(addMoviesToDom);
};

// Filter Avengers movies
const showAvengerMovies = () => {
  const filteredMovies = getMovieByTitle("Avenger");
  console.log("See all avenger movies", filteredMovies);

  filteredMovies.map(addMoviesToDom);
};

//Filter X-Men movies
const showXmenMovies = () => {
  const filteredMovies = getMovieByTitle("X-Men");
  console.log("See all X-men movies", filteredMovies);
  filteredMovies.map(addMoviesToDom);
};

//Filter Princess movies
const showPrincessMovies = () => {
  const filteredMovies = getMovieByTitle("Princess");
  console.log("See all princess movies", filteredMovies);
  filteredMovies.map(addMoviesToDom);
};

//Filter Batman movies
const showBatmanMovies = () => {
  const filteredMovies = getMovieByTitle("Batman");
  console.log("See all batman movies", filteredMovies);
  filteredMovies.map(addMoviesToDom);
};

const filterMovies = (filter) => {
  switch (filter) {
    case "new-movies":
      showLatestMovies();

      break;
    case "avenger":
      showAvengerMovies();
      break;
    case "x-men":
      showXmenMovies();
      break;
    case "princess":
      showPrincessMovies();
      break;
    case "batman":
      showBatmanMovies();
      break;
    default:
      break;
  }
};

const clearMovies = () => {
  list.innerHTML = null;
};

//add adventlistener to radiobuttons
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", (event) => {
    clearMovies();
    filterMovies(event.target.value);
  });
});

showAllMovies();
