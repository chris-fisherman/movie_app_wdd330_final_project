const bannerContainer = document.querySelector("#bannerContainer");

const url = 'https://api.themoviedb.org/3/movie/popular?api_key=3635f4a229260177fe2b5498e1ba967e&language=en-US';

async function getPopularMovies() {

    const response = await fetch(url);
    const data = await response.json();

    console.log(data.results); // testing

    displayPopularMovies(data.results);

}

const displayPopularMovies = (popularMovies) => {

    popularMovies.forEach(movie => {

        // link container
        let link = document.createElement("a");
        link.classList.add("bannerLink");
        link.setAttribute("href", "#");

        // image container
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("bannerImage");
        // image
        let image = document.createElement("img");
        image.setAttribute("src", `https://image.tmdb.org/t/p/original${movie.backdrop_path}`);

        // overlay container
        let overlay = document.createElement("div");
        overlay.classList.add("bannerImage-overlay");
        // overlay title
        let title = document.createElement("h1");
        title.classList.add("bannerImage-title");
        title.innerHTML = `${movie.original_title}`;
        // rate and date container
        let rateDateContainer = document.createElement("div");
        rateDateContainer.classList.add("bannerImage-runtime");
        // rating container
        let ratingContainer = document.createElement("div");
        ratingContainer.classList.add("bannerImage-rating-container");
        // rating
        let rating = document.createElement("span");
        rating.classList.add("bannerImage-rating");
        rating.innerHTML = `${movie.vote_average}`;
        // rating total
        let ratingTotal = document.createElement("span");
        ratingTotal.classList.add("bannerImage-rating-total");
        ratingTotal.innerHTML = "/10";
        // date
        let date = document.createElement("span");
        date.classList.add("bannerImage-data");
        date.innerHTML = `${movie.release_date}`;



        imageContainer.appendChild(image);

        overlay.appendChild(title);

        ratingContainer.appendChild(rating);
        ratingContainer.appendChild(ratingTotal);

        rateDateContainer.appendChild(ratingContainer);
        rateDateContainer.appendChild(date);

        overlay.appendChild(rateDateContainer);

        link.appendChild(imageContainer);
        link.appendChild(overlay);

        bannerContainer.appendChild(link);

        
    });

} 

getPopularMovies();