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
import CardTwo from './CardTwo';






function Watch() {
    let arr=[
        {
            img:"",
            name:"Create",
        },
        {
            img:"",
            name:"Happy",
        },
        {
            img:"",
            name:"Smart",
        },
        {
            img:"",
            name:"MusicIndia",
        },
        {
            img:"",
            name:"PutJoke",
        }
    ]
    const { register, handleSubmit, formState:{errors} } = useForm()
  return (
    <div>
    <div>
    
    <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" fixed="top">
  <Container>
        <img className=' brand rounded-pill' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAD6+vrQ0NDi4uLx8fHn5+f39/fu7u6ysrLe3t6Dg4NLS0umpqb09PScnJzGxsaJiYm9vb3Y2NjDw8NsbGxXV1e2trZbW1uQkJBkZGRxcXEqKipPT09iYmKXl5ccHBx6eno8PDw0NDQnJycNDQ06OjpDQ0MZGRkpKSl0vZiBAAAK2UlEQVR4nO2d2ZaqOhBAW4IICDIqDo2Ktq3n/3/wOvSgnUCqMuJd7ofzcJaNKUlSYypvby9evHjx4sULE3huGIauY3sY6nHcKpvWgx+2q2poe0wK8eLZgEEdjGyPTAl+smeJd2NJbA9PmmLeLt6VXW57iFJ4PPkuvD+xjAuAfNf3WNgeqRijCCjgmcb2YEUI4fKdOTzfayxQAp5JbI8YCVrAs3q0PWYUPl7AweDjmaycDiXfhWd73GAyMQEHg9D2yIF4ogI+zVtci0s4mNgePAScJvzD3vboIUxlJBysbQ+fjyMl4GAQ2xaASyUpYf83VJl95sq7bQl4yAo4GGxsi9CNKy/hwLctRCe5AgmXtoXoBOrYd9Jrb7FRIWGvlaISCXutMaTV4ZWVbTG6mEgrxAv9DoeXCiTsue3mC/r4d/Tex5DzLy703hdOZCXsf3QxkJRwZ1sAPrJq4wniGZIilrbHD0BuLY5tDx9CIyNhZHv0IKT0ou3BgxjKSNhrF+oHmd0mtT14GJBMfgs9D9d8I5Rnu/EsqW/xqMYTWDU3hCXsvXvxzUZUwpPtkUMRz2M8Tda7EZWw34HhO4Sj4H0OuD2yE5TweQoXY0EJn8SoeRPX+s8joaiL8TQ7jbBdk22SuMpT4k16X/meikl4x0e02gSkvxHGkbSE30Tjqp9HGeRj4PfMkv45xyulEl5YBv2y6aQj4CyiuEdCqshGsah7U+cvUDIMZezaFu6KRCyDT90H24folND+oRTS6JXPsoyhcEU0kg87vhaRCJeiWZtXHgRxLkgJhvPG6dGwfGc+DaqOUq0pCsZUKiC3JN+ZyER2vPywJt8F7Zuqrfn5i956Kovz85dMo3xb1hduIyXFfAimuuSj3t8sC4g/Egh7l36ZyWhTLSI+yldnQfFrY6D9w+tfOWQhrFPV16rk7z8P3zfV36AY1sf/Hd+wEjT8FNs35PPrufWGsGpfsaWKD5GmUSVU6ajS2yhuK6YjBIbcYLfUAyqBRaksdeVeptE269Kz2HgpS6F5+MC5msCqvzxPzZgTjMaeMmkp8s6RaToldWPjwTrnF50zm7e0016oX+CeJK/54yiAzARs7VeXC+Sidh3JGJVLKYUWkBlSzuQKMZuOoUMNyJ2U6xsgfJe5Cfmw4WBIoRDcggi0i/eGVvcgTe2Dp6oBhxipDD+Aj4UubgPH4JD7DNjYCpmeGo3+mD9wIF9gjjnDlONBm2RfIB0n1C8OS7zqjqLiPDykoQWzVfVuNkhVgU3Qg0o7NYZt3rB13pyjo4wSIpCIOl8iMkDDGUrIKP1uAI/VefxmiRKQG+jcMSYcJI6n7yXiXiHfXotZGyPAStW3neIMNn7YIWRZBJCOPzqEu4BrGLUAPJH5OwB2G11H/VCrcAt54uWDtNPNn6earFOcLgQlNy8m4Iz6X0Cph54MOCoCCEttXi2kivpvvtbV4ieiqkqPsGfezHhq8+fv2VrOa75zv/YOYMXz7cO06cPftDVMU9RxdahL8fVxaj/lawx6asuCOgwErS/4FoTebLhrXn2+DVMLRQ+4hZ8jqZQPwg2rK3eEMfbaFpxgaL7/hF6J3G9RXQZfc79R5LtPP39D/Shcf19xbR8mFwOvDrkzISj9xo2WKPaDEQIidPHd2qaWLjdoqVYjNnABIfb2N/d/R01TXu5A6VaDKAnGuN8PGpbaTRveV6k8RnUAC4jq6fXgQlCTm2thKDywCVeFKDX8uHtRL587cdT5iHCnCWdnPHqBVFCK626rcy/AYXxc27k/+Q9qM53wvk5ZQd8YKiCuK8RfbbDlfYBClUIEe4XIIOZf/4gOzPH2N0V9NsAuBUYPvjF+OKrHKfebFfVihJaDIOux6UVGvRHuLFXjP0HTodhVT2ewqCdwa1qUSAj1mZAb94SRoqNsGq6SUjJLT7xvuYHUvczNi/oUt2GTip0GGMRHZtaZ6oeeclxLSoG2AMaecKcFCnZAm/ZnP5mfu0Ne4wMXIS7N27Q8hfogX01JR9scmEeBOpnUurZoZcPvmyZddgKLzGDiQaTdqaUr8viJUtlTXyBz9ISIPIcdxgO9pAAVnpJ1iqDmeid4tpl0GUeMyjB+DhFaTtYCyCfcg3/FqntjZHjr/G+XK8QEVQEfgYHfkDfhGVl5QBoYaer/AVIjCwvdu5t/vAcx7EtI/aPUVgpyKHLuIhylGcDsYzUbhBhTMuk1qFe/y+LWeFcRZFyj5Abjh4JEL2U2GtyhpsO0Carc9X1/ODz/U+RVvMJUNDCiniCvW8LuVnEpCZgDy2IARS/FbTbNLS8eYeobWPRSeBlKXUGGha3SQNFL4WaoKm4GAsOO7cAWsWhlm9a+M39h+5XAI22CGeARMGqhgjlbnQK9bsFJ6nDND3W0hHag3bQFcxaokiApmhaTFlyzI+Q5OcYEXLctIrCtIRQqdUw1vzi2Bnbgfe5EWmWMDAl4bHUJRvCTHJ8CAk7MCLhsD8wV8FS6yD7jm1ATp0WHpYUy9/ECmrBkll0eq4cqzsXbMxp7BH6xzjsjHsgmFGhVoavN4xeHFacCjSD3AHTrKNHe1SDmMS/o76E7gWBbK+DO+SDYrrnSvb0NwXUQP6ATMsN8DAyoIJguSoiHOhFoUShYzuYWVZzNFLTU29WLIATuBF4j8g2SZaWO45GyDBbNeLn7QKjgw346TkoyQiwRItZrSvEphMnQc103DeIzSTOd3ZjP5+vlcrpqkjgOUtf18CETJxBtIdaPDrU8iHgraUZm2+tbP/AQEgdvg7nNlIseXSsRLuQMYLbl5ywG66AP14OkY1n7vrWCxrmondmitHf7glPEyL5ELLpU4eQWozsdx0Fh/C5JkiiQ7kL3cnPu7Pd6FZcCWzwex60ydZ1r+RVCwWOo6RQ1m5zo0i9emjRq22aCTjQyFdEhWmZxXnhqZu/EI8FiKXqbUBfASTfqMib+1avxIq7KtHAR96Q4Z4YuKePFeK4xIIlIahcN7JGH0/b9M6pn8/XZQGvGvzTTM+tZHUXRcY/rViMOskyvlL+E2jD40hKnbGwPGgOmU9EdxcZCD3IxxFXbsFJ/Y4wGJG1ON1j1od9zByq6e03SjclbD3CoO9/kp/FUh6qWRHlnfZfE2XKPiNFoRtvVAb6bBkmzrDnx6ONUc9JKrgIRiOMVhJR5cA1IxUFwuf6OFOHVkE0VOUZtiBWVjIgiVzjXrmqEDxykzXwVp55EofSIJAauZJFSE2RxXkAf80Wchsho3KgIGvV5AAbv0lPND76zMp/LZhNUqet3+Igj3yN5ssJ0j5BD0QFK8id6edi+H+fTJssWZ5Ik2SyybDydHT8MVkvdUNj2wq9W/dF+39Sq44Jh3C+jTU8/5GJjbo11o/OyrmIzsz5jT9obBYex1RiHoSusJPJfcizNZR4mWks0WqgN35oreDe1MJH5NKDRuv2jlTSnube4tCHfhJi6kHOQ6dxfwiQP/S/vwvHdkORx0syinbma722sudTAia3q+MbI9km01bZxmJu7E3cUG/FpH6gDw/l2wHFWhawrK/eo+4GRew3fx1Yv3iaaE1LTQHVXTgEcspnr2F9Pq14ULn0zLDdTdRnsQ2SzXqmDIQmyqeSsrVexqgi0PiZFnmTrHW6v3dfjJC8M3SKmCmfin626IMma1TJiZVW3+9lqvAny1B32rehTGN+7MXyyl/XixYsXL178j/gP+hitKJb0f3UAAAAASUVORK5CYII=" />
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
    <Nav className="me-auto text-center" defaultActiveKey="Watch">
      <Nav.Link href="home" className='display-6 me-4 ms-4 ' ><AiFillHome/></Nav.Link>
      <Nav.Link href="People" className='display-6 me-4 ms-4'><BsPeople/></Nav.Link>
      <Nav.Link href="Watch" className='display-6 me-4 ms-4'><MdOutlineLiveTv/></Nav.Link>
      <Nav.Link href="Group" className='display-6 me-4 ms-4'><TiGroup/></Nav.Link>
      <Nav.Link href="Gaming" className='display-6 me-4 ms-4'><SiFacebookgaming/></Nav.Link>
      <NavDropdown title="My Account" id="collasible-nav-dropdown" className='Nameicons mt-3 ms-5'>
        <div>
         <img src="https://www.pinclipart.com/picdir/middle/558-5588129_silhouette-person-clip-art-silhouette-unknown-people-png.png" className='w-25 shadow rounded-pill d-block mx-auto' /> 
        <NavDropdown.Item className='Nameicons text-center fw-bold text-primary' href="#action/3.1">Dhanush Lokam</NavDropdown.Item>
        </div>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2" className='Nameicons fw-bold '><span className='display-6 text-success pe-4'><MdOutlineAccountCircle/></span>Switch Account</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" className='Nameicons fw-bold '><span className='display-6 text-Secondary pe-4'><AiFillSetting/></span>Settings & privacy</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className='Nameicons fw-bold '><span className='display-6 text-warning pe-4'><BiHelpCircle/></span>Help & support</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4" className='Nameicons fw-bold me-1 '><span className='display-6 text-info pe-4'><BsFillMoonFill/></span>Display & accessiblity</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4" className='Nameicons fw-bold '><span className='display-6 text-info pe-4'><FcFeedback/></span>Give feedback</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4" className='Nameicons fw-bold '><span className='display-6 text-danger pe-4'><IoLogOutSharp/></span>Log out</NavDropdown.Item>
        <p className='terms text-center mt-1'>Privacy.Teams.Advertising.Ad choices.Cookies.More.Meta 2022</p>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    <div className='container-fluid parentOfCard2' >
    {
    arr.map((item) =>
        <CardTwo item={item}/>
    )
    
    }
    {
        arr.map((item) =>
        <CardTwo item={item}/>
    )
    }
    {
        arr.map((item) =>
        <CardTwo item={item}/>
    )
    }{
    <CardTwo item={arr[0]}/>
    }
    </div>
    </div>
  );
}

export default Watch;
