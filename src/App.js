import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ViewCollectionPage from './pages/ViewCollectionPage';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/'element={ <HomePage />} />
        <Route path='/ProductPage/:itemId' element={ <ProductPage />} />
        <Route path='/view-collection' element={ <ViewCollectionPage /> } />
      </Routes>
      
    </div>
  );
}

export default App; 
