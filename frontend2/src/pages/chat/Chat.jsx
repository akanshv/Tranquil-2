import React from 'react';
import './Chat.css';
import './Style.css';
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import  { useEffect, useState } from "react";
const Chat = () => {
  const user = useSelector((state) => state.auth.user);
  const Navigate=useNavigate();
  useEffect(() => {
      if(!user){
        toast.error('First Login or Signup to access',{
          duration: 4000,
          position: 'top-right',
        });
        Navigate('/user/login')
      }
  }, []);
  return (
    <>
    <div className=" w-125 p-3 vh-100">
        <div className="mt-[8rem] headimg flex justify-center">
          <img className='rounded-full  ' src="https://i.imgur.com/7NrYfBD.png0" alt="" />
        </div>
        <div className="heading-div">
          <h2 className="center heading1">
            An Anonymous, Smart, & Interactive community to find Solace
          </h2>
        </div>

        <div className="content pt-5 bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="box-inside">
            <h2 className="pt-4 text-center text-white font-bold text-xl">De-stress with Solace</h2>
            <h6 className="center d-inline-block">
              A heart-to-heart chat with a friend who understands & doesn't judge makes you feel
              better instantly, we call it Solace!
            </h6>
          </div>

          <div className="center pt-4 pb-5">
            <form action="/chat/listner" method="get">
              <div>
                <button type="submit" className="bg-gradient-to-r from-pink-500 to-pink-700 text-white py-2 px-4 rounded-lg hover:from-pink-700 hover:to-pink-900 focus:outline-none focus:shadow-outline-pink active:from-pink-800 active:to-pink-900" onClick={() => window.location.href = `/chat/listner`} >
                  Volunteer as Listener
                </button>
              </div>
            </form>
            <form action="/chat/peer" method="get">
              <div>
                <button type="submit" className="bg-gradient-to-r from-pink-500 to-pink-700 text-white py-2 px-4 rounded-lg hover:from-pink-700 hover:to-pink-900 focus:outline-none focus:shadow-outline-pink active:from-pink-800 active:to-pink-900 ml-4">
                  Get Solace
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;