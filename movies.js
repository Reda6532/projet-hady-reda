async function display() {
    let movies = document.querySelector(".movies")

    movies.innerHTML = "<li>loading...</li>"

    try {
        let response = await fetch("https://api.tvmaze.com/shows")
        let data = await response.json()

        movies.textContent = ""

        data.forEach((movie) => {
            movies.innerHTML += `<a>${movie.url}</a>`
            movies.innerHTML += `<li>${movie.name}</li>`
            movies.innerHTML += `<li>${movie.genres}</li>`
            movies.innerHTML += `<li>${movie.status}</li>`
        });
    } 
    catch (error) {
        movies.innerHTML = `<li>${error.message}</li>`
    }
}

display();