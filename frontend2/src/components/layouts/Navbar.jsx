import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../redux-store/products/cartSlice";
import logo from "../../assets/images/logo.png";
import "./navbar.css";
import { setLogout } from "../../redux-store/auth/authSlice";

const Navbar = () => {
  const location = useLocation();

  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const doctor = useSelector((state) => state.auth.doctor);
  const admin = useSelector((state) => state.auth.admin);
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const dispatch = useDispatch();
  const Navigate=useNavigate();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const isProductsOrCartPage = () => {
    const path = location.pathname;
    return path === "/products" || path === "/cart";
  };

  const handlelogout = () => {
    dispatch(setLogout());
    window.location.replace('/');
  };


  return (
    <>
      <nav className=" border-gray-20 bg-gray-900 fixed top-0 w-full z-50 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="logo h-14" alt="logo" />
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className="mt-6 w-full md:block md:w-auto" id="navbar-default">
            <ul className=" bg-gray-900 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white md:dark:text-blue-500 "
                  aria-current="page"
                >
                  <span className="text-1xl">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/feed"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <span className="text-1xl">Inspire</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <span className="text-1xl">Chat</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/therapy"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <span className="text-1xl">Therapy</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <span className="text-1xl">Products</span>
                </Link>
              </li>
              <li>
                {!(user || doctor || admin) ? (
                  <>
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className="text-white focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center dark:hover:bg-blue-700"
                    type="button"
                  >
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src="https://i.pinimg.com/550x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg"
                      alt="Jese Leos"
                    />
                    <span className="text-1xl md:dark:hover:text-blue-500">
                      Login
                    </span>
                  </button>
                  <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-900"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <Link
                        to="user/login"
                        className="block px-4 py-2 hover:text-blue-500"
                      >
                        User Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="user/register"
                        className="block px-4 py-2 hover:text-blue-500"
                        //onClick={() => window.location.href = `/adminside/login`}
                      >
                        User Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="expert/login"
                        className="block px-4 py-2 hover:text-blue-500"
                      >
                        Doctor Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="admin/login"
                        className="block px-4 py-3 hover:text-blue-500"
                      >
                        Admin Login
                      </Link>
                    </li>
                  </ul>
                </div></>
                ) : (
                  user && (
                    <div className="flex justify-between items-start">
                      <Link
                        className="text-white focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center dark:hover:bg-blue-700"
                        to="user/profile"
                      >
                        <img
                          className="w-8 h-8  rounded-full mr-2"
                          src={
                            user.pic ||
                            "https://i.pinimg.com/550x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg"
                          }
                          alt="Jese Leos"
                        />
                      <span className="text-[1rem]  md:dark:hover:text-blue-500">
                          User Profile
                      </span>
                      </Link>
                      <span
                        onClick={handlelogout}
                        className="text-[1rem]  text-white px-4 py-1 hover:text-blue-500"
                      >
                        Logout
                      </span>
                    </div>
                  )
                )}

                {doctor && (
                 <div className="flex justify-between items-start">
                    <Link
                      className="text-white focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center dark:hover:bg-blue-700"
                      to="doctor/profile"
                    >
                      <img
                        className="w-8 h-8 rounded-full mr-2"
                        src={
                          doctor.pic ||
                          "https://i.pinimg.com/550x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg"
                        }
                        alt="Jese Leos"
                        
                      />
                      <span className="text-1xl md:dark:hover:text-blue-500">
                          Doctor Profile
                      </span>
                    </Link>
                    <button
                      onClick={handlelogout}
                      className="block px-4 py-2 hover:text-blue-500"
                    >
                      Logout
                    </button>
                  </div>
                )}

                {admin && (
                 <div className="flex justify-between items-start">
                    <Link
                      className="text-white focus:outline-none font-medium rounded-lg text-sm text-center inline-flex items-center dark:hover:bg-blue-700"
                      to="/admin/profile"
                    >
                      <img
                        className="w-8 h-8 rounded-full mr-2"
                        src={
                          admin.pic ||
                          "https://i.pinimg.com/550x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg"
                        }
                        alt="Jese Leos"
                      />
                      <span className="text-1xl md:dark:hover:text-blue-500">
                          Admin Profile
                      </span>
                    </Link>

                    <button
                      onClick={handlelogout}
                      className="block px-4 py-2 hover:text-blue-500"
                    >
                      Logout
                    </button>
                  </div>
                )}

                
              </li>
              <li>
                {isProductsOrCartPage() && (
                  <Link
                    to="/cart"
                    className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    <span className="text-1xl ">
                      <i className="fa-solid fa-cart-shopping white mr-2 "></i>
                      Cart({totalQuantity})
                    </span>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
