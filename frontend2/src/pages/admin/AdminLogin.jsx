import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import './AdminLogin.css';
import './AdminProfile.css'
import logo from '../../assets/images/logo copy.png';
import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react'
import { toast } from "react-toastify";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLoginAdmin } from '../../redux-store/auth/authSlice';
// import Image from 'next/image';
// import { signIn } from "next-auth/react"



const AdminLogin = () => {
  const [Loginloading,setLoginloading]=useState(false);
  const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const Navigate=useNavigate();
 const dispatch=useDispatch();
 const handleSubmit = async (ev) => {
   ev.preventDefault();
   setLoginloading(true);
   try {
        //console.log(email,password)
       //  const formData = new FormData();
       //  formData.append("email", email);
       //  formData.append("password", password);
             
     const data = await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/adminlogin`,{email:email,password:password});
     console.log(data);
     if(data.data.message){
      toast.error("Wrong Credential",{
        duration: 4000,
        position: 'top-right',
      });
      setLoginloading(false)
     }
     console.log(data); 
     dispatch(setLoginAdmin(data.data));
     toast.success('Admin Login. Welcome to tranquil',{
       duration: 4000,
       position: 'top-right',
     }


      );
     Navigate('/adminside');
     setLoginloading(false);
   } catch (error) {
     console.log(error);
     toast.error(error.message,{
      duration: 4000,
      position: 'top-right',
    });

   }
   setLoginloading(false);
 };
 return (
   
   <>
   <section className='mt-[10rem]'>
   <h1 className='text-center text-primary text-4xl '>Admin Login Here!</h1>
   <form className='block mt-3 max-w-lg rounded-md mx-auto  p-3' onSubmit={handleSubmit}>
           <input type="email" 
           className={!Loginloading ? 'forminput' : 'disabledinput'} placeholder='Enter Email'
           value={email}
           onChange={(e)=>setEmail(e.target.value)} />
           <input type="password"
          className={!Loginloading ? 'forminput' : 'disabledinput'}
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
           <button 
           className={!Loginloading ? 'authbuttons submit' : 'authbuttons disabledbuttton'} type='submit'>Login</button>
           {/* <p className='text-xl text-gray-700 font-semibold text-center my-2 '>Login with Provider</p>
           <button className='block-w-full font-semibold border border-gray-300 rounded-xl px-6 py-2 flex justify-center gap-3 m-auto'>
           <img className='h-8 w-8' src={'/google.png'}  alt="" />
             Login with Google</button>
             <div className='my-4 text-center text-gray-500'>
               New Here?{'  '}<Link to={'/register'}className='underline'>Register Here </Link>
             </div> */}
       </form>
   </section>
   </>
 )
}

export default AdminLogin