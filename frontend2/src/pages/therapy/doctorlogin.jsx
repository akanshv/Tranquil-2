

// // eslint-disable-next-line no-unused-vars
// import React from 'react';
// import {FaFacebook, FaGoogle, FaLinkedinIn, FaRegEnvelope} from 'react-icons/fa'
// import { MdLockOutline } from 'react-icons/md'

// const ExpertLogin = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-108 mt-20">
//             <head>
//                 <link rel="icon" href="/favicon.ico" />
//             </head>
//             <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
//                 <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4x'>
//                     <div className='w-3/5 p-5'>
//                         <div className="text-left font-bold">
//                             <span className="text-green-500
//                             mb-2">Tranquil</span>
//                         </div>
//                         <div className="py-10">
//                             <h2 className='text-3xl font-bold text-green-500'> Sign in to Account</h2>
//                             {/* <h2 className='text-3xl font-bold'> Sign in to Account</h2> */}
//                         </div>
//                         <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
//                         <div className='flex flex-col items-center'>
//                         <div className='flex justify-center my-2'>
//                             <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
//                                 <FaFacebook className='text-sm'/>
//                             </a>
//                             <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
//                                 <FaLinkedinIn className='text-sm'/>
//                             </a>
//                             <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
//                                 <FaGoogle className='text-sm'/>
//                             </a>
//                         </div>
//                             <div className='bg-gray-100 w-64 p-2 flex items-center mb-4 mt-2'><FaRegEnvelope className='text-gray-400 m-2'/>
//                             <input type='email' name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1 border-none'/>
//                             </div>
//                             <div className='bg-gray-100 w-64 p-2 flex items-center mb-4'><MdLockOutline className='text-gray-400 m-2'/>
//                             <input type='password' name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1 border-none'/>
//                             </div>
//                             <div className='flex w-64 mb-5 justify-between'>
//                                 {/* <label className='flex items-center text-xs'>
//                                     <input type='checkbox' name='remember' className='mr-1'>Remember</input>
//                                     <a href='#' className='text-xs'>Forgot Password</a>
//                                 </label> */}
//                                 <a href="#" className="border-2 border-green rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white mt-4">Sigh In</a>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Sign in section  */}
//                     <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
//                     {/* <div className="w-2/5 bg-gradient-to-r from-teal-200 via-blue-300 to-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12"> */}
//                         <h2 className='text-white text-3xl font-bold mb-2'>Welcome to Tranquil 👋<br/></h2>
//                         <p className="mb-10 text-white">Tranquil is an Anonymous, Safe, and Effortless Go-To Feel Better platform that smartly connects you to the right peers and counselors to talk to & feel better.<br/>
//                         Our mission is to spread over a million smile and make the world happier and healthier.</p>
//                         <a href="#" className="border-2 border-green rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 mt-4">Sigh Up</a>
//                     </div>
//                     {/* Sign up section */}
//                 </div>
//             </main>
//         </div>


//     )
// }
// export default ExpertLogin;






// eslint-disable-next-line no-unused-vars
import React from 'react';
import {FaFacebook, FaGoogle, FaLinkedinIn, FaRegEnvelope} from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'

const ExpertLogin = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-108 mt-20">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4x'>
                    <div className='w-3/5 p-5'>
                        <div className="text-left font-bold">
                            <span className="text-blue-500
                            mb-2">Tranquil</span>
                        </div>
                        <div className="py-10">
                            <h2 className='text-3xl font-bold text-blue-500'> Sign in to Account</h2>
                            {/* <h2 className='text-3xl font-bold'> Sign in to Account</h2> */}
                        </div>
                        <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
                        <div className='flex flex-col items-center'>
                        <div className='flex justify-center my-2'>
                            <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                                <FaFacebook className='text-sm'/>
                            </a>
                            <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                                <FaLinkedinIn className='text-sm'/>
                            </a>
                            <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                                <FaGoogle className='text-sm'/>
                            </a>
                        </div>
                            <div className='bg-gray-100 w-64 p-2 flex items-center mb-4 mt-2'><FaRegEnvelope className='text-gray-400 m-2'/>
                            <input type='email' name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1 border-none'/>
                            </div>
                            <div className='bg-gray-100 w-64 p-2 flex items-center mb-4'><MdLockOutline className='text-gray-400 m-2'/>
                            <input type='password' name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1 border-none'/>
                            </div>
                            <div className='flex w-64 mb-5 justify-between'>
                                {/* <label className='flex items-center text-xs'>
                                    <input type='checkbox' name='remember' className='mr-1'>Remember</input>
                                    <a href='#' className='text-xs'>Forgot Password</a>
                                </label> */}
                                <a href="/expertprofile" className="border-2 border-green rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white mt-4">Sigh In</a>
                            </div>
                        </div>
                    </div>
                    {/* Sign in section  */}
                    <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                    {/* <div className="w-2/5 bg-gradient-to-r from-teal-200 via-blue-300 to-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12"> */}
                        <h2 className='text-white text-3xl font-bold mb-2'>Welcome to Tranquil 👋<br/></h2>
                        <p className="mb-10 text-white">Tranquil is an Anonymous, Safe, and Effortless Go-To Feel Better platform that smartly connects you to the right peers and counselors to talk to & feel better.<br/>
                        Our mission is to spread over a million smile and make the world happier and healthier.</p>
                        <a href="#" className="border-2 border-green rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500 mt-4">Sigh Up</a>
                    </div>
                    {/* Sign up section */}
                </div>
            </main>
        </div>


    )
}
export default ExpertLogin;