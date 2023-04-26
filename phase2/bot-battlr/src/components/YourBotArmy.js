import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BotCollection = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3000/bots');
      setBots(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <div className="bot-card__image-container">
            <img src={bot.image_url} alt={bot.name} />
          </div>
          <div className="bot-card__details">
            <h2>{bot.name}</h2>
            <p>Weapon: {bot.weapon}</p>
            <p>Special Ability: {bot.special_ability}</p>
            <button
              onClick={() => enlistBot(bot)}
              disabled={bot.enlisted}
            >
              {bot.enlisted ? 'Enlisted' : 'Enlist'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
