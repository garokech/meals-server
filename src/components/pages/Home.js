import React from 'react'
import Jumbo from '../Jumbo'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios
    .get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(({ data }) => setRecipes(data.recipes))
    .catch((error) => console.log(error))
  }, []);
  return (
    <div>
      <Jumbo />
    </div>
  )
}

export default Home