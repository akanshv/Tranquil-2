import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './pages/homepage/Home';
import Inspire from './pages/inspire/Inspire';
import Chat from './pages/chat/Chat';
import Therapy from './pages/therapy/Therapy';
import Products from './pages/products/Products';


const App = () => {
  return (
    <div>
      <Navbar navactive={'home'} currentuser={'Anmol'}/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/feed' element={<Inspire />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/therapy' element={<Therapy />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
