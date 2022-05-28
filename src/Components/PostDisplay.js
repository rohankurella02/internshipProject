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
import PostCard from './PostCard';




function PostDisplay() {
    let DBdemo=[
        {   profilePic:"data:image/jpeg;base64,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",
            Name:"Yash",
            Title:"#pic1",
            Description:"I am Eating in hotel",
            photo:"https://www.helpguide.org/wp-content/uploads/young-woman-having-a-midnight-snack.jpg"
        },
        {
            profilePic:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80",
            Name:"Priya",
            Title:"#pic2",
            Description:"That kid is Enjoying in playground",
            photo:"https://img.mensxp.com/media/content/2020/Apr/Leading-B-Wood-Singers-Who-Lost-On-Reality-Shows1200_5ea7d3e1ba5f2.jpeg"
        },
        {
            profilePic:"https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg",
            Name:"Lady_Hacker",
            Title:"#pic3",
            Description:"I am Dance in home",
            photo:"https://media.istockphoto.com/photos/stylish-man-and-woman-dancing-hiphop-in-bright-clothes-on-gradient-picture-id1267332085?k=20&m=1267332085&s=612x612&w=0&h=dHxVH7u7NMU7usdpYZEPbYQlBGNSBphcAQLQjn4Xq4s="
        },
        {
            profilePic:"https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
            Name:"Rock",
            Title:"#pic4",
            Description:"I am doing Programming in collage",
            photo:"https://thumbs.dreamstime.com/b/modern-computer-programming-code-screen-showing-random-scripts-113805394.jpg"
        },
    ]
    const urlLink='Community';
    return(
    <div>

        <NavBar item={urlLink}/>
        <div className=''>
        {
            DBdemo.map((item)=>
                <PostCard item={item}/>
            )
        }
        </div>

    
    </div>
  );
}

export default PostDisplay;
