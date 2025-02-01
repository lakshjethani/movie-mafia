    document.getElementById("genre").addEventListener("change", function() {
        document.getElementById("pageInput").value = 1; 
        document.getElementById("genreForm").submit();
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
    if (!localStorage.getItem('splashShown')) {
        const splashScreen = document.getElementById('splashScreen');
        splashScreen.classList.remove('hide');
        setTimeout(() => {
            splashScreen.classList.add('hide');
            localStorage.setItem('splashShown', 'true');
        }, 3000); 
    } else {
        document.getElementById('splashScreen').classList.add('hide');
    }
});
