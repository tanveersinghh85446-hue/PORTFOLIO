import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from "./Components/Hero"
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <>
  <Navbar/>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/About' element={<About/>}/>
      </Routes>
    </>
  );
}