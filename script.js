let input = document.querySelector(".input");
let searchData = document.querySelector(".search-data");
let wrapper = document.querySelector(".wrapper");
let form = document.querySelector(".search-bar");
let inputValue;

form.addEventListener("submit" ,(ev)=>{

    ev.preventDefault();
    console.log(input.value);
    inputValue = input.value;
    search();
    input.value="";
} )

async function search(){

    let url = `http://www.omdbapi.com/?s=${inputValue}&apikey=bc7de276`;
    let data = await fetch(url);
    let result= await data.json();
    console.log(result);
    show(result.Search);
}


window.addEventListener('load', async function() {
    // Fetch movie data from the OMDB API
    const url = 'http://www.omdbapi.com/?s=movie&apikey=bc7de276';
    const response = await fetch(url);
    const data = await response.json();
  
    if (data && data.Search) {
      const movieData = data.Search;
  
      const searchContainer = document.querySelector('.search-data');
  
      movieData.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('col');
  
        movieCard.innerHTML = `
          <div class="card">
            <a class="card-media" href="./img-01.jpeg">
              <img src="${movie.Poster}" alt="${movie.Title}" width="100%" />
            </a>
            <div class="card-content">
              <div class="card-cont-header">
                <div class="cont-left">
                  <h3 style="font-weight: 600">${movie.Title}</h3>
                  <span style="color: #12efec">${movie.Year}</span>
                </div>
              </div>
            </div>
          </div>
        `;
  
        searchContainer.appendChild(movieCard);
      });
    } else {
      console.error('Error fetching movie data from OMDB API.');
    }
  });

  

function show(data){
    searchData.innerHTML="";
    data.forEach(ele=>{
        const {Poster,Title,Year}=ele;
        let div = document.createElement("div");
        div.innerHTML=`<div class="col">
                <div class="card">
                <a class="card-media" href="./img-01.jpeg">
                    <img src="${Poster}" alt="PUBG Mobile" width="100%" />
                </a>
                <div class="card-content">
                    <div class="card-cont-header">
                        <div class="cont-left">
                            <h3 style="font-weight: 600">${Title}</h3>
                            <span style="color: #12efec">${Year}</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>`;

        searchData.append(div);
    })

    
}
