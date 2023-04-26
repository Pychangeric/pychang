import React from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  return (
    <div>
      <h1>Bot Battlr</h1>
      <h2>Bot Collection</h2>
      <BotCollection />
      <h2>Your Bot Army</h2>
      <YourBotArmy />
    </div>
  );
}

export default App;
