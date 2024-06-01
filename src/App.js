import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './Routes/Login';
import UserList from './Routes/UserList';
import Particular from './Routes/Particular';
import { Container } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar bg="warning" varient="light">
          <Container>
            <Navbar.Brand href="/"> Sample Project</Navbar.Brand>
            <Nav className="float-right">
              <Nav.Link href="/">Login</Nav.Link>

            </Nav>
          </Container>
        </Navbar>

        <Container className='pt-5'>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/React_Fe_Be_app" element={<Login />} />
          <Route path='usersdata' element={<UserList />} />
          <Route path='usersdata/:userNo' element={<Particular />} />
        </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
