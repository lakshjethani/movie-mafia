$(document).ready(function () {
    const loader = $('#loader');
    let debounceTimer;

    $('#searchInput').on('input', function () {
        clearTimeout(debounceTimer);
        const query = $(this).val().trim();
        
        const url = new URL(window.location);
        if (query === '') {
            url.searchParams.delete('q');
        } else {
            url.searchParams.set('q', query);
        }
        history.replaceState({}, '', url);

        debounceTimer = setTimeout(() => {
            loader.removeClass('hidden');
            
            $.get("/", { q: query }, function (data) {
                const $data = $(data);
                $('#movieResults').html($data.find('#movieResults').html());
                $('.pagination').html($data.find('.pagination').html());
                loader.addClass('hidden');
            }).fail(function () {
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
