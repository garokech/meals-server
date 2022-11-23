import {useEffect, useState} from 'react';
import MyJumbotron from '../../components/Jumbotron';
import axios from 'axios';
import RecipeContainer from '../../components/RecipeContainer';
import React, { Component, useContext }  from 'react';
import { MyContext } from '../../context';


function Home() {
  const {recipes, setRecipes} = useContext(MyContext)
  // const options = {
  //   method: 'GET',
  //   url: 'https://tasty.p.rapidapi.com/recipes/list',
  //   params: {from: '0', size: '20', tags: 'under_30_minutes'},
  //   headers: {
  //     'X-RapidAPI-Key': '8011bc24cbmsh08030d7c1668810p16f438jsnf13c3e32a931',
  //     'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  //   }
  // };
  // useEffect(() =>{
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // })});
  

    useEffect(() =>{
        axios
          .get('https://www.themealdb.com/api/json/v1/1/filter.php?a=indian')
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