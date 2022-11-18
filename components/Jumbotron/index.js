import React from "react";
import { FormControl } from "react-bootstrap";
import './styles.css'
import { InputGroup, FormControl, Button } from "react-bootstrap"; 

function myJumbotron() {
    return {
        <>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
        </>
    };
}

export default myJumbotron;