const moviesContainer = document.querySelector("#main-cards");

const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b915c50445msh0cdf4b30cc612e0p12b840jsn35d03a7ec20d',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

async function getTop100Movies() {
    try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

    displayTop100Movies(result);
    } catch (error) {
        console.error(error);
    }
}

const displayTop100Movies = (Top100Movies) => {

    Top100Movies.forEach(movie => {

        // link container
        // let link = document.createElement("a");
        // link.classList.add("cards-link");
        // link.setAttribute("href", "#");

        // cards container
        let card = document.createElement("section");
        card.classList.add("detail-container");
        // img
        let img = document.createElement("img");
        img.setAttribute("src", movie.image);
        // overlay
        let overlay = document.createElement("div");
        overlay.classList.add("detail-overlay");
        // position
        let position = document.createElement("h2");
        position.classList.add("detail-position");
        position.innerHTML = movie.rank;
        // overlay title
        let title = document.createElement("h2");
        title.classList.add("detail-title");
        title.innerHTML = `${movie.title}`;

        // rating and genres container
        let rateGenresContainer = document.createElement("div");
        rateGenresContainer.classList.add("detail-rating-genres-container");
        // rate and date container
        let rateDateContainer = document.createElement("div");
        rateDateContainer.classList.add("detail-rating-vote-container");
        // rating container
        let ratingContainer = document.createElement("div");
        ratingContainer.classList.add("detail-rating-container");
        // rating
        let rating = document.createElement("span");
        rating.classList.add("detail-rating");
        rating.innerHTML = `${movie.rating}`;
        // rating total
        let ratingTotal = document.createElement("span");
        ratingTotal.classList.add("detail-rating-total");
        ratingTotal.innerHTML = "/10";
        // date
        let date = document.createElement("span");
        date.classList.add("detail-time");
        date.innerHTML = `${movie.year}`;

        // genres container
        let genresContainer = document.createElement("div");
        genresContainer.classList.add("detail-genres");

        let container = document.createElement("div");
        container.classList.add("genre-container");
        let span;
        
        movie.genre.map(g => {
            
            span = document.createElement("span");
            span.classList.add("movie-genre");
            span.innerHTML = g;
   
            
            container.appendChild(span);
            
        });

        genresContainer.appendChild(container);
        


        ratingContainer.appendChild(rating);
        ratingContainer.appendChild(ratingTotal);

        rateDateContainer.appendChild(ratingContainer);
        rateDateContainer.appendChild(date);

        rateGenresContainer.appendChild(rateDateContainer);
        rateGenresContainer.appendChild(genresContainer);

        overlay.appendChild(position);
        overlay.appendChild(title);
        overlay.appendChild(rateGenresContainer);

        card.appendChild(img);
        card.appendChild(overlay);

        moviesContainer.appendChild(card);
        
    });

}

getTop100Movies();