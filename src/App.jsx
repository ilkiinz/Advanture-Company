import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from "./About/About";
import Shop from "./Shop/Shop";
import Contact from "./Contact/Contact"


let App = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
  );
}

export default App;