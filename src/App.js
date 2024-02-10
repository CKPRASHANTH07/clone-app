import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Page1';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
    
        <Route path="/"element={<Page1 />}/>
      
      </Routes>
    </Router>
  );
}

export default App;
