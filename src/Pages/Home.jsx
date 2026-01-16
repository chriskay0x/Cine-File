import Search from "../Components/Search";
import MovieCard from "../Components/MovieCard";
import { Link } from 'react-router-dom'

function Home ({ query, setQuery, data, loading, error }) {
  return (
    <div className="pb-10"> {/* Added bottom padding for scroll space */}
      <Search query={query} setQuery={setQuery} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* RESPONSIVE GRID SETUP:
        1. 'grid-cols-2': Starts with 2 columns on mobile.
        2. 'sm:grid-cols-3' -> 'xl:grid-cols-6': Scales up columns on larger screens.
        3. 'gap-6': Adds uniform margin/gutter between all cards.
        4. 'max-w-[1400px]': Prevents the grid from becoming too wide on huge screens.
      */}
      <div className="grid grid-cols-2 m-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 w-[90%] max-w-350 mx-auto mt-6">
        
        {data?.Search?.map((movie) => (
          <Link 
            to={`/pages/${movie.imdbID}`} 
            key={movie.imdbID}
            // 'w-full' ensures the link (and the card inside) stretches to fill the grid cell exactly
            // 'block' ensures it behaves like a container div
            className="w-full block hover:scale-105 transition-transform duration-200"
          >
            <MovieCard movie={movie} />
          </Link>
        ))}
        
      </div>
    </div>
  );
}

export default Home;