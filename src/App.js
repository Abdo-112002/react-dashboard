

import React from 'react';
import {Routes , Route} from 'react-router-dom'
import NavBar from './components/nav_bar/NavBar';
import SidBar from './components/nav_bar/SidBar';
import Home from './components/products/Home';
import AddProducts from './pages/AddProducts';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';
import UpdateProduct from './pages/UpdateProduct';



// import Slider from './components/slider/Slider';


function App() {
  return (
      <>
          <NavBar/>
          <div className='d-flex'>
              <SidBar/>
              <Routes>  
                  <Route path='/' element={<Home/>}>
                        <Route index element={<AllProducts/>}/>
                        <Route path='products' element={<AllProducts/>}/>
                        <Route path='new_products' element={<AddProducts/>}/>
                        <Route path='details/:productId' element={<ProductDetails/>}/>
                        <Route path='products/details/:productId' element={<ProductDetails/>}/>
                        <Route path='update/:productId' element={<UpdateProduct/>}/>
                        <Route path='products/update/:productId' element={<UpdateProduct/>}/>
                  </Route>
                  <Route path='*' element='error'/>
              </Routes>  
          </div>      
      </>
  );
}

export default App;
