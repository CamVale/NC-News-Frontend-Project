import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "./UserProvider";

export default function Topbar() {
    const {user, setUser} = useContext(UserContext)

  return (
    <Navbar style={{width: "100vw"}} fixed="top" sticky="top" bg="primary" data-bs-theme="dark">
      <Container>
        <Link to="/"><Navbar.Brand>NC News</Navbar.Brand></Link>
        <Nav className="me-auto">
          {user ? <Nav.Link as={Link} to="/login" style={{backgroundColor: "red", borderRadius: "30px"}}>Signed in as: {user}</Nav.Link> : <Nav.Link as={Link} to="/login">Login / Sign up</Nav.Link>}
        </Nav>
      </Container>
    </Navbar>
  );
}

// <nav className="settings">
//     <Link to="/">Home</Link>
//     <Link to="/login">Login/Signup!</Link>
//   </nav>
