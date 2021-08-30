const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
  try {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
  } catch (err) {
    alert(err);
  }

});

function getMovies(keyword) {
  return fetch('http://www.omdbapi.com/?apikey=71647e0c&s=' + keyword)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json()
    })
    .then(response => {
      if (response.Response === "False") {
        throw new Error(response.Error);
      }
      return response.Search;
    });
}

function updateUI(movies) {
  let cards = '';
  movies.forEach(movie => cards += showCards(movie));
  const movieContainer = document.querySelector('.movie-container');
  movieContainer.innerHTML = cards;
}

// event binding
document.addEventListener('click', async function (e) {
  if (e.target.classList.contains('modal-detail-button')) {
    try {
      const imdbid = e.target.dataset.imdbid;
      const movieDetail = await getMovieDetail(imdbid);
      updateUIDetail(movieDetail);
    } catch (err) {
      alert(err);
    }

  }
});

function getMovieDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=71647e0c&i=' + imdbid)
    .then(response => {
      if (!response.ok) {
        console.log(response)
        throw new Error(response.statusText)
      }
      return response.json();
    })
    .then(m => {
      if (m.Response === "False") {
        throw new Error(m.Error);
      }
      return m;
    });
}

function updateUIDetail(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = movieDetail;
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