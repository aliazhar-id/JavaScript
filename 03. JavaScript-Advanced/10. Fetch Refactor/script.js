// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function () {

//   const inputKeyword = document.querySelector('.input-keyword');
//   fetch('http://www.omdbapi.com/?apikey=71647e0c&s=' + inputKeyword.value)
//     .then(response => response.json())
//     .then(response => {
//       const movies = response.Search;
//       let cards = '';
//       movies.forEach(movie => cards += showCards(movie));
//       const movieContainer = document.querySelector('.movie-container');
//       movieContainer.innerHTML = cards;

//       const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//       modalDetailButton.forEach(btn => {
//         btn.addEventListener('click', function () {
//           const imdbid = this.dataset.imdbid;
//           fetch('http://www.omdbapi.com/?apikey=71647e0c&i=' + imdbid)
//             .then(response => response.json())
//             .then(response => {
//               const movieDetail = showMovieDetail(response);
//               const modalBody = document.querySelector('.modal-body');
//               modalBody.innerHTML = movieDetail;

//             });

//         });
//       });

//     });

// });


const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
  const inputKeyword = document.querySelector('.input-keyword');
  const movies = await getMovies(inputKeyword.value);
  updateUI(movies);
});

function getMovies(keyword) {
  return fetch('http://www.omdbapi.com/?apikey=71647e0c&s=' + keyword)
    .then(response => response.json())
    .then(response => response.Search);
}

// event binding
document.addEventListener('click', async function (e) {
  if (e.target.classList.contains('modal-detail-button')) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=71647e0c&i=' + imdbid)
    .then(response => response.json())
    .then(m => m);
}

function updateUIDetail(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = movieDetail;
}

function updateUI(movies) {
  let cards = '';
  movies.forEach(movie => cards += showCards(movie));
  const movieContainer = document.querySelector('.movie-container');
  movieContainer.innerHTML = cards;
}

function showCards({ Poster, Title, Year, imdbID }) {
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${Poster}" class="card-img-top">
              <div class="card-body">
                <div class="card-title">${Title}</div>
                <h6 class="card-subtitle mb-2 text-muted">${Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid=${imdbID}>Show Details</a>
              </div>
            </div>
          </div>`
}

function showMovieDetail({ Poster, Title, Year, Director, Actors, Writer, Plot }) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${Poster}" class="img-fluid">
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${Title} (${Year})</h4></li>
                  <li class="list-group-item"><strong>Director : </strong>${Director}</li>
                  <li class="list-group-item"><strong>Actors : </strong>${Actors}</li>
                  <li class="list-group-item"><strong>Writer : </strong>${Writer}</li>
                  <li class="list-group-item"><strong>Plot : </strong> <br> ${Plot}</li>
                </ul>
              </div>
            </div>
          </div>`
}