import React from 'react';
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";

function RecipeCard({strMeal,strMealThumb}) {
  // return (
  //   <Card style={{ width: '18rem' }}>
  //       <Card.Img variant="top" src="holder.js/100px180" />
  //           <Card.Body>
  //               <Card.Title>{strMeal}</Card.Title>
  //               <Button variant="primary">Yummy</Button>
  //           </Card.Body>
  //   </Card>
  // );
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;