import React from 'react';
import './styles.css';

function MealsContainer({meals}) {
  return (
    <div>
        {meals.map((meal) => (
        <div>{meals.strMeal}</div>
        ))}
    </div>
  )
}

export default index