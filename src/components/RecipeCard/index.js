import React from 'react';
import {Card, Button} from "react-bootstrap";
import RecipeModal from '../RecipeModal';

function RecipeCard({strRecipe, strMealThumb}) {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="strMealThumb" />
            <Card.Body>
                <Card.Title>{strRecipe}</Card.Title>
                <RecipeModal {...strMeal}/>
                {/* <Button variant="primary">Yummy</Button> */}
            </Card.Body>
    </Card>
  );
  }

export default RecipeModal;