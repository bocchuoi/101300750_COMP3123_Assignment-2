import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function MyNav(props) {

  // useEffect(() => {
  //   setIsLoggedIn(localStorage.getItem("loggedin"));
  // }, []);

  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          {props.loggedIn==="false" ? 
          (<Nav className="me-auto">
            <Nav.Link href="/login">LogIn</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>) : 
          (<Nav className="me-auto"> 
            <Nav.Link href="/employees">Employee</Nav.Link>
            <Nav.Link onClick={()=>{props.handleLogout(); navigate("/login");}}>Log out</Nav.Link>
          </Nav>)}

        </Container>
    </Navbar>
  );
}
