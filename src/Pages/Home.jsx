import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import GameCard from "../components/GameCard";
import Newsletter from "../components/Newsletter";

function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setLoading(false);
      });
  }, []);

  const popularGames = [...games]
    .sort((a, b) => b.ratings - a.ratings)
    .slice(0, 3);
  return (
    <div>
      <Banner></Banner>
      <h1 className="max-w-7xl mx-auto text-center mt-5 text-5xl font-bold underline decoration-yellow-400">
        Popular Games
      </h1>
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        {popularGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <Newsletter></Newsletter>
    </div>
  );
}

export default Home;
