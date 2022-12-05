import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MyNav() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="me-auto">
            <Nav.Link href="/login">LogIn</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
  );
}