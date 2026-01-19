import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Components/Home";
import Recipes from "./Components/Recipes";
import Favorites from "./Components/Favorites";
import ContactUs from "./Components/ContactUs"; // Updated import
import RecipeDetails from "./Components/RecipeDetails";
import "./styles.css";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.spoonacular.com/recipes/complexSearch";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // State for navigation
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const searchRecipes = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${API_URL}?query=${query}&apiKey=${API_KEY}&number=10`,
      );
      setRecipes(response.data.results);
    } catch (err) {
      setError("Failed to fetch recipes. Try again.");
    }
    setLoading(false);
  };

  const addToFavorites = (recipe) => {
    if (!favorites.find((fav) => fav.id === recipe.id)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  // Render content based on current page
  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "recipes":
        return (
          <Recipes
            recipes={recipes}
            onSearch={searchRecipes}
            error={error}
            loading={loading}
            onSelect={setSelectedRecipe}
            onAddFavorite={addToFavorites}
          />
        );
      case "favorites":
        return (
          <Favorites
            favorites={favorites}
            onRemove={removeFromFavorites}
            onSelect={setSelectedRecipe}
          />
        );
      case "contact":
        return <ContactUs />; // Updated to use ContactUs
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <h1>FlavorQuest</h1>
      <nav className="navbar">
        <a
          href="#home"
          className="nav-link"
          onClick={() => setCurrentPage("home")}
        >
          <i className="fas fa-home"></i> Home
        </a>
        <a
          href="#recipes"
          className="nav-link"
          onClick={() => setCurrentPage("recipes")}
        >
          <i className="fas fa-utensils"></i> Recipes
        </a>
        <a
          href="#favorites"
          className="nav-link"
          onClick={() => setCurrentPage("favorites")}
        >
          <i className="fas fa-heart"></i> Favorites
        </a>
        <a
          href="#contact"
          className="nav-link"
          onClick={() => setCurrentPage("contact")}
        >
          <i className="fas fa-envelope"></i> Contact Us
        </a>
      </nav>
      {renderContent()}
      {selectedRecipe && (
        <div className="modal">
          <RecipeDetails
            recipe={selectedRecipe}
            onClose={() => setSelectedRecipe(null)}
          />
        </div>
      )}
    </div>
  );
}

export default App;
