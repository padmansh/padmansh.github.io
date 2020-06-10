let searched = document.querySelector("#searched"); //Search Button
let input = document.querySelector("#input"); //Form element taking name of movie
// let poster = document.querySelector("#poster"); //for the images from API
let result = document.querySelector(".result");

searched.addEventListener("click", () => (result.textContent = "")); // clearing earlier fetched images when new movie searched
let i;
searched.addEventListener("click", async function (event) {
  result.classList.add("display");
  event.preventDefault();
  let title = input.value;
  if (!title) {
    // $("#myModal").modal(options);
    $("#myModal").modal("show");
    // alert("Enter Something");
    result.classList.remove("display");
    return;
  }
  let res = await fetch(` http://www.omdbapi.com/?s=${title}&apikey=e10b009d&`);
  console.log(res);
  let data = await res.json();
  console.log(data);
  if (data.Error) {
    $("#noResults").modal("show");
    result.classList.remove("display");
    return;
  }
  for (let i = 0; i < data.Search.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("card-" + i);
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("card-image");
    card.appendChild(imgDiv);
    let img = document.createElement("img");
    img.setAttribute("src", data.Search[i]["Poster"]);
    imgDiv.appendChild(img);
    let titleDiv = document.createElement("div");
    titleDiv.classList.add("card-title");
    let movieName = document.createElement("h2");
    movieName.textContent = data.Search[i]["Title"];
    let releaseYear = document.createElement("h3");
    releaseYear.textContent = data.Search[i]["Year"];
    titleDiv.appendChild(movieName);
    titleDiv.appendChild(releaseYear);
    card.appendChild(titleDiv);
    result.appendChild(card);
    card.addEventListener("click", () => {
      //   let imdbId = data.Search[i]["imdbID"];
      //   let link = `http://www.omdbapi.com/?i=${imdbId}&apikey=e10b009d`;
      let link = `http://www.omdbapi.com/?t=${data.Search[i].Title}&apikey=e10b009d&plot=full&`;
      window.open("./info.html" + "?link=" + link);
      console.log(link); // link print for check
    });
  }
  // -----------------------------

  //   -----------------------------------------------
  // for (i = 0; i < data.Search.length; i++) {
  //     console.log(i);
  //     console.log(data.Search[i].Title); //title print just to check
  //     poster.insertAdjacentHTML("beforeend", `<div class="grid-item" id="img${i}"><img src=${data.Search[i].Poster}/></div>`);
  // } // displaying all fetched images in grid
  // let image = [];
  // for (i = 0; i < data.Search.length; i++) {
  //     image.push(document.querySelector(`#img${i}`));
  // } // making dicument object of all fetched images in grid
  // console.log(image);
  // for (i = 0; i < data.Search.length; i++) {
  //     (function(index) {
  //         image[index].addEventListener("click", () => { // adds click event on each poster displayed
  //             let link = `http://www.omdbapi.com/?t=${data.Search[index].Title}&apikey=e10b009d&plot=full&`; // link to fetch details on info page
  //             window.open("./info.html" + '?link=' + link); // opens new info page in new window
  //             console.log(link); // link print for check
  //             //localStorage.setItem("locallink", link);
  //         });
  //     })(i);
  // };
});

const navbar = document.querySelector("nav");

window.addEventListener("scroll", function (e) {
  const lastPosition = window.scrollY;
  if (lastPosition > 500) {
    navbar.classList.add("bg-dark");
  } else if (navbar.classList.contains("bg-dark")) {
    navbar.classList.remove("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
});

above9 = {
  gf2: "The Godfather: Part II",
  dk: "The Dark Knight",
  shr: "The Shawshank Redemption",
  gf: "The Godfather",
};

for (let movie in above9) {
  movieO = document.querySelector("." + movie + " p a");
  movieO.addEventListener("click", () => {
    let link = `http://www.omdbapi.com/?t=${above9[movie]}&apikey=e10b009d&plot=full&`;
    window.open("./info.html" + "?link=" + link);
    console.log(link);
  });
}
