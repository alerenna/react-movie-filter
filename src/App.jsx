import { useState, useEffect } from "react"

const moviesList = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {


  const [searchMovieQuery, setSearchMovieQuery] = useState('')
  const [filteredMovie, setFilteredMovie] = useState(moviesList)
  const [selectedGenre, setSelectedGenre] = useState('Select One')
  const [newMovieList, setNewMovieList] = useState(moviesList)
  const [newMovie, setNewMovie] = useState({ title: '', genre: '' })

  function handleFormSubmit(e) {
    e.preventDefault()

    const updateList = ([...newMovieList, newMovie])
    setNewMovieList(updateList)
    setNewMovie({ title: '', genre: '' })

    console.log(newMovieList);

  }



  useEffect(() => {

    let filtered = newMovieList
    if (searchMovieQuery.trim() !== '') {
      filtered = filtered.filter(movie => movie.title.toLowerCase().includes(searchMovieQuery))
    }

    if (selectedGenre !== 'Select One') {
      filtered = filtered.filter(movie => movie.genre === selectedGenre)
    }

    setFilteredMovie(filtered)
  }, [newMovieList, searchMovieQuery, selectedGenre])


  return (

    <>
      <div className="fix-container border p-5 rounded">
        {/* Title */}
        <h1 className="text-center">Movies List</h1>

        {/* Title search input */}
        <div className="container">
          <div className="mb-3">
            <label htmlFor="" className="form-label">Search movie by title</label>
            <input
              type="text"
              className="form-control"
              name="searchTitle"
              id="searchTitle"
              aria-describedby="SearchHelpId"
              placeholder="Search movie by title here..."
              value={searchMovieQuery}
              onChange={(e) => setSearchMovieQuery(e.target.value)}
            />
          </div>
        </div>
        {/* Genre search select */}
        <div className="container">
          <div className="mb-3">
            <label htmlFor="" className="form-label">Search movie by Genre</label>
            <select
              className="form-select"
              name="selectGenre"
              id="selectGenre"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option defaultValue={''}>Select one</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>
          </div>
        </div>

        {/* Cicle for print movies on cards */}
        <div className="container d-flex justify-content-center align-items-center">
          {filteredMovie.map((movie, index) => (
            <div key={`move-${index}`} className="card p-3 m-1 mb-3">
              {movie.title}
            </div>
          ))}
        </div>

        {/* Input for add a movie */}
        <div className="container">
          <form className="mb-3" onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Add new movie title</label>
              <input
                type="text"
                className="form-control"
                name="new-movie-title"
                id="new-movie-title"
                aria-describedby="newMovieTitleHelpId"
                placeholder="Insert movie title here"
                value={newMovie.title}
                onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">Add new movie genre</label>
              <input
                type="text"
                className="form-control"
                name="new-movie-genre"
                id="new-movie-genre"
                aria-describedby="newMovieGenreHelpId"
                placeholder="Insert movie genre here"
                value={newMovie.genre}
                onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Add movie
            </button>

          </form>
        </div>

      </div>


    </>
  )
}

export default App
