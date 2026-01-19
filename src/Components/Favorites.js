import React from "react";

function Favorites({ favorites, onRemove, onSelect }) {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((fav) => (
          <div key={fav.id} className="favorite-item">
            <span onClick={() => onSelect(fav)}>{fav.title}</span>
            <button onClick={() => onRemove(fav.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Favorites;
