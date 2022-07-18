import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useEffect, useState } from 'react';

import csv from 'csvtojson';

import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Members from './pages/Members';
import Schedule from './pages/Schedule';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [scheduleData, setScheduleData] = useState(null);

  const scheduleUrl =
    'https://docs.google.com/spreadsheets/d/17aCoIcb2RlGMCmlN4uvUiarDWdWJa4aFqh_IZ6ZhmME/export?format=csv';

  useEffect(() => {
    fetch(scheduleUrl)
      .then(result => result.text())
      .then(csvText => csv().fromString(csvText))
      .then(data => data.filter(item => item.Type !== 'Rehearsal' && item.Date && item.Status === 'Confirmed'))
      // .then(data => console.log(data))
      .then(data => setScheduleData(data));
  }, []);

  const [newsData, setNewsData] = useState(null);

  const newsUrl =
    'https://docs.google.com/spreadsheets/d/1PP5oEBPzh0QZA_d2gdq_T8BWGJuzJ2h2VXiTFXccN5Y/export?format=csv';

  useEffect(() => {
    fetch(newsUrl)
      .then(result => result.text())
      .then(csvText => csv().fromString(csvText))
      // .then(data => console.log(data))
      .then(data => setNewsData(data));
  }, []);

  return (
    <div className="body">
      <Router>
        <Header />
        <main className="container">
          <Routes>
            <Route path="" element={<Home scheduleData={scheduleData} newsData={newsData} />} />
            <Route path="about" element={<About />} />
            <Route path="members" element={<Members />} />
            <Route path="news" element={<News newsData={newsData} />} />
            <Route path="schedule" element={<Schedule scheduleData={scheduleData} />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
