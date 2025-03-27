

function App() {
  const moviesList = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]

  return (
    <>
      <h1 className="text-center">Movies List</h1>

      <div className="container d-flex justify-content-center align-items-center flex-column">
        {moviesList.map(movie => (
          <div className="card p-3 mb-1 mt-1">
            {movie.title}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
