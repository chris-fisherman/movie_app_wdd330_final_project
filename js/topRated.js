const topRatedContainer = document.querySelector("#main-cards");

const urlTopRatedDetails = 'https://api.themoviedb.org/3/movie/top_rated?api_key=3635f4a229260177fe2b5498e1ba967e&language=en-US';

async function getTopRatedDetails() {

    const response = await fetch(urlTopRatedDetails);
    const data = await response.json();

    console.log(data.results); // testing

    displayTopRatedDetails(data.results);

}

const displayTopRatedDetails = (topRatedDetails) => {

    topRatedDetails.forEach(movie => {

        // link container
        // let link = document.createElement("a");
        // link.classList.add("cards-link");
        // link.setAttribute("href", "#");

        // cards container
        let card = document.createElement("section");
        card.classList.add("detail-container");
        // img and overlay container
        let imgOverlayContainer = document.createElement("div");
        imgOverlayContainer.classList.add("detail-imgOverlayContainer");
        // img
        let img = document.createElement("img");
        img.setAttribute("src", `https://image.tmdb.org/t/p/original${movie.poster_path}`);
        // overlay
        let overlay = document.createElement("div");
        overlay.classList.add("detail-overlay");
        // overlay title
        let title = document.createElement("h2");
        title.classList.add("detail-title");
        title.innerHTML = `${movie.original_title}`;

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
        rating.innerHTML = `${movie.vote_average}`;
        // rating total
        let ratingTotal = document.createElement("span");
        ratingTotal.classList.add("detail-rating-total");
        ratingTotal.innerHTML = "/10";
        // rating total
        let voteCount = document.createElement("span");
        voteCount.classList.add("detail-time");
        voteCount.innerHTML = `${movie.vote_count} Votes`;
        // date
        let date = document.createElement("p");
        date.classList.add("detail-date");
        date.innerHTML = `${movie.release_date}`;
        // overview
        let overview = document.createElement("p");
        overview.classList.add("detail-description");
        overview.innerHTML = movie.overview;

        // genres container
        // let genresContainer = document.createElement("div");
        // genresContainer.classList.add("detail-genres");

        // let container = document.createElement("div");
        // container.classList.add("genre-container");
        // let span;
        
        // movie.genre_ids.map(g => {
            
        //     span = document.createElement("span");
        //     span.classList.add("movie-genre");
        //     span.innerHTML = g;
   
            
        //     container.appendChild(span);
            
        // });

        // genresContainer.appendChild(container);
        


        ratingContainer.appendChild(rating);
        ratingContainer.appendChild(ratingTotal);

        rateDateContainer.appendChild(ratingContainer);
        rateDateContainer.appendChild(voteCount);

        rateGenresContainer.appendChild(rateDateContainer);

        overlay.appendChild(title);
        overlay.appendChild(rateGenresContainer);
        overlay.appendChild(date);

        imgOverlayContainer.appendChild(img);
        imgOverlayContainer.appendChild(overlay);

        card.appendChild(imgOverlayContainer);
        card.appendChild(overview);

        topRatedContainer.appendChild(card);
        
    });

}

getTopRatedDetails();