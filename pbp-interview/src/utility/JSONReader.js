/**
 * Utility methods for handling JSON object
 */

/**
 * Parses the json file for recipes
 * @param {*} jsonData - Local json file
 * @returns 
 */
export const GetAllRecipes = (jsonData) => {
  return JSON.parse(JSON.stringify(jsonData));
}