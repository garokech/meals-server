import React from 'react';
import "./styles.css";
import RecipeCard from "../RecipeCard";

function RecipeContainer({recipes}) {
  // return (
  //   <div className='recipe-container'>
  //       {recipes.map((recipes) => (
  //           <RecipeCard {...recipes}/>
  //       ))}
  //   </div>
  // );
  return (
    <div>
      <RecipeCard {...recipes} />
    </div>
  )
}

export default RecipeContainer;