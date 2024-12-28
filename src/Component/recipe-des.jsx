import React from "react";

export default function RecipeDes(prop) {
  const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${prop.ingredientList}`;
  const [recipes, setRecipes] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!prop.ingredientList) return; // Prevent fetch if no ingredients are provided

    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch recipes.");
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data.data?.recipes || []);
        setError(null); // Clear previous errors
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [prop.ingredientList]);

  const shown = recipes.map((item) => (
    <li key={item.id}>
      {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
    </li>
  ));

  return (
    <div className="generatorRecipe">
      <div className="contain">
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && (shown.length ? <>
      <h1>Recipes</h1>
      <ul>
         {shown}
      </ul>
      </> : 
      undefined)}
      </div>
    </div>
  );
}




      