

function Favourites({ favourites, onRemove }) {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">My Favourites</h2>

      {favourites.length === 0 ? (
        <p className="text-gray-400 text-center">You haven't added any movies yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-[90%] mx-auto">
          
          {favourites.map((movie) => (
            <div key={movie.imdbID} className="relative group">
              
              {/* THE MOVIE CARD */}
              <div className="card flex flex-col items-center text-center p-[.6rem] bg-gray-800 rounded-md">
                <img 
                  src={movie.Poster} 
                  alt={movie.Title} 
                  className="w-full h-auto object-cover rounded-md mb-2" 
                />
                <h3 className="mt-2 font-bold leading-tight">{movie.Title}</h3>
                <p className="text-sm text-gray-500">{movie.Year}</p>
              </div>

              {/* THE RED X BUTTON */}
              {/* absolute positioning puts it on top of the image */}
              <button
                onClick={() => onRemove(movie)}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white 
                font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-lg 
                transition duration-200 cursor-pointer"
                title="Remove from Favourites"
              >
                X
              </button>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Favourites
