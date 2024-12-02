import { useState } from "react"

export default function Header(){
   
   const [ingredientListItem, setIngredient] = useState([]);

   const ingredientList = ingredientListItem.map(item => (
      <li key={item}>{item[0].toUpperCase()+item.slice(1)}</li>
   ))

   const fromSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget)
      const newIngredent = formData.get("ingredient")
      setIngredient(e => [...e, newIngredent])
   }

   return (
      <>
         <main className="main">
            <div className="contain">
               <form 
               onSubmit={fromSubmit}
               className="flex flex-w f-gap-10 flex-ac flex-jc"
               >
                  <input 
                     type="text"
                     aria-label="Add Ingredient"
                     placeholder="e.g. oregneo" 
                     name="ingredient"
                  />
                  <input 
                     type="submit" 
                     value="+ Add Ingredient"
                  />
               </form>

            </div>
         </main>

         <div className="ingredientList">
            <div className="contain">
               <ul>
                 {ingredientList}
               </ul>
            </div>
         </div>
      </>
   )
}