import Home from "./Home";
import NavBar from "./NavBar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from "./Signup";
import Login from "./Login";
import {Container} from "react-bootstrap"
import Cart from "./Cart";
import ProductPreview from "./ProductPreview";


function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/product/:id" element={<ProductPreview/>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

