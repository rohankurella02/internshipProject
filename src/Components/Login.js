import 'animate.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Register from './Register';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../slices/userSlice';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

function Login() {
  let [logInData,newlogInData]=useState([]);
  let navigate=useNavigate();
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );
  let dispatch = useDispatch();
  const { register, handleSubmit, formState:{errors} } = useForm();
  const onSubmit = data =>{ 
      newlogInData([...logInData,data]);
      console.log(data)
      dispatch(userLogin(data));

    };
    useEffect(() => {
      if (isSuccess) {
        navigate("/Logo");
      }
    }, [isSuccess, isError]);
       navigate=useNavigate();
      const TranferToRegister =()=>{
        navigate('/Register')
      }

  return (
    <div className='login'>

    <div className="App">
     <img  className="w-75" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png"/>
    <h1 className='display-4 title mt-3'>FACEBOOK</h1>
    </div>
    <div className='form container'>
    <Tabs defaultActiveKey="Log In" id="uncontrolled-tab-example" className="mb-3 tab">
  <Tab eventKey="Log In" title="Log In">
    <Form onSubmit={handleSubmit(onSubmit)} className='shadow-lg text-center border rounded border-2 border-dark  w-50 p-3 m-1 mt-3 mx-auto form1 bg-white'>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control type="email" placeholder="Email Adress or Phone number" {...register("Email",{required: true})} />
    {errors.Email?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>
  <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
    <Form.Control type="text" placeholder="Username" {...register("Name",{required: true})}  />
    {errors.Name?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control type="password" placeholder="Password" {...register("Password",{required: true})} />
    {errors.Password?.type==='required' && <p className='text-danger text-start '>*This field is required</p>}
  </Form.Group>
  <Button variant="primary" size="lg" className='w-100' type='submit'>
    Log In
  </Button>
  <a className='d-block mt-1 pt-1 pb-2 mb-1' href="#" >Forgotten password?</a>
    <hr></hr>
    <Button variant="success" size="lg" className='w-100' onClick={TranferToRegister}
   > Create New Account
  </Button>
</Form>
<p className='mt-2 pt-2 text-center'><span className='fw-bold'>Create a Page</span> for a celebrity, brand or business.</p>

  </Tab>
  <Tab eventKey="Register" title="Register">
    <Register/>
  </Tab>

</Tabs>
    
    </div>
    </div>
  );
}

export default Login;
