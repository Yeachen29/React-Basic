import { useState } from "react"
import RecipeTemplate from "./rec-tem";
import RecipeDes from "./recipe-des";

export default function Header(){
   

   const [ingredientListItem, setIngredient] = useState([]);

   const fromSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget)
      const newIngredent = formData.get("ingredient")
      setIngredient(e => [...e, newIngredent])
      e.target.reset();
   }

   const [hideRecipe, showRecipe] = useState(false);
   const shownRecipe = () => {
      showRecipe(prev => !prev);
   }

   return (
      <>
         <RecipeTemplate 
         fromSubmit={fromSubmit}
         ingredientListItem={ingredientListItem}
         shownRecipe={shownRecipe}
         hideRecipe={hideRecipe}
         />
         <div className="recipeDes">
            {
               hideRecipe ? 
               <RecipeDes 
               ingredientList = {ingredientListItem}
               /> : 
               null
            }
         </div>
         
         
      </>
   )
}