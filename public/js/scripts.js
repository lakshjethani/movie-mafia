    window.addEventListener('DOMContentLoaded', function () {
    var genreElement = document.getElementById("genre");
    if (genreElement) {
        genreElement.addEventListener("change", function() {
            document.getElementById("pageInput").value = 1; 
            document.getElementById("genreForm").submit();
        });
    }
    });
    function toggleReview(index) {
      var fullReview = document.getElementById("full-review-" + index);
      var shortText = document.getElementById("review-text-" + index);
      var button = document.getElementById("review-btn-" + index);

      if (fullReview.style.display === "none") {
        fullReview.style.display = "inline";
        shortText.style.display = "none";
        button.innerHTML = "Read Less";
      } else {
        fullReview.style.display = "none";
        shortText.style.display = "inline";
        button.innerHTML = "Read More";
      }
    }
    
window.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splashScreen');
    if (splashScreen) {
        if (!localStorage.getItem('splashShown')) {
            splashScreen.classList.remove('hide');
            setTimeout(() => {
                splashScreen.classList.add('hide');
                localStorage.setItem('splashShown', 'true');
            }, 3000); 
        } else {
            splashScreen.classList.add('hide');
        }
    }
});
