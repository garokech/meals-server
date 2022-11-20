import {useEffect, useState} from 'react';
import MyJumbotron from '../../components/Jumbotron';
import axios from 'axios';
import RecipeContainer from '../../components/RecipeContainer';
import React, { Component, useContext }  from 'react';
import { MyContext } from '../../context';


function Home() {
  const {recipes, setRecipes} = useContext(MyContext)
    useEffect(() =>{
        axios
          .get('https://tasty.p.rapidapi.com/recipes/auto-complete')
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