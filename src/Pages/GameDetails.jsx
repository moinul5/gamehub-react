import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import GameDetailsPage from "../components/GameDetailsPage";
import useTitle from "../components/useTitle";

function GameDetails() {
  const { id } = useParams();

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);


  const game = games.find(
    (game) => Number(game.id) === Number(id)
  );

  useTitle(
    game ? `GameHub | ${game.title}` : "GameHub | Game Details"
  );

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <span className="loading loading-ring loading-lg text-yellow-400"></span>
      </div>
    );
  }

  if (!game) {
    return <NotFound />;
  }

  return <GameDetailsPage game={game} />;
}

export default GameDetails;
