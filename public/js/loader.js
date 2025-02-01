document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");

    const navigationEntries = performance.getEntriesByType("navigation");
    if (navigationEntries.length > 0 && navigationEntries[0].type === "back_forward") {
        loader.classList.add("hidden");
    } else {
        loader.classList.remove("hidden");
    }

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

    window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
            loader.classList.add("hidden");
        }
    });
});
