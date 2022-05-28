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
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { clearLoginStatus } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';





function NavBar(props) {
  const { register, handleSubmit, formState:{errors} } = useForm();
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      HOME
    </Tooltip>
  );
  const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      FRIEND REQUEST
    </Tooltip>
  );
  const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      WATCH
    </Tooltip>
  );
  const renderTooltip3 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      COMMUNITY
    </Tooltip>
  );
  const renderTooltip4 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      GAMES
    </Tooltip>
  );
  let dispath = useDispatch();
    const navigate=useNavigate();
  const Logout =()=>{
    localStorage.clear();
    dispath(clearLoginStatus());
    navigate("/");
  }
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );
  // let fileCount=userObj.photo.length
  let fileCount=0
  return (
    <div className='Home'>
    <div>
        
      <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" sticky="top">
  <Container>
        <img className=' brand rounded-pill' src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png" />
      <Form>
        
        <FormControl
          type="search"
          placeholder="Search"
          className=" mt-3 rounded-pill pe-3 me-4"
          aria-label="Search"
          {...register("Search")} />
      </Form>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto text-center" defaultActiveKey={props.item} >
    <OverlayTrigger
    placement="bottom"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
      <Nav.Link href="home"  className='display-6 me-4 ms-4 ' ><AiFillHome/></Nav.Link>
      </OverlayTrigger>,
      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip1}
    >
      <Nav.Link href="People" className='display-6 me-4 ms-4'><BsPeople/></Nav.Link>
      </OverlayTrigger>,
      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip2}
    >
      <Nav.Link href="People" className='display-6 me-4 ms-4'><MdOutlineLiveTv/></Nav.Link>
      </OverlayTrigger>,
      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip3}
    >
      <Nav.Link href="Community" className='display-6 me-4 ms-4'><TiGroup/></Nav.Link>
      </OverlayTrigger>,
      <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip4}
    >
      <Nav.Link href="People" className='display-6 me-4 ms-4'><SiFacebookgaming/></Nav.Link>
      </OverlayTrigger>,
      <NavDropdown title="My Account" id="collasible-nav-dropdown" className='Nameicons mt-3'>
        <div>
        {fileCount == 0 ?(
         <img src="https://www.pinclipart.com/picdir/middle/558-5588129_silhouette-person-clip-art-silhouette-unknown-people-png.png" className='w-25 shadow rounded-pill d-block mx-auto' /> 
         )
         :
         (
        <img src={userObj.profilePic} className='w-25 shadow rounded-pill d-block mx-auto' /> 
          )
        }
         <NavDropdown.Item className='Nameicons text-center fw-bold text-primary' href="#action/3.1">{userObj.Name}</NavDropdown.Item>
        </div>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2" className='Nameicons fw-bold '><span className='display-6 text-success pe-4'><MdOutlineAccountCircle/></span>Switch Account</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" className='Nameicons fw-bold '><span className='display-6 text-Secondary pe-4'><AiFillSetting/></span>Settings & privacy</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className='Nameicons fw-bold '><span className='display-6 text-warning pe-4'><BiHelpCircle/></span>Help & support</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4" className='Nameicons fw-bold  '><span className='display-6 text-info pe-4'><BsFillMoonFill/></span>Display & accessiblity</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4" className='Nameicons fw-bold '><span className='display-6 text-info pe-4'><FcFeedback/></span>Give feedback</NavDropdown.Item>
        <NavDropdown.Item onClick={Logout} href="#action/3.4" className='Nameicons fw-bold '><span className='display-6 text-danger pe-4'><IoLogOutSharp/></span>Log out</NavDropdown.Item>
        <p className='terms text-center mt-1'>Privacy.Teams.Advertising.Ad choices.Cookies.More.Meta 2022</p>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>




    
    </div>
  );
}

export default NavBar;
