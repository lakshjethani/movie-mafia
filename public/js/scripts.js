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