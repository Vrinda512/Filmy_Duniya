const btn = document.getElementById("mera-button");
const wrappers = document.querySelector(".wrapper");

function getMovie(movies) {
  let html = `

  <div class = container>
  <div class = card>
  <div class = image>
  <img href = "#" src ="${movies.Poster}" height="auto" width="200px" alt="movie">
      </div>
      <div class = content>
      <h3>${movies.Title}</h3>
        <h3>${movies.Year}</h3>
        <a href="https://www.imdb.com/title/${movies.imdbID}"><img src="./assets/imdb.svg" height=20 width=30></img></a>
        <p style:"margin-bottom: 1%">${movies.Type}</p>
        <p></p>
      </div>
        </div>
        </div>
    `;
  return html;
}

function openPopup() {
  const newEle = document.createElement("a");
  newEle.href = "#popup1";
  newEle.id = "openPopup";
  newEle.click();
}

// Function to close the popup
function closePopup() {
  const ele = document.getElementById("openPopup");
  ele.remove();
}

async function fetchMovie(movie) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${movie}&apikey=ec357c06`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.Search || data.Search.length === 0) {
      openPopup();
      return;
    }

    let arr = data.Search;

    for (let movie of arr) {
      const html = getMovie(movie);
      wrappers.innerHTML += html;
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}
let movieSearch = document.querySelector("[search-movie]");

movieSearch.addEventListener("focus", () => {
  wrappers.innerHTML = "";
});

btn.addEventListener("click", () => {
  let movie = document.querySelector("#hello").value;
  if (movie == "") {
    alert("Enter a movie name");
  } else {
    fetchMovie(movie);

    movieSearch.value = "";
  }
});

// SET IN LOCAL STORAGE

function setFavourite() {
  alert("Set favourite");
  const ele = document.querySelectorAll(".cont-1");
}