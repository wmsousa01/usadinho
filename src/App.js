import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/'element={ <HomePage />} />
        <Route path='/ProductPage'element={ <ProductPage />} />
      </Routes>
      
    </div>
  );
}

export default App; 
