import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import GameDetailsPage from "../components/GameDetailsPage";

function GameDetails() {
  const { id } = useParams();
  
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  const game = games.find(
  (game) => Number(game.id) === Number(id)
);


if (!game) {
  return <NotFound />;
}

// return <GameDetail game={game} />;
return <GameDetailsPage game ={game}></GameDetailsPage>

}

export default GameDetails;
