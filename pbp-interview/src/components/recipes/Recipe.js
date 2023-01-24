import { useRef } from "react";
import styled from "styled-components";

const RecipeBox = styled.div`
  

`;

const Label = styled.div`
color: ${props => props.color};
font-size: 16px;
`
/**
 * Recipe component view
 * @param {*} recipe - the recipe string
 * @returns 
 */
function Recipe({ recipe }) {
  const selected = useRef(false);

  return (
    <RecipeBox data-testid="RecipeBox" onClick={() => selected.current = !selected.current}>
      <Label data-testid="RecipeLabel" color={selected.current === true ? 'purple' : '#fff'}>{recipe}</Label>
    </RecipeBox>
  )
}

export default Recipe;