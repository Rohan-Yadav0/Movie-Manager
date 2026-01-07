    let currentFilters = {
        search :"",
        genre :"All",
        sortBy:"High-Low"
    }
    console.log("initial value",currentFilters.genre)

    let filteredMovies ;
    const formVisible = document.getElementById("add-movie-form");

    const movies=[
        {id:1 , title:"Inception" , genre : "Sci-Fi" , year : 2010 ,rating:8.8},
        {id:2 ,title:"The Dark Knight",genre : "Action" , year: 2008 , rating:9.0},
        {id:3, title:"Interstellar" , genre:"Sci-Fi", year : 2014 , rating:8.6},
        {id:4, title:"Pulp Fiction", genre:"Crime",year : 1994 , rating: 8.9},
        {id:5 ,title:"Forrest Gump", genre:"Drama",year:1994 , rating : 8.8},
    ];
    
    function displayMovies(moviesDisplayed) {
        const container = document.getElementById("movie-container");
        
        if (!moviesDisplayed || moviesDisplayed.length === 0) {
            container.innerHTML = "<p>No movies found</p>";
            return;
        }
        
        container.innerHTML = moviesDisplayed.map(movie => `
            <div class="movie-card">
                <h3>${movie.title}</h3>
                <p>Genre: ${movie.genre} | Year: ${movie.year}</p>
                <p>rating: ⭐ ${movie.rating}</p>
                <button onclick="deleteMovie(${movie.id})">Delete</button>
            </div>
        `).join('');
        }

    //Event listener for Add movie
    document.getElementById("addMovieButton").addEventListener("click",function(){
        formVisible.style.display = "flex";
    });
    document.getElementById("cancel-form").addEventListener("click",function(){
        formVisible.style.display = "none"
        formVisible.reset();
    });
    formVisible.addEventListener("submit",function(event){
     event.preventDefault();
       const title = document.getElementById("title-input").value.trim();
       const genre = document.getElementById("genre-input").value;
       const year = document.getElementById("year-input").value;
       const rating = document.getElementById("rating-input").value;

        if (!title || isNaN(year) || isNaN(rating)) {
            alert("Please fill in all fields correctly");
            return;
        }
       const newMovies = {
        id     : movies.length>0 ? Math.max(...movies.map(m =>m.id))+1 :1,
        title  : title,
        genre  : genre,
        year   : Number(year),
        rating : Number(rating)
       }
       console.log("new Movies added ",newMovies);
       movies.push(newMovies);

       formVisible.reset();
       formVisible.style.display = "none";
       console.log("check Movies added ",movies);
       updatedMoviesDisplay();
    });
    //Event listener for Search Bar
    document.getElementById("searchBar").addEventListener("input",function(event){
        currentFilters.search = event.target.value;
        
        updatedMoviesDisplay();//fuction to be called when there is an event triggered.
    })

    //Event Listener for filtering Movies based on the genre
     document.getElementById("filterMovie").addEventListener("change",function(event){
         console.log("before event trigger",currentFilters.genre)
        currentFilters.genre = event.target.value;

        updatedMoviesDisplay(); 
    })

    //Event Listener for Soting Movies by Year and rating
    document.getElementById("sortBy").addEventListener("change",function(event){
        currentFilters.sortBy = event.target.value;

        updatedMoviesDisplay();
    })
    

    function updatedMoviesDisplay(){
            let filtered = [...movies];
            console.log(" 01 call",filtered);
        
            if(currentFilters.search){
                console.log(" 02 call",filtered);
                filtered = filtered.filter(movie=>
                   movie.title.toLowerCase().includes(currentFilters.search.toLowerCase())
                )
                console.log(" 03 call",filtered);
            }

        
            if(currentFilters.genre !== "All" ){
                console.log(" 04 call",filtered);

                filtered = filtered.filter(movie => 
                     currentFilters.genre === movie.genre
                )
                console.log(" 05 call",filtered);
            } 
        
            // function for Sorting By rating and year(newest)
            if(currentFilters.sortBy !== "High-Low"){
                console.log(" 06 call",filtered);
                filtered = filtered.toSorted((a,b)=>b.year-a.year);
                console.log(" 07 call",filtered);
            }else{
                console.log(" 08 call",filtered);
               filtered = filtered.toSorted((a,b)=>b.rating-a.rating);
                console.log(" 09 call",filtered);
            }
            filteredMovies=filtered;
            console.log("10 call",filtered,filteredMovies)
            displayMovies(filteredMovies);
            stats(filteredMovies);
        }

    //Stats display
    function stats(moviesArray){
        // const moviesArray = filteredMovies !== undefined ? filteredMovies : movies;
       
        const moviesText = moviesArray.length;
        totalMovieText.innerHTML = moviesText;
        
        
        if (moviesArray.length === 0) {
            avgRatingText.innerHTML = "0.0"; 
            console.log("No movies to calculate average");
            return;
        }
        
        const ratingTotal = moviesArray.map(movie => movie.rating).reduce((a,b) => a+b, 0);
        const ratingText = (ratingTotal / moviesArray.length).toFixed(1); 
        
        avgRatingText.innerHTML = ratingText;
        console.log("Total rating:", ratingText);
    }
    function deleteMovie(deletedId){
        console.log("movie deleted",deletedId)

        const index = movies.findIndex(movie=> movie.id === deletedId);
        if (index !== -1){
            movies.splice(index,1);
        }

        updatedMoviesDisplay();
    }

    updatedMoviesDisplay();

    console.log("MOVIES",movies);