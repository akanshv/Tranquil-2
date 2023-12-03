// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';
// import './navbar.css';

// const Navbar = ({ navactive, currentuser }) => {

//   return (
//     <header>
//       <Link to="/home">
//         <img src={logo} className="logo" alt="logo" />
//       </Link>

//       <div>
//         <ul id="nav">
//           <li className={navactive == "home" ? "active" : ""}>
//             <Link to="/home">Home</Link>
//           </li>
//           <li className={navactive == "feed" ? "active" : ""}>
//             <Link to="/feed">Inspire</Link>
//           </li>
//           <li className={navactive == "chat" ? "active" : ""}>
//             <Link to="/chat">Chats</Link>
//           </li>
//           <li className={navactive == "therapy" ? "active" : ""}>
//             <Link to="/therapy">Online Therapy</Link>
//           </li>
//           <li className={navactive == "product" ? "active" : ""}>
//             <Link to="/products">Products</Link>
//           </li>
//           {!currentuser ? (
//             <li className={navactive[5] === 1 ? "dropdown active" : "dropdown"}>
//               <a href="#">
//                 <i className="fa-solid fa-user"></i>
//               </a>
//               <div className="dropdown-content">
//                 <Link to="/login">Login</Link>
//                 <Link to="/register">Register</Link>
//                 <Link to="/expert/expertlogin">Expert-Login</Link>
//                 <Link to="/admin/adminlogin">Admin-Login</Link>
//               </div>
//             </li>
//           ) : (
//             <li className={navactive[5] === 1 ? "dropdown active" : "dropdown"}>
//               <a href="#">
//                 <img
//                   className="round"
//                   // src={currentuser.pfp}
//                   src="https://source.unsplash.com/random/?male_face"
//                   alt="user"
//                   width="40"
//                 />
//                 &nbsp;{currentuser.username}
//               </a>
//               <div className="dropdown-content">
//                 <Link to="/userprofile">Profile</Link>
//                 <Link to="/logout">Logout</Link>
//               </div>
//             </li>
//           )}

//           <a href="#" id="close">
//             <i className="fa-solid fa-xmark"></i>
//           </a>
//         </ul>
//       </div>

//       <div className="hamburger">
//         <i id="ham" className="fa fa-outdent"></i>
//       </div>
//     </header>
//   );
// };

// export default Navbar

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full z-50 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="logo h-14" alt="logo" />
          </Link>

        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/feed"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Inspire
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Chat
                </Link>
              </li>
              <li>
                <Link
                  to="/therapy"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Therapy
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
