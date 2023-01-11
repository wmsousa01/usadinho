import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ManageProductPage from './pages/ManageProductPage';
import EditProductPage from './pages/EditProductPage';
import ViewCollectionPage from './components/ViewCollection';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="container">
      
      <Navbar />

      <Routes>
        <Route path='/'element={ <HomePage />} />
        <Route path='/ProductPage/:itemId' element={ <ProductPage />} />
        <Route path='/view-collection' element={ <ViewCollectionPage /> } />
        <Route path='/ProductPage/manage' element={ <ManageProductPage /> } />
        <Route path='/ProductPage/:itemId/edit' element={ <EditProductPage />} />
        <Route path='/LoginPage' element={ <LoginPage />} />
      </Routes>
      
    </div>
  );
}

export default App; 
