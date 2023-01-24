import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Recipe from "./Recipe"

test("recipe selection test default white", async () => {
  render(<Recipe recipe={"Test Recipe"}/>);

  const RecipeLabel = screen.getByTestId("RecipeLabel");
  expect(RecipeLabel).toHaveStyle('color: rgb(255, 255, 255)');

})