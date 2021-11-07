class ResultsView {
  // _data = [
  //   {
  //     title: "Title",
  //     url: "url.html",
  //     publishedTimeLocal: "September 30, 2021",
  //     description: "Subtitle",
  //     author: "Author Name",
  //   },
  //   {
  //     title: "Title2",
  //     url: "url2.html",
  //     publishedTimeLocal: "September 31, 2021",
  //     description: "Subtitle2",
  //     author: "Author Name2",
  //   },
  // ];
  _data;
  _parentElement = document.querySelector(".results");
  _errorMessage = `No News found`;
  _message = "";

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _generateMarkup() {
    return this._data
      .map(
        (result) => `
        <div class="post-preview">
          <a href="${result.url}">
              <h2 class="post-title">${result.title}</h2>
              <h3 class="post-subtitle">${result.description}</h3>
          </a>
          <p class="post-meta">
              Posted by
              <a href="#!">${result.author}</a>
              on ${result.publishedTimeLocal}
          </p>
        </div>
        <hr class="my-4">
      `
      )
      .join("");
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const markup = `
      <h2 class="post-title">Loading...</h2>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new ResultsView();
