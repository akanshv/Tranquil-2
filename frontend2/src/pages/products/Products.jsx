import React, {useState, useEffect} from "react";
import "./products.css";
import "../homepage/home.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart,fetchProductData } from "../../redux-store/products/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.allCart.items);  

  // const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    dispatch(fetchProductData());
    // setLoading(false);
  }, []);
  
  return (
    <>
      <div className="wellness-div mt-[120px]">
        <img
          src="https://i.imgur.com/uc9EeQL.png"
          className="wellness-banner"
          alt="wellness"
        />
      </div>

      <div className="flex flex-wrap justify-around mb-12">
        {items.map((item) => (
          <>
          {item.id == 1 &&
            <div className="flex justify-center text-center text-[50px] text-teal-600 border-4 border-gray-100 rounded-full container mt-12 bg-gray-100 shadow-lg">
              <strong style={{ fontFamily: "'Roboto', sans-serif" }}>
                Mindfulness Books
              </strong>
            </div>           
          }
          {item.id == 7 &&
            <div className="flex justify-center text-center text-[50px] text-teal-600 border-4 border-gray-100 rounded-full container mt-12 bg-gray-100 shadow-lg">
              <strong style={{ fontFamily: "'Roboto', sans-serif" }}>
                Stress Busters
              </strong>
            </div>           
          }
          {item.id == 10 &&
            <div className="flex justify-center text-center text-[50px] text-teal-600 border-4 border-gray-100 rounded-full container mt-12 bg-gray-100 shadow-lg">
              <strong style={{ fontFamily: "'Roboto', sans-serif" }}>
                Herbals
              </strong>
            </div>           
          }
          {item.id == 13 &&
            <div className="flex justify-center text-center text-[50px] text-teal-600 border-4 border-gray-100 rounded-full container mt-12 bg-gray-100 shadow-lg">
              <strong style={{ fontFamily: "'Roboto', sans-serif" }}>
                Sleepwell
              </strong>
            </div>           
          }
          
          <div
            key={item.id}
            className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
          >
            <a
              className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl transform transition-transform hover:scale-105"
              href="#"
            >
              <img
                className="object-cover"
                src={item.image}
                alt="product image"
              />
              <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                {Math.floor(((item.price - item.cutprice) / item.price) * 100)}%
                OFF
              </span>
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">
                  {item.name}
                </h5>
                <h4 className="text-md mt-2 tracking-tight text-slate-900">
                  {item.by}
                </h4>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">
                    ₹{item.cutprice}
                  </span>
                  <span className="text-sm text-slate-900 line-through">
                    ₹{item.price}
                  </span>
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                    5.0
                  </span>
                </div>
              </div>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="flex items-center justify-center rounded-md bg-slate-900 w-full px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Products;
