import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites) {
    return (
        <div className="favorites">
            {favorites.length > 0 ? (
                <>
                    <h2>Your Favorites</h2>

                    <div className="movies-grid">
                        {favorites.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className="favorites-empty">
                    <h2>No Favorite Movies Yet</h2>
                    <p>
                        Start adding movies to your favorites and they will appear here.
                    </p>
                </div>
            )}
        </div>
    );
}
}

export default Favorites;