import 'animate.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {FcCalendar} from "react-icons/fc";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    let [registerData,newRegisterData]=useState([]);
    let navigate=useNavigate();
    const { register, handleSubmit, formState:{errors} } = useForm();
    let [img,setImg]=useState(null);
    const onImageSelect =(event) =>{
        setImg(event.target.files[0]);
        console.log(event);
    }
    const onSubmit = data =>{ 
        newRegisterData([...registerData,data]);
        console.log(data)
        console.log(data.photo.length)
        let formData=new FormData();
        formData.append("userObj",JSON.stringify(data));
        formData.append("photo",img);
        let token=localStorage.getItems("token");
        axios.post("http://localhost:4000/user-api/post-user",{headers:{Authorization:"Bearer"+token}},formData)
        .then((response)=>{
            alert((response.data.message));
            if(response.data.message==="New user created"){
              navigate("")
            }
        })
        .catch((error)=>{
            console.log(error)
            alert("Something went wrong in creating user")
        })
      };
      const tranferToLogin = ()=>{
        navigate("/")
      }
  return (
    <div className='register'>
 <Form onSubmit={handleSubmit(onSubmit)} className='shadow-lg text-center border rounded border-2 border-dark  w-50 p-3 m-1 mt-3 mx-auto form1 bg-white'>
    <div className='text-start'>
    <h1 className='googleFont fw-bold'>Sign Up</h1>
    <p>It's quick and easy.</p>
    <hr></hr>
    </div>
    

    <Form.Group className="mb-3 " controlId="Name">
    <Form.Control type="text" placeholder="Name" {...register("Name",{required: true})} />
    {errors.Name?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>
  <Form.Group className="mb-3" controlId="Email">
    <Form.Control type="email" placeholder="Email Adress or Phone number" {...register("Email",{required: true})}/>
    {errors.Email?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>

  <Form.Group className="mb-3" controlId="Password">
    <Form.Control type="password" placeholder= "New Password" {...register("Password",{required: true})} />
    {errors.Password?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>

  <Form.Group className="mb-3" controlId="DOB">
  <Form.Label className='text-end'>Date of Birth<FcCalendar/></Form.Label>
    <Form.Control type="date" {...register("DOB",{required: true})} />
    {errors.DOB?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>
  <Form.Group controlId="formFile" className="mb-3">
  <Form.Label>Choose File(Profile Pic)</Form.Label>
  <Form.Control type="file" {...register("photo")}
  onChange={(event)=> onImageSelect(event)}
  />
</Form.Group>
  <Form.Label>Gender</Form.Label>
  <Form.Select aria-label="Gender" className='mb-3' {...register("Gender")}>
  <option disabled >Open this select menu</option>
  <option value="Male" >Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</Form.Select>
<p className='terms'>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.
     You may receive SMS notifications from us and can opt out at any time.</p>
    <Button variant="success" size="lg" className='w-100' type='submit' onClick={tranferToLogin}>
    Sign Up
  </Button>
</Form>
    </div>
  );
}

export default Register;
