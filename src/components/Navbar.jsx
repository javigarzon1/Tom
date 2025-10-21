import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F0F0F]/90 backdrop-blur-sm border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-semibold text-red-500 hover:text-red-400 transition-colors"
        >
          🍅 Tomatoes
        </Link>
        <div className="flex items-center gap-4">
          <SearchBar />
          <Link
            to="/"
            className="text-base hover:text-red-400 transition-colors"
          >
            Inicio
          </Link>
          <Link
            to="/favorites"
            className="text-base hover:text-red-400 transition-colors"
          >
            Favoritos
          </Link>
        </div>
      </div>
    </nav>
  );
}
