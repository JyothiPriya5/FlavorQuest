import React from "react";

function Home() {
  return (
    <div id="home" className="page-content">
      <h2>Welcome to FlavorQuest!</h2>
      <p>
        Discover delicious recipes with our easy-to-use search tool. Explore
        ingredients, get cooking instructions, and save your favorites.
      </p>
      <div className="image-section">
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.3eehDwIFNFsHBtBhJADJuwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Recipes"
          className="hero-image"
        />
        <p className="image-description">
          Explore a variety of mouth-watering recipes from around the world.
        </p>
      </div>
      <div className="image-section">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.f5PXQ16uXUQDjyOoB6Q8qwHaE6?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Pasta Recipe"
          className="hero-image"
        />
        <p className="image-description">
          Try our delicious pasta dishes perfect for any occasion.
        </p>
      </div>
      <div className="image-section">
        <img
          src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?cs=srgb&dl=appetizer-cucumber-cuisine-1059905.jpg&fm=jpg"
          alt="Salad Recipe"
          className="hero-image"
        />
        <p className="image-description">
          Healthy and fresh salads to keep you energized.
        </p>
      </div>
      <div className="image-section">
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.kXsTv0ZsOLtDC-6D_SJxMgHaE5?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Dessert Recipe"
          className="hero-image"
        />
        <p className="image-description">
          Indulge in sweet desserts that satisfy your cravings.
        </p>
      </div>
      <p>
        Whether you're a beginner or a seasoned chef, FlavorQuest offers a wide
        variety of recipes from around the world. Search by ingredients, cuisine
        type, or dietary preferences. Join our community of food lovers and
        start cooking today!
      </p>
    </div>
  );
}

export default Home;
