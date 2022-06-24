import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE, KEY } from "./config.js";
// import { getJSON, sendJSON } from './helpers.js';
import { AJAX } from "./helpers.js";

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message}(${res.status})`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
      // ...(recipe.key && { key: recipe.key }),
    };
    console.log(state.recipe);
  } catch (error) {
    alert("error");
  }
};

// export const loadRecipe = async function (id) {
//   try {
//     const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
//     state.recipe = createRecipeObject(data);

//     if (state.bookmarks.some((bookmark) => bookmark.id === id))
//       state.recipe.bookmarked = true;
//     else state.recipe.bookmarked = false;

//     console.log(state.recipe);
//   } catch (err) {
//     // Temp error handling
//     console.error(`${err} 💥💥💥💥`);
//     throw err;
//   }
// };
