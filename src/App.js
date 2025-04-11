import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

const Crafts = () => <div>Crafts</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
  return (
    <div className="App"> 
    <h1>test</h1>
      <HashRouter>
          <Navbar>
            <Navbar.Brand
              className="mx-3"
              style={{fontFamily: "Consolas, monaco, monospace", color: "#007200"}}> Julia Sangster </Navbar.Brand>
            <Navbar.Collapse>
              <Nav.Link as={Link} to="/" className="mx-3">Home</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-3">Contact</Nav.Link>
              <Nav.Link as={Link} to="/fun_stuff" className="mx-3">Crafts</Nav.Link>
            </Navbar.Collapse>
          </Navbar>

          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/contact" element = {<Contact />} />
            <Route path="/fun_stuff" element = {<Crafts />} />
          </Routes>

      </HashRouter>

    </div>
  );
}

export default App;
