import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Request from './components/Request/Request';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/food-request/' exact element={<Home />} />
          <Route path='/food-request/search' exact element={<Search />} />
          <Route path='/food-request/request' exact element={<Request />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
