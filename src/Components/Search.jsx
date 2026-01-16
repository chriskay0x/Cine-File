
function Search ({ query, setQuery }) {

    return (
        <input
        type="text"
        placeholder="Search for movies (e.g. Stranger Things)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search"
      />
    )
}

export default Search