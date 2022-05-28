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
import { Routes,Route } from 'react-router-dom';
import CardOne from './CardOne';
import {AiFillHome,AiFillSetting} from 'react-icons/ai';
import {BsPeople,BsFillMoonFill} from 'react-icons/bs';
import {MdOutlineLiveTv,MdOutlineAccountCircle,MdOutlineArrowDropDownCircle} from 'react-icons/md';
import {TiGroup} from 'react-icons/ti';
import {SiFacebookgaming} from 'react-icons/si';
import {BiHelpCircle} from 'react-icons/bi';
import {FcFeedback} from 'react-icons/fc';
import {IoLogOutSharp} from 'react-icons/io5';
import NavBar from './NavBar';






function People() {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const urlLink='People'
    let arr=[
        {
            img:"https://www.befunky.com/images/prismic/2aa87dc8-3720-4385-9cc2-b8f9be5aac1d_landing-photo-to-art-img-4-before.png?auto=webp&format=jpg&width=863",
            name:"Murthy",
        },
        {
            img:"https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg",
            name:"Lokam Dhanush",
        },
        {
            img:"https://www.designer.io/wp-content/uploads/2019/10/1-1024x698.png",
            name:"Uday Kiran",
        },
        {
            img:"https://media.wired.com/photos/5fb70f2ce7b75db783b7012c/2:1/w_2399,h_1199,c_limit/Gear-Photos-597589287.jpg",
            name:"Rohan",
        },
        {
            img:"https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg",
            name:"Satya",
        }
    ]

  return (
    <div>
    <div>
    <NavBar item={urlLink}/>
    </div>
    <h1 className='googleFont text-light border animate__flash animate__animated fr text-center fw-bold mt-3'>FRIEND REQUESTS</h1>
    <div className='container-fluid card-group parentOfCard1 mt-3 ' >
    {
    arr.map((item) =>
        <CardOne item={item}/>
    )
    
    }
    {
        arr.map((item) =>
        <CardOne item={item}/>
    )
    }
    {
        arr.map((item) =>
        <CardOne item={item}/>
    )
    }{
    <CardOne item={arr[0]}/>
    }
    </div>
    </div>
  );
}

export default People;
