

function search(event){
    event.preventDefault();

    let searchInput = document.querySelector(".search-input").value;

   let city = document.querySelector('.current-city');
   city.innerHTML = searchInput;
}

let searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click",search)

let now = newDate();
let date = now.getDate();
let day = now.getDay();
let minutes = now.getMinutes();

let currentDate = `${day}:${minutes}`

