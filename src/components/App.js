import Home from "./Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from "./Signup";
import Login from "./Login";
import {Container} from "react-bootstrap"
import Cart from "./Cart";


function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

