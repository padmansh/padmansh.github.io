let flink = document.location.search.replace(/^.*?\=/, "");
let title = document.querySelector("#title");
let actors = document.querySelector("#actors");
let awards = document.querySelector("#awards");
let boxoffice = document.querySelector("#boxoffice");
let country = document.querySelector("#country");
let director = document.querySelector("#director");
let genre = document.querySelector("#genre");
let language = document.querySelector("#language");
let rated = document.querySelector("#rated");
let imdb = document.querySelector("#imdb");
let rt = document.querySelector("#rt");
let meta = document.querySelector("#meta");
let runtime = document.querySelector("#runtime");
let votes = document.querySelector("#votes");
let year = document.querySelector("#year");
let plot = document.querySelector("#plot");
let p = document.querySelector("#p");

let mq = window.matchMedia(`@media all and (maxWidth: 991px)`);

//mq.addListener(function(changed) {
//    if (changed.matches) {
//        document.querySelector("#md1").classList.add("col-12");
//        document.querySelector("#md1").classList.add("textAlign: center")
//        document.querySelector("#md2").classList.add("col-12");
//    } else {
//        document.querySelector("#md1").classList.add("col-4");
//        document.querySelector("#md2").classList.add("col-8");
//    }
//})

console.log(flink);

let image = document.querySelector("#image > img");
window.onload = async function() {
    let res = await fetch(flink);
    console.log(res);
    let data = await res.json();
    console.log(data);
    image.setAttribute("src", data.Poster);
    title.innerHTML = data.Title;
    actors.innerHTML = `<span>Cast : &nbsp;</span>${data.Actors}`;
    awards.innerHTML = `<span><svg class="bi bi-trophy" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 1h10c-.495 3.467-.5 10-5 10S3.495 4.467 3 1zm0 15a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1H3zm2-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1H5z"/>
    <path fill-rule="evenodd" d="M12.5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-6-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/>
    <path d="M7 10h2v4H7v-4z"/>
    <path d="M10 11c0 .552-.895 1-2 1s-2-.448-2-1 .895-1 2-1 2 .448 2 1z"/>
  </svg></span><span>&nbsp;  ${data.Awards}</span>`;
    boxoffice.innerHTML = `<span id="side">Earned :</span> <span id="main">${data.BoxOffice}</span>`;
    country.innerHTML = `<span><img src="flag.svg" length="25px" width="25px"/></span><span> &nbsp;${data.Country}</span>`;
    director.innerHTML = `<span>Directors :&nbsp;</span>  ${data.Director}`;
    genre.innerHTML = `${data.Genre}`;
    language.innerHTML = `${data.Language}`;
    rated.innerHTML = `${data.Rated}`;
    imdb.innerHTML = `Imdb : ${data.Ratings[0].Value}`;
    rt.innerHTML = `Rotten Tomatoes : ${data.Ratings[1].Value}`;
    runtime.innerHTML = data.Runtime;
    votes.innerHTML = `<span>Imdb Votes :</span> &nbsp;${data.imdbVotes}`;
    year.innerHTML = data.Released;
    plot.innerHTML = `${data.Plot}`;
    p.innerHTML = `Plot :&nbsp`
};