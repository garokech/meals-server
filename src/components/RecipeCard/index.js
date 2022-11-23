import React from 'react';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap"

function RecipeCard({strMeal, strMealThumb}) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
            {}
          </Card.Text>
          <Button variant="primary">See More</Button>
        </Card.Body>
      </Card>
    );
  }

export default RecipeCard