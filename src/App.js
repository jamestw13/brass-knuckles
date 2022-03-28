import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import csv from 'csvtojson';

import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Schedule from './pages/Schedule';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import Header from './components/Header';

function App() {
  const [scheduleData, setScheduleData] = useState(null);

  const url =
    'https://docs.google.com/spreadsheets/d/17aCoIcb2RlGMCmlN4uvUiarDWdWJa4aFqh_IZ6ZhmME/export?format=csv';
  const section = document.querySelector('section');

  useEffect(() => {
    const schedule = fetch(url)
      .then(result => result.text())
      .then(csvText => csv().fromString(csvText))
      .then(data => data.filter(item => item.event !== 'Rehearsal'))
      .then(data => setScheduleData(data));
  }, []);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home scheduleData={scheduleData} />} />
          <Route path='about' element={<About />} />
          <Route path='members' element={<Members />} />
          <Route
            path='schedule'
            element={<Schedule scheduleData={scheduleData} />}
          />
          <Route path='gallery' element={<Gallery />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
