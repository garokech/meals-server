import React from 'react'
import './styles.css'
import {InputGroup, Form, Button} from 'react-bootstrap'

function Jumbo() {
  return (
    <div className="jumbo">
        <div className="search-bar">
            <InputGroup className="mb-3">
            <Form.Control
            placeholder="Search a recipe!"
            aria-label="Search for recipe"
            aria-describedby="search-button"
            />
            <Button variant="danger" id="search-button">
            Button
            </Button>
        </InputGroup>
      </div>
    </div>
  )
}

export default Jumbo;