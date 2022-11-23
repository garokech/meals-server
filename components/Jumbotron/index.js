import React from "react";
import './styles.css';
import { InputGroup, FormControl, Button } from "react-bootstrap"; 

function MyJumbotron() {
    return (
        <div className="my-jumbotron">
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