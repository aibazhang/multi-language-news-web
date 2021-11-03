import ResultsView from "./views/resultsView.js";

const controlScroll = function () {
  window.addEventListener("DOMContentLoaded", () => {
    let scrollPos = 0;
    const mainNav = document.getElementById("mainNav");
    const headerHeight = mainNav.clientHeight;
    window.addEventListener("scroll", function () {
      const currentTop = document.body.getBoundingClientRect().top * -1;
      if (currentTop < scrollPos) {
        // Scrolling Up
        if (currentTop > 0 && mainNav.classList.contains("is-fixed")) {
          mainNav.classList.add("is-visible");
        } else {
          console.log(123);
          mainNav.classList.remove("is-visible", "is-fixed");
        }
      } else {
        // Scrolling Down
        mainNav.classList.remove(["is-visible"]);
        if (
          currentTop > headerHeight &&
          !mainNav.classList.contains("is-fixed")
        ) {
          mainNav.classList.add("is-fixed");
        }
      }
      scrollPos = currentTop;
    });
  });
};

const controlSearchResults = async function () {
  ResultsView.renderSpinner();

  // 1) Get search query

  // 2) Load search results

  // 3) Render results
  ResultsView.render();
  // 4) Render inital pagination
};

const init = function () {
  controlScroll();
  controlSearchResults();
};

init();
