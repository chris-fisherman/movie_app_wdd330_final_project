// POPULAR LIST

const popularListContainer = document.querySelector("#popularList-cards");

const urlPopular = 'https://api.themoviedb.org/3/movie/popular?api_key=3635f4a229260177fe2b5498e1ba967e&language=en-US';

async function getPopularList() {

    const response = await fetch(urlPopular);
    const data = await response.json();

    // console.log(data.results); // testing

    displayPopularList(data.results);

}

const displayPopularList = (popularList) => {

    popularList.forEach(movie => {

        // link container
        let link = document.createElement("a");
        link.classList.add("cards-link");
        link.setAttribute("href", "#");

        // cards container
        let card = document.createElement("div");
        card.classList.add("cards");
        // img
        let img = document.createElement("img");
        img.classList.add("cards-img");
        img.setAttribute("src", `https://image.tmdb.org/t/p/original${movie.poster_path}`);
        // overlay
        let overlay = document.createElement("div");
        overlay.classList.add("cards-overlay");
        // overlay title
        let title = document.createElement("h3");
        title.classList.add("cards-title");
        title.innerHTML = `${movie.original_title}`;


        overlay.appendChild(title);

        card.appendChild(img);
        card.appendChild(overlay);

        link.appendChild(card);

        popularListContainer.appendChild(link);

        

        
    });

}

getPopularList();



// UPCOMING LIST

const upcomingListContainer = document.querySelector("#upcomingList-cards");

const urlUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=3635f4a229260177fe2b5498e1ba967e&language=en-US';

async function getUpcomingList() {

    const response = await fetch(urlUpcoming);
    const data = await response.json();

    // console.log(data.results); // testing

    displayUpcomingList(data.results);

}

const displayUpcomingList = (upcomingList) => {

    upcomingList.forEach(movie => {

        // link container
        let link = document.createElement("a");
        link.classList.add("cards-link");
        link.setAttribute("href", "#");

        // cards container
        let card = document.createElement("div");
        card.classList.add("cards");
        // img
        let img = document.createElement("img");
        img.classList.add("cards-img");
        img.setAttribute("src", `https://image.tmdb.org/t/p/original${movie.poster_path}`);
        // overlay
        let overlay = document.createElement("div");
        overlay.classList.add("cards-overlay");
        // overlay title
        let title = document.createElement("h3");
        title.classList.add("cards-title");
        title.innerHTML = `${movie.original_title}`;


        overlay.appendChild(title);

        card.appendChild(img);
        card.appendChild(overlay);

        link.appendChild(card);

        upcomingListContainer.appendChild(link);

        

        
    });

}

getUpcomingList();


// TOP RATED LIST

const ratedListContainer = document.querySelector("#ratedList-cards");

const urlRated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=3635f4a229260177fe2b5498e1ba967e&language=en-US';

async function getRatedList() {

    const response = await fetch(urlRated);
    const data = await response.json();

    // console.log(data.results); // testing

    displayRatedList(data.results);

}

const displayRatedList = (ratedList) => {

    ratedList.forEach(movie => {

        // link container
        let link = document.createElement("a");
        link.classList.add("cards-link");
        link.setAttribute("href", "#");

        // cards container
        let card = document.createElement("div");
        card.classList.add("cards");
        // img
        let img = document.createElement("img");
        img.classList.add("cards-img");
        img.setAttribute("src", `https://image.tmdb.org/t/p/original${movie.poster_path}`);
        // overlay
        let overlay = document.createElement("div");
        overlay.classList.add("cards-overlay");
        // overlay title
        let title = document.createElement("h3");
        title.classList.add("cards-title");
        title.innerHTML = `${movie.original_title}`;


        overlay.appendChild(title);

        card.appendChild(img);
        card.appendChild(overlay);

        link.appendChild(card);

        ratedListContainer.appendChild(link);

        

        
    });

}

getRatedList();