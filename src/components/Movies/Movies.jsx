import MovieList from "../../Pages/MoviesList/MoviesList";

const Movies = () => {
    const movieData = [
        {
          id: 1,
          title: 'Inception',
          subtitle: 'Your mind is the scene of the crime',
          description: 'A thief who enters the dreams of others to steal secrets from their subconscious.',
          image: 'https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg',
          rating: 4.7
        },
        {
          id: 2,
          title: 'The Shawshank Redemption',
          subtitle: 'Fear can hold you prisoner. Hope can set you free.',
          description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
          image: 'https://m.media-amazon.com/images/S/pv-target-images/d26b48f88d5398cad86d2fd26d32b258d43e51d4e2f949c3848be69a1e147446.jpg',
          rating: 4.9
        },
        {
          id: 3,
          title: 'The Godfather',
          subtitle: 'An offer you can\'t refuse.',
          description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
          image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
          rating: 4.8
        },


      ];
    
      return (
        <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
          <h1>Movie List</h1>
          <MovieList movies={movieData} />
        </div>
      );
}

export default Movies;