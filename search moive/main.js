
let btn = document.getElementById('btn');
let outputData = document.getElementById('output');
let resetBtn = document.getElementById('resetBtn');
let finaLink;

btn.addEventListener('click', testBtn);
resetBtn.addEventListener('click', resetPage);

function resetPage() {
  window.location.reload();
}

function testBtn() {

  let userInput = document.getElementById('search').value;
  console.log(`User typed in: ${userInput}`);

  if (userInput === '') {alert(`Please enter a movie name`)} 
  else {finaLink = `http://www.omdbapi.com/?t=${userInput}&apikey=27b1cab0`}
  console.log(finaLink)
  
  let outputData = document.getElementById('output');
  fetch(finaLink)
    .then(responese => responese.json())
    .then(result => {
      console.log(result)

      outputData.innerHTML = `
      <img src='${result.Poster}'> <br>
      Title: ${result.Title} <br>
      Year: ${result.Year}<br>
      Rated: ${result.Rated}<br>
      Runtime: ${result.Runtime}<br>
      Director: ${result.Director}<br>
      Actors: ${result.Actors}<br>
      imdbRating: ${result.imdbRating}<br>
      Genre: ${result.Genre}<br>
      Plot: ${result.Plot}<br>
      Website:<a href='${result.Website}' target="_blank">${result.Website}</a>`;
  })
}
