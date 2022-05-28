import 'animate.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Register from './Register';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import {Navbar,Nav,Container,NavDropdown,FormControl} from 'react-bootstrap'
import {AiFillHome,AiFillSetting} from 'react-icons/ai';
import {BsPeople,BsFillMoonFill,BsFillFileEarmarkPostFill} from 'react-icons/bs';
import {MdOutlineLiveTv,MdOutlineAccountCircle,MdOutlineArrowDropDownCircle} from 'react-icons/md';
import {TiGroup} from 'react-icons/ti';
import {SiFacebookgaming} from 'react-icons/si';
import {BiHelpCircle} from 'react-icons/bi';
import {FcFeedback,FcPlus} from 'react-icons/fc';
import {IoLogOutSharp} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Post from './Post';
import NavBar from './NavBar';
import DynamicPost from './DynamicPost';
import axios from 'axios';
import { useSelector } from 'react-redux';



function Home() {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const urlLink='home'
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );
//   let response=axios.get('http://localhost:4000/user-api/get-posts/userObj.Name',userObj)
//   .catch((error)=>{
//     console.log(error)
//     alert("Something went wrong in getting posts of user")
// });
// let PostArray=response.data.userobj
  return (
    <div className='home'>
    <div>
      <NavBar item={urlLink}/>
</div>
<h1 className='googleFont text-light border animate__flash animate__animated fr text-center fw-bold mt-3'>HOME</h1>
<Post/>
{/*{
  PostArray.map((item)=>
  <DynamicPost item={item}/>
  )
}*/}





    
    </div>
  );
}

export default Home;
