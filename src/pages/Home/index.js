import {useEffect, useState} from 'react';
import Jumbo from '../../Components/Jumbo';
import axios from 'axios';
import RecipeContainer from '../../Components/RecipeContainer';
import React, { Component, useContext }  from 'react';
import { MyContext } from '../../context';


function Home() {
  const {meals, setMeals} = useContext(MyContext)
  useEffect(() =>{
        axios
          .get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
          .then(({data}) => setMeals(data.meals))
          .catch((error) => console.log(error));
      },[]);
  return (
    <div>
        <Jumbo /> 
        <RecipeContainer meals={meals}/>
    </div>
  )
}

export default Home;