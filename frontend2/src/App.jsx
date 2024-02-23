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
import Listner from './pages/chat/Listner';
import Peer from './pages/chat/Peer';
import ExpertLogin from './pages/therapy/doctorlogin';
import PostForm from './pages/inspire/CreatePost';
import Register from './pages/userlogin/register';
import Login from './pages/userlogin/login';
import DoctorRegister from './pages/therapy/DoctorRegister';
import DoctorDetail from './pages/therapy/doctorDetail';
import UserProfile from './pages/userlogin/Userprofile';

const App = () => {
  return (
    <div>
      <Navbar navactive={'home'} currentuser={'Anmol'}/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='user/register' element={<Register/>} />
        <Route exact path='user/login' element={<Login/>} />
        <Route path='/feed' element={<Inspire />} />
        <Route path='/feed/newfeed' element={<PostForm/>} />
        <Route path='/feed/:id' element={<Inspirepost/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/chat/peer' element={<Peer />}/>
        <Route path='/chat/listner' element={<Listner />}/>
        <Route path='/therapy' element={<Therapy />}/>

        <Route path='/therapy/newtherapist' element={<DoctorRegister/>}/>

        {/* <Route path='/therapistside' element={<Products />} /> */}
        <Route path='/products' element={<Products />} />
        <Route path='/adminside' element={<AdminProfile />} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/adminside/products' element={<AdminProductsManage />} />
        <Route path='/expertlogin' element={<ExpertLogin/>} />
        <Route path='doctor/profile' element={<DoctorDetail/>}/>
        <Route path='/user/profile' element={<UserProfile/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
