import React from 'react';
import BotCard from './BotCard';


function YourBotArmy({ bots, onRelease }) {
  const handleRelease = (bot) => {
    onRelease(bot);
  };

  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {bots.length === 0 ? <p>No enlisted bots yet.</p> : (
        bots.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onDischarge={handleRelease}
          />
        ))
      )}
    </div>
  );
}

export default YourBotArmy;
