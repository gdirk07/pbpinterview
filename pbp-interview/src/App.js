import './App.css';
import recipesJson from './assets/files/recipes.json';
import { GetAllRecipes } from './utility/JSONReader';
import RecipeList from './components/recipes/RecipeList';
import { useState } from 'react';
import IngredientList from './components/ingredients/IngredientList';
//Display a list of recipes from the Json
//Display a table with ingredients
function App() {
  const [selectedRecipes, setSelectedRecipes] = useState(new Set());
  const recipes = GetAllRecipes(recipesJson);
  const selector = (recipe) => {
    //Deselect the recipe
    if (selectedRecipes.has(recipe)) {
      setSelectedRecipes(prev => new Set([...prev].filter(item => item !== recipe)));
    }
    //Select the recipe
    else {
      setSelectedRecipes(prev => new Set(prev.add(recipe)));
    }
  }
  let selectedIngredients = []
  //Push all selected receipe ingredients into array
  selectedRecipes.forEach(recipe => selectedIngredients.push(JSON.parse(recipe).ingredients))
  
  return (
    <div className="App-header">
    <div className="App">
      <RecipeList recipes={recipes} selector={selector} />
      <IngredientList ingredients={selectedIngredients} />
    </div>
    </div>
  );
}

export default App;
