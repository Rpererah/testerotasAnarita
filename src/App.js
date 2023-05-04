import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './screens/Home';
import Sobre from './screens/Sobre';
import NotFound from './screens/NotFound';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </BrowserRouter>
  )
}
