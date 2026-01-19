import React from "react";

function RecipeCard({ recipe, onSelect, onAddFavorite }) {
  return (
    <div className="recipe-card" onClick={() => onSelect(recipe)}>
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onAddFavorite(recipe);
        }}
      >
        Add to Favorites
      </button>
    </div>
  );
}

export default RecipeCard;
