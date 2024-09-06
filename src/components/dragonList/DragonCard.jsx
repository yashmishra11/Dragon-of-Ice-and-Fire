const DragonCard = ({ dragon }) => {
    return (
      <div className="dragon-card">
        <img src={dragon.image} alt={dragon.name} />
        <h2>{dragon.name}</h2>
      </div>
    );
  };
  
  export default DragonCard;
  