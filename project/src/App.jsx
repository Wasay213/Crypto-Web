import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Components/Hero';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Pages from './Components/Pages';
import Exchange from './Components/Exchange';
import Features from './Components/Features';
import Blog from './Components/Blog';
import Contacts from './Components/Contacts';


const WithNavbar = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth routes without navbar */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Routes with navbar */}
        <Route path="/" element={<WithNavbar><Hero /></WithNavbar>} />
        <Route path="/home" element={<WithNavbar><Home /></WithNavbar>} />
        <Route path="/pages" element={<WithNavbar><Pages /></WithNavbar>} />
        <Route path="/exchange" element={<WithNavbar><Exchange /></WithNavbar>} />
        <Route path="/features" element={<WithNavbar><Features /></WithNavbar>} />
        <Route path="/blog" element={<WithNavbar><Blog /></WithNavbar>} />
        <Route path="/contacts" element={<WithNavbar><Contacts /></WithNavbar>} />
      </Routes>
    </Router>
  );
}

export default App;
