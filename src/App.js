import './App.css';
// import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import PageProductos from './pages/PageProductos';
import Home from './pages/Home';
import Producto from './pages/Producto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/productos" element={<PageProductos />} />
            {/* <Route path="/contacto" element={<Contacto />} /> */}
            <Route path="/productos/:id" element={<Producto />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
