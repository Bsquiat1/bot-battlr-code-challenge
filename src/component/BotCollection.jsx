import React from 'react';
import BotCard from './BotCard';
;

function BotCollection({ bots, onEnlist, onDischarge }) {
  const handleEnlistment = (bot) => {
    onEnlist(bot);
  };

  const handleDischarge = (bot) => {
    onDischarge(bot);
  };

  return (
    <div className="bot-collection">
      <h2>Bots Available for Enlistment</h2>
      <div className="bot-list">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} onEnlist={handleEnlistment} onDischarge={handleDischarge} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
