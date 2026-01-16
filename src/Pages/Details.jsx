import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

function Details({ onAdd }) {
    const { id } = useParams();
    const url = `https://www.omdbapi.com/?i=${id}&apikey=49b599dd`;

    const { data, loading, error } = useFetch(url);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-4 text-center">
            <h1 className="text-2xl font-bold mb-8 text-white">Movie Details</h1>
            {data && (
                // 1. MAIN CONTAINER: Flex row on desktop, centered items
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
                    
                    {/* LEFT COLUMN: Image */}
                    <div className="shrink-0">
                        <img 
                            src={data.Poster} 
                            alt={data.Title} 
                            className="rounded-md shadow-lg w-75 h-auto object-cover" 
                        />
                    </div>
                    
                    {/* RIGHT COLUMN: Text Details */}
                    {/* Added 'text-left' here so text aligns correctly on the side */}
                    <div className="text-left md:w-1/2 flex flex-col gap-2 p-4 m-2">
                        <h2 className="text-3xl font-bold text-white mb-2">{data.Title}</h2>
                        <p className="text-gray-400 mb-4 text-lg">{data.Year} • {data.Rated} • {data.Runtime}</p>
                        
                        {/* FIX 1: Removed 'w-[60%] mx-auto'. Now it just fills the container. */}
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            {data.Plot}
                        </p>
                        
                        <div className="mb-2 text-gray-200">
                            <strong className="text-white">Genre:</strong> {data.Genre}
                        </div>
                        <div className="text-gray-200">
                            <strong className="text-white">Actors:</strong> {data.Actors}
                        </div>

                        {/* FIX 2: Fixed 'width' typo and reduced padding */}
                        <button
                            className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold 
                                       py-3 px-8 rounded mt-6 transition duration-300 cursor-pointer"
                            onClick={() => onAdd(data)}
                        >
                            Add to Favourites
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Details;