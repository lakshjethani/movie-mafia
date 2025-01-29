document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");

    loader.classList.remove("hidden");

    window.addEventListener("load", function () {
        loader.classList.add("hidden");
    });

    document.addEventListener("submit", function () {
        loader.classList.remove("hidden");
    });

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (event) {
            if (!event.target.classList.contains("no-loader")) {
                loader.classList.remove("hidden");
            }
        });
    });
});
