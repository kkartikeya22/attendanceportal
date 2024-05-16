import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddAttendance from './components/AddAttendance';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/kkartikeya22" element={<AddAttendance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
