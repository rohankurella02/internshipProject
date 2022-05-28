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






function CardTwo(props) {
 
  return (
    <div style={{ width: '18rem' }} >
    <Card className='mt-3'>
    <Card.Title className="text-center googleFont">{props.item.name}</Card.Title>
  <Card.Body>
  <video autoplay muted loop> <source src="https://www.youtube.com/watch?v=xSsdnC896pU" type='video/mp4' /> </video>
  </Card.Body>
</Card>


    </div>
  );
}

export default CardTwo;
