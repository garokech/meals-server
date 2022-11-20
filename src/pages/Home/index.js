import {useEffect, useState} from 'react';
import MyJumbotron from '../../components/Jumbotron';
import axios from 'axios';
import RecipeContainer from '../../components/RecipeContainer';
import React, { Component }  from 'react';


function Home() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() =>{
        axios
          .get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch')
          .then(({data}) => setRecipes(data.recipes))
          .catch((error) => console.log(error));
      },[]);
  return (
    <div>
        <MyJumbotron /> 
        <RecipeContainer recipes={recipes}/>
    </div>
  )
}

export default Home;