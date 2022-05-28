import 'animate.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Register from './Register';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import {Navbar,Nav,Container,NavDropdown,FormControl} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import { Route,Routes, useNavigate } from 'react-router-dom';
import Home from './Home';






function Logo() {
    const navigate=useNavigate();
    setTimeout(() => {
      navigate('/home')
      
    }, 4000);
  return (
    <div className='logo container-fluid text-center'>
      <img className='d-block mx-auto w-25 rounded-pill  ' src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png" />
      <h1 className='display-4 title1 '>FB</h1>
      <Button variant="primary" disabled>
    <Spinner 
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>
  <Routes>
  <Route path="home" element={<Home/>} />
  </Routes>

 </div>
  );
}

export default Logo;
