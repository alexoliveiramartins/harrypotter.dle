import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './index.css'
// import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>not found!</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
