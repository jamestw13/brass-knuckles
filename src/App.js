import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
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
