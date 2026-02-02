import React from "react";
import "./recipe.css";

const Recipe = ({ recipe, onClick }) => {
  return (
    <div className="recipe" onClick={onClick}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <div className="recipe-content">
        <h2>{recipe.strMeal}</h2>
        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
};

export default Recipe;
