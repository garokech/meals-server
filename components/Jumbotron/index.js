import React from "react";
import './styles.css';
import { InputGroup, FormControl, Button } from "react-bootstrap"; 

function MyJumbotron() {
    return (
        <div className="my-jumbotron">
          <h1>Welcome</h1>
          <h2>You can search your favorite meals</h2>
          <div className="button-input">
        <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for a Meal"
          aria-label="Meal Search Input"
          aria-describedby="meal-search-button"
        />
        <Button variant="danger" id="button-addon2">
          Button
        </Button>
      </InputGroup>
        </div>
        </div>
    );
}

export default MyJumbotron;