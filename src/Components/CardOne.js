import 'animate.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Register from './Register';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import {Navbar,Nav,Container,NavDropdown,FormControl,Card} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import { Routes,Route } from 'react-router-dom';






function CardOne(props) {
 
  return (
    <div style={{ width: '18rem' }} className="parentOfCard1">
    <Card className='mt-3'>
  <Card.Img variant="top" src={props.item.img} style={{ width: '280px', height: '230px'}}/>
  <Card.Body>
    <Card.Title className="text-center">{props.item.name}</Card.Title>
    <Button variant="primary" className='d-block w-100 m-2'>Confirm</Button>
    <Button variant="secondary" className='d-block w-100 m-2'>Delete</Button>
  </Card.Body>
</Card>


    </div>
  );
}

export default CardOne;
