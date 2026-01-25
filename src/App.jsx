import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
import RecipeModal from "./RecipeModal";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    setRecipes(data.meals || []);
  };

  const getSearch = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1 className="title">🍽️ Delicious Recipes</h1>

      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search recipe..."
        />
        <button className="search-button">Search</button>
      </form>

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.idMeal}
            recipe={recipe}
            onClick={() => setSelectedRecipe(recipe)}
          />
        ))}
      </div>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
};

export default App;
