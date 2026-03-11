import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavBar from './Componet/MainNavBar';

import DefaultLayout from './layouts/DefaultLayout';
import ChiSiamo from './pages/ChiSiamo';
import HomePage from './pages/HomePage';
import Prodotti from './pages/Prodotti';

function App() {
  

  return (
   <BrowserRouter>
   <MainNavBar />
   <Routes element={<DefaultLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/ChiSiamo" element={<ChiSiamo />} />
    <Route path="/Prodotti" element={<Prodotti />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
