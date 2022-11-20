import React from "react";
import "./styles.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function MyJumbotron() {
  return (
  <div className="my-jumbotron">
    <h1>Welcome</h1>
    <h2>Find the best recipes here!</h2>
    <div className="button-input">
       <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for a Recipe"
          aria-label="Recipe Searcher"
          aria-describedby="recipe-finder"
        />
        <Button variant="danger" id="recipe-finder">
          Get to Cooking!
        </Button>
      </InputGroup>
    </div>
  </div>
  );
  
}

export default MyJumbotron;