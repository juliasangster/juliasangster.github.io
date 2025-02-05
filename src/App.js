import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => <div>
  <h1> Welcome to my Personal Website! 🥳 </h1>
  <h6>I began converting my personal website from pure HTML/CSS to React on January 16th, 2025</h6>
  <h6>  If you're a Plotly recruiter, please know the timing of my website refactoring was poorly timed with my application</h6>
  <h4>I hope to hear from you soon!</h4>

  <h4>- Julia </h4> 
</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
  return (
    <div className="App"> 
      <HashRouter>
          <Navbar>
            <Navbar.Brand
              className="mx-3"
              style={{fontFamily: "Consolas, monaco, monospace", color: "#007200"}}> Julia Sangster </Navbar.Brand>
            <Navbar.Collapse>
              <Nav.Link as={Link} to="/" className="mx-3">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="mx-3">About</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-3">Contact</Nav.Link>
            </Navbar.Collapse>
          </Navbar>


          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/about" element = {<About />} />
            <Route path="/contact" element = {<Contact />} />
          </Routes>

      </HashRouter>

    </div>
  );
}


export default App;
