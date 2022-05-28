import logo from './logo.svg';
import './App.css';
import 'animate.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Register from './Components/Register';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import {Navbar,Nav,Container,NavDropdown,FormControl} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home'
import Logo from './Components/Logo';
import People from './Components/People';
import Watch from './Components/Watch';
import Login from './Components/Login';
import Post from './Components/Post';
import PostDisplay from './Components/PostDisplay';






function App() {
  return (
    <div >
    
      <Routes>
        <Route path="" element={<Login/>} />
        <Route path="Logo" element={<Logo/>} />
        <Route path="home" element={<Home/>} />
        <Route path="People" element={<People/>} />
        <Route path="Post" element={<Post/>} />
        <Route path="Register" element={<Register/>} />
        <Route path="Community" element={<PostDisplay/>} />
         {/* <Route path="Watch" element={<Watch/>} />
        <Route path="" element={} />
        <Route path="" element={} /> */}
      </Routes>

    </div>
  );
}

export default App;
