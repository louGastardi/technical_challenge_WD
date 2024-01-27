import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllPhonesPage from './pages/AllPhonesPage';
import PhoneDetailPage from './pages/AllPhonesPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<AllPhonesPage />} />
        <Route path="/phones/:id" element={<PhoneDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
