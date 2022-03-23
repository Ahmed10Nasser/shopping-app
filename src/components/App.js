import Test from "./Test";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    // <div>Ahmed Nasser</div>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Test />}> </Route>
          <Route path="/x" element={<div>Ahmed</div>}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

