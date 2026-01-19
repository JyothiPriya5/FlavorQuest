import React from "react";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";

function Recipes({
  recipes,
  onSearch,
  error,
  loading,
  onSelect,
  onAddFavorite,
}) {
  return (
    <div id="recipes" className="page-content">
      <SearchBar onSearch={onSearch} />
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}
      <div className="recipes">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onSelect={onSelect}
            onAddFavorite={onAddFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
