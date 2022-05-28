import NavBar from './NavBar';
import PostCard from './PostCard';
import 'animate.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Register from './Register';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import {Navbar,Nav,Container,NavDropdown,FormControl,Card} from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import { Routes,Route } from 'react-router-dom';
import {AiFillHome,AiFillSetting,AiOutlineLike} from 'react-icons/ai';
import {BsPeople,BsFillMoonFill,BsFillFileEarmarkPostFill} from 'react-icons/bs';
import {MdOutlineLiveTv,MdOutlineAccountCircle,MdOutlineArrowDropDownCircle,MdMoreHoriz} from 'react-icons/md';
import {TiGroup} from 'react-icons/ti';
import {SiFacebookgaming} from 'react-icons/si';
import {BiHelpCircle,BiComment} from 'react-icons/bi';
import {FcFeedback,FcPlus} from 'react-icons/fc';
import {IoLogOutSharp} from 'react-icons/io5';
import { RiMessengerLine } from "react-icons/ri";
import { useSelector } from 'react-redux';


function DynamicPost(props) {
    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
        (state) => state.user
      );
    let inc=true
    const IncrementLike =async()=>{
        {/* 
        let token=localStorage.getItems("token");
         props.item.likes= props.item.likes+1
     axios.put("http://localhost:4000/post-api/post-update",
    {headers:{Authorization:"Bearer"+token}},
  props.item);*/}
       
    }
    
    return(
        <div style={{ width: '29rem' ,height:"45rem"}} className="PostCard d-block mx-auto">
        <Card className='mt-3'>
        <div>
        <Card.Img variant="top" src={userObj.profilePic} className="ProfilePic rounded-pill ms-3 mt-2 me-3 border border-3 border-primary"/>   
        <Card.Title className='d-inline'>{props.item.Name}</Card.Title>
        <Card.Title className='SubTime text-secondary'>23 May at 23:42<p className='MoreIcon'><MdMoreHoriz/></p></Card.Title>
        </div>
        <div className='p-2'>
        <Card.Title className='text-info'>{props.item.Title}</Card.Title>
        <Card.Text className='text-start info'>
        {props.item.Description}
      </Card.Text>
      </div>
      <Card.Img variant="top" src={props.item.postPic} style={{ width: '28.8rem', height: '27rem'}}/>
      <Card.Body>
        <div className='text-center border border-1 p-1'>
        <Button variant="light" onClick={IncrementLike} className='btnpost'>{props.item.likes}<AiOutlineLike/>Like</Button>
        <Button variant="light" className='btnpost' ><BiComment/>Comment</Button>
        <Button variant="light" className='btnpost' ><RiMessengerLine/>Send</Button>
        </div>
        <Form>
        <FormControl
          type="text"
          placeholder="Write a comment..."
          className=" mt-3 rounded-pill pe-3 me-4"
          aria-label="Search" />
      </Form>
      </Card.Body>
    </Card>
    
    
        </div>
  );
}

export default DynamicPost;
