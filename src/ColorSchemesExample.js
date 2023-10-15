import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Checkpoint</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cards</Nav.Link>
            <Nav.Link href="#pricing">Heading</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
     
    </>
  );
}

export default ColorSchemesExample;