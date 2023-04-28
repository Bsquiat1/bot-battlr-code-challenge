import React, { useState, useEffect } from 'react';
import BotCollection from './component/BotCollection';
import YourBotArmy from './component/YourBotArmy';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error(error));
  }, []);

  const enlistBot = (bot) => {
    if (!enlistedBots.some(b => b.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const releaseBot = (bot) => {
    setEnlistedBots(enlistedBots.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: 'DELETE' })
      .then(() => {
        setEnlistedBots(enlistedBots.filter(b => b.id !== bot.id));
        setBots(bots.filter(b => b.id !== bot.id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="App">
      <h1>Bot Army</h1>
      <BotCollection bots={bots} onEnlist={enlistBot} onDischarge={dischargeBot} />
      <YourBotArmy bots={enlistedBots} onRelease={releaseBot} />
    </div>
  );
}

export default App;
