import styled from "styled-components";
import Recipe from "./Recipe";

const RecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  border-right: solid 1px #fff;
  padding: 40px;
  min-width: 200px;
  max-height: 600px;
`;

const Label = styled.div`
  font-size: 40px;
  font-weight: bold;

`
/**
 * Display the lists of recipes given by recipes.json
 * @param {*} recipes - list of recipe objects
 * @param {*} selector - callback for when a recipe is selected
 * @returns - the recipe list component
 */
function RecipeList( {recipes, selector} ) {
  return(
    <RecipesContainer>
      <Label>Recipe List</Label>
      {recipes.map((recipe, index) => {
        return(
            
            <div key={index.toString()} onClick={() => selector(JSON.stringify(recipe))}>
              <Recipe recipe={recipe.name} />
            </div>
        );
      })}
    </RecipesContainer>
  );
}

export default RecipeList;