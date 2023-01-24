import styled from "styled-components";

const Container = styled.div`
  flex: 1 0 75%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 30px;
  width: 100%;
`
const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;

  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;

`
const HeaderLabel = styled.div`
  font-size: 40px;
  font-weight: bold;
  align-self: center;
`
const Item = styled.div`
  font-size: 16px;
  flex: 1 0 20%;
  height: 20px;
`

/**
 * Displays the list of ingredients
 * @param {*} ingredients - array of unsorted, 2 dimensional ingredients 
 * @returns 
 */
function IngredientList( {ingredients} ) {
  //flatten the 2D ingredients array, sort it, and remove duplicates
  //not the most effecient way to do this, should consider a datastructure
  //such as a hashtable
  return (
    <Container>
      <HeaderLabel>Ingredients</HeaderLabel>
      <IngredientsContainer>
        {ingredients && ingredients.length > 0 ? ingredients.flat().sort().filter(function(item, pos, ary) {
          return !pos || item !== ary[pos - 1];
        })
        .map((ingredient, i) => 
          <Item key={i}>{ingredient}</Item>) 
        : <>Please select a Recipe to view ingredients</>}
      </IngredientsContainer>
    </Container>
  );
}

export default IngredientList;