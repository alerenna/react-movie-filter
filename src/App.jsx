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

  useEffect(() => {

    let filtered = moviesList
    if (searchMovieQuery.trim() !== '') {
      filtered = filtered.filter(movie => movie.title.toLowerCase().includes(searchMovieQuery))
    }

    if (selectedGenre !== 'Select One') {
      filtered = filtered.filter(movie => movie.genre === selectedGenre)
    }

    setFilteredMovie(filtered)


  }, [moviesList, searchMovieQuery, selectedGenre])


  return (

    <>
      <div className="fix-container border p-5 rounded">
        <h1 className="text-center">Movies List</h1>

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


        <div className="container d-flex justify-content-center align-items-center">
          {filteredMovie.map((movie, index) => (
            <div key={`move-${index}`} className="card p-3 m-1 mb-3">
              {movie.title}
            </div>
          ))}
        </div>

      </div>


    </>
  )
}

export default App
