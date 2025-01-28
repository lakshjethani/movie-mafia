$(document).ready(function () {
    $('#searchInput').on('input', function () {
        const query = $(this).val();

        if (query.trim() === '') {
            $('#movieResults').empty(); 
            return;
        }

        $.get('/search', { q: query }, function (data) {
            const movies = data.results;

            $('#movieResults').empty();

            movies.forEach(movie => {
                $('#movieResults').append(`
                    <div class="card movie-card mb-4">
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}" />
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${movie.overview.substring(0, 150)}...</p>
                            <a href="/movie/${movie.id}" class="btn btn-primary">Details</a>
                        </div>
                    </div>
                `);
            });
        });
    });
});
