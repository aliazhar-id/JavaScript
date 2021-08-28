$('.search-button').on('click', function() {

  $.ajax({
  url: 'http://www.omdbapi.com/?apikey=71647e0c&s=' + $('.input-keyword').val(),
  success: results => {
    const movies = results.Search;
    let cards = '';

    movies.forEach(movie => {
      cards += showCards(movie);
    });
    $('.movie-container').html(cards);

    $('.modal-detail-button').on('click', function () {
      $.ajax({
        url: "http://www.omdbapi.com/?apikey=71647e0c&i=" + $(this).data('imdbid'),
        success: results => {
          const movieDetail = showMovieDetail(results);

          $('.modal-body').html(movieDetail);
        },
        error: e => {
          console.log(e.responseText);
        }
      });
    });
  },
  error: e => {
    console.log(e.responseText);
  }
});
});

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