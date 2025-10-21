export default function Home() {
  const [filter, setFilter] = useState("all");
  const { favorites } = useFavorites();

  const list = useMemo(() => {
    if (filter === "favorites") return favorites;
    return mock;
  }, [filter, favorites]);

  return (
    <div className="space-y-8">
      <header className="flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-red-400">
          Descubrir películas
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2 rounded-xl text-sm font-medium ${
              filter === "all"
                ? "bg-red-600 text-white"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setFilter("favorites")}
            className={`px-5 py-2 rounded-xl text-sm font-medium ${
              filter === "favorites"
                ? "bg-red-600 text-white"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            Favoritos
          </button>
        </div>
      </header>

      <MovieGrid movies={list} />
    </div>
  );
}
