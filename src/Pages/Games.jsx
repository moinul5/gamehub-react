import React, { useEffect, useState } from 'react'
import GameCard from '../components/GameCard';
import useTitle from '../components/useTitle';


function Games() {
  useTitle("GameHub | Games");
    const [games, setGames] = useState([])
      useEffect(() => {
        fetch("/games.json")
          .then((res) => res.json())
          .then((data) => {
            setGames(data);
          });
      }, []);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3  max-w-7xl mx-5 sm:mx-auto mt-10'>
       {games.map((game) => {
  return <GameCard key={game.id} game={game} />;
})}
    </div>
  )
}

export default Games