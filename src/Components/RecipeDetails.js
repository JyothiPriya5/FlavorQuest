import React, { useState, useEffect } from "react";
import axios from "axios";

function RecipeDetails({ recipe, onClose }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
      );
      setDetails(response.data);
    };
    fetchDetails();
  }, [recipe.id]);

  if (!details) return <p>Loading details...</p>;

  return (
    <div className="recipe-details">
      <button onClick={onClose}>Close</button>
      <h2>{details.title}</h2>
      <img src={details.image} alt={details.title} />
      {/* <p>{details.summary}</p> */}
      <h3>Ingredients:</h3>
      <ul>
        {details.extendedIngredients.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p dangerouslySetInnerHTML={{ __html: details.instructions }} />
    </div>
  );
}

export default RecipeDetails;
