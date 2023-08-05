import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Edit from './components/Edit';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LoginForm from './components/Login';
import Register from './components/Register';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='/'>
            <img
              alt=""
              src="https://i.postimg.cc/m2y6YHLg/edit-user.png"
              width="45"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            Employee Details
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Router>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
