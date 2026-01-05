import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import useTitle from "../components/useTitle";

const Indie = () => {
  useTitle("GameHub | Indie Spotlight");

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const indieGames = data.filter(
          (game) => game.category.toLowerCase() === "indie"
        );
        setGames(indieGames);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <span className="loading loading-ring loading-lg text-yellow-400"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="text-yellow-400">Indie</span> Spotlight
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Discover hand-crafted indie games from passionate developers around
          the world. Support creativity and unique gameplay experiences.
        </p>
      </div>

      {/* Empty State */}
      {games.length === 0 ? (
        <p className="text-center text-slate-400">
          No indie games found.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Indie;
