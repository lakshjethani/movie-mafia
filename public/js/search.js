$(document).ready(function () {
    const loader = $('#loader');
    let debounceTimer;

    $('#searchInput').on('input', function () {
        clearTimeout(debounceTimer); 

        debounceTimer = setTimeout(() => {
            const query = $(this).val().trim();

            if (query === '') {
                loader.removeClass('hidden'); 
                $.get('/', function (data) {
                    $('#movieResults').html($(data).find('#movieResults').html());
                    loader.addClass('hidden'); 
                }).fail(function () {
                    $('#movieResults').empty().append('<p>Error fetching results. Try again.</p>');
                    loader.addClass('hidden');
                });
                return;
            }

            loader.removeClass('hidden');

            $.get('/search', { q: query }, function (data) {
                const movies = data.results;
                $('#movieResults').empty();

                if (movies.length === 0) {
                    $('#movieResults').append('<p>No movies found.</p>');
                } else {
                    movies.forEach(movie => {
                        $('#movieResults').append(`
                            <div class="col mb-4">
                                <div class="card shadow-sm">
                                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}" />
                                    <div class="card-body">
                                        <h5 class="card-title">${movie.title}</h5>
                                        <p class="card-text">${movie.overview.substring(0, 100)}...</p>
                                        <a href="/movie/${movie.id}" class="btn btn-primary">Details</a>
                                    </div>
                                </div>
                            </div>
                        `);
                    });
                }
                loader.addClass('hidden');
            }).fail(function () {
                console.log("Error fetching search results");
                $('#movieResults').empty().append('<p>Error fetching results. Try again.</p>');
                loader.addClass('hidden');
            });
        }, 300);
    });

    document.addEventListener("DOMContentLoaded", function () {
        loader.removeClass("hidden");

        window.addEventListener("load", function () {
            loader.addClass("hidden");
        });

        document.addEventListener("submit", function () {
            loader.removeClass("hidden");
        });

        document.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function (event) {
                if (!event.target.classList.contains("no-loader")) {
                    loader.removeClass("hidden");
                }
            });
        });
    });
});
