
import React from 'react';
import Navigation from './components/Layout/Navigation'
import Papers from './components/Papers/Papers'
import Authors from './components/Authors/Authors'
import Reading from './components/ReadingList/Reading'
import Login from './components/Login/LoginMain'
import Logout from './components/Logout'
import Home from './components/Home'
import Footer from './components/Layout/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/**
 * Router and main template for the site.
 * 
 * @author Jordan Short
 */
function App() {
  document.body.style = 'background: #fefbe9'

  return (
    <BrowserRouter basename={"/kf6012/coursework/part2"}>
      <div className="content-container">
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="logout" element={<Logout />}/>
          <Route path="papers" element={<Papers />}/>
          <Route path="authors" element={<Authors />}/>
          <Route path="reading" element={<Reading />}/>
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>

      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
