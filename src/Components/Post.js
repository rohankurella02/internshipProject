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
import Home from './Home'
import Logo from './Logo';
import People from './People';
import Watch from './Watch';
import Login from './Login';
import {FcFeedback,FcPlus} from 'react-icons/fc';
import {BsPeople,BsFillMoonFill,BsFillFileEarmarkPostFill} from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';


function Post() {
  let { userObj } = useSelector(
    (state) => state.user
  );
    const navigate=useNavigate();
    const [show, setShow] = useState(false);
    const { register, handleSubmit, formState:{errors} } = useForm();
    let [postData,postupdateData]=useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onFormSubmit = (Data) =>{
      Data.Name=userObj.Name
       Data.likes=0
        postupdateData([...postData,Data]);
            console.log(Data)
            // create FormData object
            let formData=new FormData();
            formData.append("userObj",JSON.stringify(Data));
            formData.append("photo",img);
            let token=localStorage.getItems("token");
            axios.post("http://localhost:4000/post-api/create-post",  {headers:{Authorization:"Bearer"+token}},formData)
            .then((response)=>{
                alert((response.data.message));
            })
            .catch((error)=>{
                console.log(error)
                alert("Something went wrong in creating user")
            })
    }
    let [img,setImg]=useState(null);
    const onImageSelect =(event) =>{
        setImg(event.target.files[0]);
        console.log(event);
    }
  return (
    <div >
    <Button onClick={handleShow}
 variant="light" className='d-block mx-auto mt-3 shadow-lg postbtn Nameicons fw-bold rounded-pill'><span className='display-6 pe-4 me-4'><FcPlus/></span>Make A Post<span><BsFillFileEarmarkPostFill/></span></Button> 

 <Modal show={show} onHide={handleClose}>
 <Modal.Header closeButton>
   <Modal.Title>Post</Modal.Title>
 </Modal.Header>
 <Modal.Body>
   <Form onSubmit={handleSubmit(onFormSubmit)}>
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Label>Title</Form.Label>
       <Form.Control
         type="text"
         placeholder="Eg: #AtBeach"
         autoFocus
         {...register("Title",{required: true})}
       />
       {errors.Title?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
     </Form.Group>
     <Form.Group controlId="formFile" className="mb-3">
     <Form.Label>Choose File(Photo/Video)</Form.Label>
     <Form.Control type="file" {...register("photo",{required: true})}
     onChange={(event)=> onImageSelect(event)}
     />
     {errors.Photo?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
   </Form.Group>
     <Form.Group
       className="mb-3"
       controlId="exampleForm.ControlTextarea1"
     >
       <Form.Label>Description</Form.Label>
       <Form.Control as="textarea" rows={3} placeholder="What's on your mind" {...register("Description",{required: true})}/>
     </Form.Group>
    
 <Modal.Footer>
   <Button variant="secondary" onClick={handleClose}>
     Close
   </Button>
   <Button variant="primary" type="submit" onClick={handleClose}>
     Save 
   </Button>
 </Modal.Footer>
 </Form>
 </Modal.Body>
</Modal>
    </div>
  );
}

export default Post;
