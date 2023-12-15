import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './pages/homepage/Home';
import Inspire from './pages/inspire/Inspire';
import Chat from './pages/chat/Chat';
import Therapy from './pages/therapy/Therapy';
import Products from './pages/products/Products';
import Inspirepost from './pages/inspire/inspirepost';
import Cart from './pages/products/Cart';
import AdminLogin from './pages/admin/AdminLogin';
import AdminProductsManage from './pages/admin/AdminProductsManage';
import AdminProfile from './pages/admin/AdminProfile';


const App = () => {
  return (
    <div>
      <Navbar navactive={'home'} currentuser={'Anmol'}/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/feed' element={<Inspire />} />
        <Route path='/feed/newfeed' element={<Products />} />
        <Route path='/feed/:id' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/chat/peer' element={<Chat />}/>
        <Route path='/chat/listner' element={<Chat />}/>
        <Route path='/therapy' element={<Therapy />}/>
        <Route path='/therapy/newtherapist' element={<Chat />}/>
        <Route path='/therapistside' element={<Products />} />
        <Route path='/products' element={<Products />} />
        <Route path='/adminside' element={<AdminProfile />} />
        <Route path='/adminside/login' element={<AdminLogin />} />
        <Route path='/adminside/products' element={<AdminProductsManage />} />
        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
