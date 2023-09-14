import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCategories } from './hooks/useCategories';
import { useProducts } from './hooks/useProducts';
import Layout from './pages/js/Layout';
import PageProductos from './pages/js/PageProductos';
import Home from './pages/js/Home';
import ProductosXCategoria from './pages/js/ProductosXCategoria';
import Producto from './pages/js/Producto';
import NotFound from './pages/js/NotFound';
import Contacto from './pages/js/Contacto';
import Comprar from './pages/js/Comprar';
import { CarritoContext } from './context/carritoContext';
import { useState } from 'react';

function App() {
  const [carrito, setCarrito] = useState([])

  const limit = 100;
  const url = `https://dummyjson.com/products?limit=${limit}&skip=0`;
  const {productos, setProductos} = useProducts({url});
  const {categories} = useCategories();

  return (
    <div className="App">
      <CarritoContext.Provider value={{carrito, setCarrito}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout categories={categories} carrito={carrito} />}>
              <Route index element={<Home productos={productos} />} />
              <Route path="/productos" element={<PageProductos productos={productos} setProductos={setProductos} limit={limit} />} />
              <Route path="/categoria/:cat" element={<ProductosXCategoria productos={productos} />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/productos/:id" element={<Producto />} />
              <Route path="/comprar/:monto/:isCarrito" element={<Comprar />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CarritoContext.Provider>
    </div>
  );
}

export default App;
