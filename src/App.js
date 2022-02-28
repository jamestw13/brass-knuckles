import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/members' element={<About />} />
          <Route path='/schedule' element={<About />} />
          <Route path='/gallery' element={<About />} />
          <Route path='/contact' element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
