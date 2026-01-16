import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import useFetch from "./Hooks/useFetch";
import useDebounce from "./Hooks/useDebounce";
// Layouts
import RootLayout from './Layouts/RootLayout'
// Pages
import Home from './Pages/Home'
import Favourites from './Pages/Favourites'
import NotFound from "./Pages/NotFound"
import Details from "./Pages/Details"


function App() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const loadedMovies = "Stay";

  const url = debouncedQuery
    ? `https://www.omdbapi.com/?s=${debouncedQuery}&apikey=49b599dd`
    : `https://www.omdbapi.com/?s=${loadedMovies}&apikey=49b599dd`;

  const { data, loading, error } = useFetch(url);

  const [favourites, setFavourites] = useState(() => {
     const saved = localStorage.getItem("movie-app-favourites");
     const initialValue = JSON.parse(saved);
     return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("movie-app-favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourites = (movie) => {
    alert("You've added a movie to Favourites!");
    if(!favourites.some((fav) => fav.imdbID === movie.imdbID)) {
      const newFavouritesList = [...favourites, movie];
      setFavourites(newFavouritesList);
    } else {
      alert("This movie is already in your favourites!");
    }
  }

  const removeFavourites = (movie) => {
    const newFavouritesList = favourites.filter(
      (fav) => fav.imdbID !== movie.imdbID
    );
    setFavourites(newFavouritesList);
  };

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<RootLayout />} >
          <Route index element={<Home 
            query={query} 
            setQuery={setQuery}
            data={data}
            loading={loading}
            error={error}
          />} />
          <Route path="favourites" element={<Favourites 
            favourites={favourites} 
            onRemove={removeFavourites} />} 
          />
          <Route path="pages/:id" element={<Details onAdd={addFavourites} />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
