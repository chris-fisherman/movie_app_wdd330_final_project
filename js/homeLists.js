// POPULAR LIST

const popularListContainer = document.querySelector("#popularList-cards");

const urlPopular = 'https://api.themoviedb.org/3/movie/popular?api_key=3635f4a229260177fe2b5498e1ba967e&language=en-US';

async function getPopularList() {

    const response = await fetch(urlPopular);
    const data = await response.json();

    // console.log(data.results); // testing

    displayPopularList(data.results);

    // MODAL QUICK VIEW
    let previewContainer = document.querySelector("#popularList-cards");
    let proviewBox = previewContainer.querySelectorAll(".modal");
    // SHOW MODAL
    document.querySelectorAll("#popularList-cards .cards-link").forEach(button => {
      button.onclick = () => {
        let name = button.getAttribute("data-name");
        proviewBox.forEach(modal => {
          let target = modal.getAttribute("data-target");
          if(name == target) {
            modal.classList.add("active");
          }
        })
      }
    })
    // CLOSE MODAL
    proviewBox.forEach(close => {
      close.querySelector(".modal-close").onclick = () => {
        close.classList.remove("active");
      }
    })

}

const displayPopularList = (popularList) => {

    popularList.forEach(movie => {

        // link container
        let link = document.createElement("button");
        link.classList.add("cards-link");
        link.setAttribute("data-name", movie.id);

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

        // MODAL MAIN MAIN
        let cardMain = document.createElement("section");
        cardMain.classList.add("modal");
        cardMain.setAttribute("data-target", movie.id)
        // cards 2 MAIN container
        let card2Main = document.createElement("section");
        card2Main.classList.add("modal-1");
        // cards container
        let card2 = document.createElement("section");
        card2.classList.add("modal-container");
        // img and overlay container
        let imgOverlayContainer = document.createElement("div");
        imgOverlayContainer.classList.add("modal-imgOverlayContainer");
        // img
        let img2 = document.createElement("img");
        img2.setAttribute("src", `https://image.tmdb.org/t/p/original${movie.poster_path}`);
        // overlay
        let overlay2 = document.createElement("div");
        overlay2.classList.add("modal-overlay");
        // overlay title
        let title2 = document.createElement("h2");
        title2.classList.add("modal-title");
        title2.innerHTML = `${movie.original_title}`;

        // rating and genres container
        let rateGenresContainer = document.createElement("div");
        rateGenresContainer.classList.add("modal-rating-genres-container");
        // rate and date container
        let rateDateContainer = document.createElement("div");
        rateDateContainer.classList.add("modal-rating-vote-container");
        // rating container
        let ratingContainer = document.createElement("div");
        ratingContainer.classList.add("modal-rating-container");
        // rating
        let rating = document.createElement("span");
        rating.classList.add("modal-rating");
        rating.innerHTML = `${movie.vote_average}`;
        // rating total
        let ratingTotal = document.createElement("span");
        ratingTotal.classList.add("modal-rating-total");
        ratingTotal.innerHTML = "/10";
        // rating total
        let voteCount = document.createElement("span");
        voteCount.classList.add("modal-time");
        voteCount.innerHTML = `${movie.vote_count} Votes`;
        // date
        let date = document.createElement("p");
        date.classList.add("modal-date");
        date.innerHTML = `${movie.release_date}`;
        // overview
        let overview = document.createElement("p");
        overview.classList.add("modal-description");
        overview.innerHTML = movie.overview;

        // close button
        let closeButton = document.createElement("button");
        closeButton.classList.add("modal-close");
        closeButton.innerHTML = "X";


        ratingContainer.appendChild(rating);
        ratingContainer.appendChild(ratingTotal);

        rateDateContainer.appendChild(ratingContainer);
        rateDateContainer.appendChild(voteCount);

        rateGenresContainer.appendChild(rateDateContainer);

        overlay2.appendChild(title2);
        overlay2.appendChild(rateGenresContainer);
        overlay2.appendChild(date);

        imgOverlayContainer.appendChild(img2);
        imgOverlayContainer.appendChild(overlay2);

        card2.appendChild(imgOverlayContainer);
        card2.appendChild(overview);

        card2Main.appendChild(card2);
        card2Main.appendChild(closeButton);

        cardMain.appendChild(card2Main);

        popularListContainer.appendChild(link);
        popularListContainer.appendChild(cardMain);

        

        
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
        let link = document.createElement("button");
        link.classList.add("cards-link");
        link.setAttribute("data-name", movie.id);

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
        let link = document.createElement("button");
        link.classList.add("cards-link");
        link.setAttribute("data-name", movie.id);

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