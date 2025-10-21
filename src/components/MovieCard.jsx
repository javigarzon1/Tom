export default function MovieCard({ movie }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="bg-[#181818] rounded-2xl overflow-hidden hover:scale-[1.03] hover:shadow-[0_0_15px_#E50914aa] transition-all duration-300">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-400">
          {movie.year} <span className="ml-2">⭐ {movie.rating}</span>
        </p>
        <button
          onClick={() => toggleFavorite(movie)}
          className={`text-sm ${
            isFavorite(movie)
              ? "text-red-500"
              : "text-gray-400 hover:text-red-400"
          }`}
        >
          {isFavorite(movie) ? "♥ Quitar" : "♡ Favorito"}
        </button>
      </div>
    </div>
  );
}
