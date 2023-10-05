import './index.css'

const MovieDetails = props => {
  const {movieDetails} = props
  const {
    title,
    adult,
    runtime,
    releaseDate,
    overview,
    posterPath,
  } = movieDetails

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60
  const date = new Date(releaseDate)
  const year = date.getFullYear()
  return (
    <div
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(24, 24, 24, 0.546875) 38.26%, #181818 92.82%, #181818 98.68%, #181818 108.61%),url(${posterPath})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '405px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="movie-details-card">
        <div className="movie-info-content-container">
          <h1 className="movie-poster-title">{title}</h1>
          <div className="runtime-container0">
            <p className="movie-info-hrs-min">{`${hours}h ${minutes}m `}</p>
            <p className="movie-info-a-ua">{adult ? 'A' : 'U/A'}</p>
            <p className="movie-info-year">{year}</p>
          </div>
          <p className="movie-details-description">{overview}</p>
          <a
            className="a"
            href={`https://www.youtube.com/results?search_query=${title}`}
          >
            <button className="home-poster-play-btn" type="button">
              Play
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
