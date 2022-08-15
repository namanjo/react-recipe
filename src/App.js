import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {

    const getRecipies = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      )
      const data = await response.json();
      setRecipes(data.meals)
      console.log(data.meals)
    }


    getRecipies();
  }, [query])


// const getRecipies = async () => {
//   const response = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
//   )
//   const data = await response.json();
//   setRecipes(data.meals)
//   console.log(data.meals)
// }


const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}


  return (
    <div className="app">
      <h1>Recipe finder app</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <button className="search-button">
          Search
        </button>
      </form>

      {recipes && recipes.map((recipe) => (
        <Recipe key={recipe.idMeal} title = {recipe.strMeal} img={recipe.strMealThumb} crusine={recipe.strArea} />
      ))}
    </div>
  );
}

export default App;
