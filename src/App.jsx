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


  const [searchQuery, setSearchQuery] = useState('')
  const [filteredMovie, setFilteredMovie] = useState(moviesList)

  useEffect(() => {

    console.log(moviesList);


    setFilteredMovie(moviesList.filter(movie => movie.title.toLowerCase().includes(searchQuery)))

  }, [moviesList, searchQuery])



  return (

    <>


      <div className="fix-container border p-5 rounded">
        <h1 className="text-center">Movies List</h1>

        <div className="container">
          <div className="mb-3">
            <label htmlFor="" className="form-label">Search</label>
            <input
              type="text"
              className="form-control"
              name="search"
              id="search"
              aria-describedby="SearchHelpId"
              placeholder="Search movie here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
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
