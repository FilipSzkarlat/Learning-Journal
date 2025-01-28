const ViewMoreBtn = document.querySelector(".btn-view-more");
const hiddenArticles = document.querySelectorAll(".hidden-article");

// After click the button, the hero section will be hidden and the full-hero section will be displayed
ViewMoreBtn.addEventListener("click", () => {
  document.querySelector(".hero").style.display = "none";
  document.querySelector(".full-hero").style.display = "flex";
  ViewMoreBtn.style.display = "none";
  hiddenArticles.forEach((article) => {
    article.style.display = "none";
  });
  scrollToTop(); // Scroll to the top of the page
});

function scrollToTop() {
  window.scrollTo({
    top: 0, // Scroll to the top
    behavior: "smooth", // Smooth scrolling effect
  });
}
