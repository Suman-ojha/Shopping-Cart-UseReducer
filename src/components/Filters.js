import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";

const Filters = () => {
    const [rate,setRate]=useState(4)
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          label="Out of Stock"
          name="group1"
          type="radio"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          label="Fast Delivery Only"
          name="group1"
          type="radio"
          id={`inline-4`}
        />
      </span>
      <span>
            <lable style={{paddingRight:10}}>Rating : </lable>
            <Rating rating={rate} onClick={(i)=>setRate(i+1)} style={{cursor:'pointer', marginRight:'9px'}}/>
        </span>
      <Button variant="light">Clear Filter</Button>
    </div>
  );
};

export default Filters;
