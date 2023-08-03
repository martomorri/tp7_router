import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useCategories } from './hooks/useCategories';
import { useProducts } from './hooks/useProducts';
import Layout from './pages/js/Layout';
import PageProductos from './pages/js/PageProductos';
import Home from './pages/js/Home';
import Producto from './pages/js/Producto';
import NotFound from './pages/js/NotFound';

function App() {
  const limit = 100;
  const url = `https://dummyjson.com/products?limit=${limit}&skip=0`;
  const {productos, setProductos} = useProducts({url});
  const {categories} = useCategories();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout categories={categories} />}>
            <Route index element={<Home productos={productos} />} />
            <Route path="/productos" element={<PageProductos productos={productos} setProductos={setProductos} categories={categories} limit={limit} />} />
            {/* <Route path="/contacto" element={<Contacto />} /> */}
            <Route path="/productos/:id" element={<Producto />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
