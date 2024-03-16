import React from 'react';

const Pokemon = ({ pokemon, language }) => {
  const { id, name = {}, type = [], base = {}, image } = pokemon;

  const displayName = name[language] || name.english;

  return (
    <div className="pokemon">
      <img className='pokemon-image' src={image} alt={displayName} />
      <p className='pokemon-name'>[{id}] {displayName}</p>
      <p className='type'>{type.join(', ')}</p>
      <div className="pokemon-stats">
        <div className="pokemon-stat">
          <div className="pokemon-stat-label">HP:</div>
          <div className="pokemon-stat-value">{base.HP}</div>
        </div>
        <div className="pokemon-stat">
          <div className="pokemon-stat-label">Attack:</div>
          <div className="pokemon-stat-value">{base.Attack}</div>
        </div>
        <div className="pokemon-stat">
          <div className="pokemon-stat-label">Defense:</div>
          <div className="pokemon-stat-value">{base.Defense}</div>
        </div>
        <div className="pokemon-stat">
          <div className="pokemon-stat-label">Sp. Attack:</div>
          <div className="pokemon-stat-value">{base['Sp. Attack']}</div>
        </div>
        <div className="pokemon-stat">
          <div className="pokemon-stat-label">Sp. Defense:</div>
          <div className="pokemon-stat-value">{base['Sp. Defense']}</div>
        </div>
        <div className="pokemon-stat">
          <div className="pokemon-stat-label">Speed:</div>
          <div className="pokemon-stat-value">{base.Speed}</div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
