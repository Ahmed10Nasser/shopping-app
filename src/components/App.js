import Test from "./Test";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signup from "./Signup";
import Login from "./Login";
import {Container} from "react-bootstrap"


function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<Test/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

