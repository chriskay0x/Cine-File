
function MovieCard ({ movie }) {

    return (
        <div 
            key={movie.imdbID} 
            className="card w-50 cursor-pointer flex flex-col items-center text-center p-[.6rem]"
        >
            <img src={movie.Poster} alt={movie.Title} width="200" height="240" className="rounded-md" />
            <h3 className="mt-2 font-bold leading-tight">{movie.Title}</h3>
            <p className="text-sm text-gray-500">{movie.Year}</p>
        </div>
    )
}

export default MovieCard