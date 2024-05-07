import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id} style={{ border: '5px solid grey', marginBottom: '10px', borderRadius:'10px', backgroundColor:'black' }}>
          <div>
            <img style={{ width: '150px', height: '150px' }} src={movie.image} alt={movie.title} />
            <div>
              <h2>{movie.title}</h2>
              <h5>{movie.subtitle}</h5>
              <p>{movie.description}</p>
              <p style={{color:'red'}}>Rating: {movie.rating}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList;
