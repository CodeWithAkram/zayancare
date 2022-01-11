import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FindDoctors from './FindDoctors';
import Home from './Home';
import Consultants from './Consultants';
import Medicine from './Medicine';
import LabTests from './LabTests';
import Surgeries from './Surgeries';
import Contact from './Contact';

import './style.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/find-doctors" element={<FindDoctors />} />
          <Route exact path="/consultants" element={<Consultants />} />
          <Route exact path="/medicine" element={<Medicine />} />
          <Route exact path="/lab-tests" element={<LabTests />} />
          <Route exact path="/surgeries" element={<Surgeries />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </>
  )
}

export default App;
