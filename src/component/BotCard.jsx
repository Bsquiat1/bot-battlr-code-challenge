import React from 'react';
;

function BotCard({ bot, onEnlist, onDischarge, onDischargeForever }) {
  const handleEnlistment = () => {
    onEnlist(bot);
  };

  const handleDischarge = () => {
    onDischarge(bot);
  };

  const handleDischargeForever = () => {
    onDischargeForever(bot);
  };

  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      {onEnlist && <button onClick={handleEnlistment}>Enlist</button>}
      {onDischarge && <button onClick={handleDischarge}>Discharge</button>}
      {onDischargeForever && <button className="delete-button" onClick={handleDischargeForever}>x</button>}
    </div>
  );
}

export default BotCard;
