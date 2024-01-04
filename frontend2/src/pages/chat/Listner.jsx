import React from 'react';
import './Chat.css';
import './Style.css';
import './Listner.css';


const Listner = () => {
    return (
        <>
         <section className="gradient-custom">
            <div className="pt-[8rem] headimg flex justify-center">
          <img className='rounded-full  ' src="https://i.imgur.com/7NrYfBD.png0" alt="" />
            </div>

           
                <div class="flex justify-center items-center h-90">

                    <div class="card w-100 m-0 p-0">

                        <div className="container py-5">
                            <div className="row">
                                <div className="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0">
                                    <h5
                                        style={{
                                            fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                                            fontSize: '2rem',
                                        }}
                                        className="font-weight-bold mb-3 text-center text-white"
                                    >
                                        Chatting Requests...
                                    </h5>

                                    <div className="flex justify-center items-center h-screen w-full">
                                        <div className="card mask-custom">
                                            <div className="card-body">
                                                <ul class="list-none m-0">
                                                    <li className="p-2 border-b border-white border-opacity-30">
                                                        <a href="#!" className="flex justify-between items-center text-white">
                                                            <div className="flex flex-row">
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                                                                    alt="avatar"
                                                                    className="rounded-full self-center me-3 shadow-lg"
                                                                    width="40"
                                                                />
                                                                <div className="pt-1">
                                                                    <p className="font-bold mb-0">John Doe</p>
                                                                    <p className="text-white text-sm">Hello, Are you there?</p>
                                                                </div>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="text-sm text-white mb-1">Just now</p>
                                                                <span className="badge bg-danger float-right">1</span>
                                                            </div>
                                                        </a>
                                                    </li>

                                                    <li className="p-2 border-b border-white border-opacity-30">
                                                        <a href="#!" className="flex justify-between items-center text-white">
                                                            <div className="flex flex-row">
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                                                                    alt="avatar"
                                                                    className="rounded-full self-center me-3 shadow-1-strong"
                                                                    width="40"
                                                                />
                                                                <div className="pt-1">
                                                                    <p className="font-bold mb-0">Danny Smith</p>
                                                                    <p className="text-white text-sm">Lorem ipsum dolor sit</p>
                                                                </div>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="text-sm text-white mb-1">5 mins ago</p>
                                                                <span className="badge bg-danger float-right">1</span>
                                                            </div>
                                                        </a>
                                                    </li>

                                                    <li className="p-2 border-b border-white border-opacity-30">
                                                        <a href="#!" className="flex justify-between items-center text-white">
                                                            <div className="flex flex-row">
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                                                                    alt="avatar"
                                                                    className="rounded-full self-center me-3 shadow-1-strong"
                                                                    width="40"
                                                                />
                                                                <div className="pt-1">
                                                                    <p className="font-bold mb-0">Alex Steward</p>
                                                                    <p className="text-white text-sm">Lorem ipsum dolor sit.</p>
                                                                </div>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="text-sm text-white mb-1">Yesterday</p>
                                                                <span className="badge bg-danger float-right">1</span>
                                                            </div>
                                                        </a>
                                                    </li>

                                                    <li className="p-2 border-b border-white border-opacity-30">
                                                        <a href="#!" className="flex justify-between items-center text-white">
                                                            <div className="flex flex-row">
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                                                                    alt="avatar"
                                                                    className="rounded-full self-center me-3 shadow-1-strong"
                                                                    width="40"
                                                                />
                                                                <div className="pt-1">
                                                                    <p className="font-bold mb-0">Ashley Olsen</p>
                                                                    <p className="text-white text-sm">Lorem ipsum dolor sit.</p>
                                                                </div>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="text-sm text-white mb-1">Yesterday</p>
                                                                <span className="badge bg-danger float-right">1</span>
                                                            </div>
                                                        </a>
                                                    </li>

                                                    <li className="p-2 border-b border-white border-opacity-30">
                                                        <a href="#!" className="flex justify-between items-center text-white">
                                                            <div className="flex flex-row">
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                                                                    alt="avatar"
                                                                    className="rounded-full self-center me-3 shadow-1-strong"
                                                                    width="40"
                                                                />
                                                                <div className="pt-1">
                                                                    <p className="font-bold mb-0">Kate Moss</p>
                                                                    <p className="text-white text-sm">Lorem ipsum dolor sit.</p>
                                                                </div>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="text-sm text-white mb-1">Yesterday</p>
                                                                <span className="badge bg-danger float-right">1</span>
                                                            </div>
                                                        </a>
                                                    </li>

                                                    <li className="p-2 border-b border-white border-opacity-30">
                                                        <a href="#!" className="flex justify-between items-center text-white">
                                                            <div className="flex flex-row">
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                                                                    alt="avatar"
                                                                    className="rounded-full self-center me-3 shadow-1-strong"
                                                                    width="40"
                                                                />
                                                                <div className="pt-1">
                                                                    <p className="font-bold mb-0">Lara Croft</p>
                                                                    <p className="text-white text-sm">Lorem ipsum dolor sit.</p>
                                                                </div>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="text-sm text-white mb-1">Yesterday</p>
                                                                <span className="badge bg-danger float-right">1</span>
                                                            </div>
                                                        </a>
                                                    </li>

                                                    <li className="p-2 border-b border-white border-opacity-30">
                                                        <a href="#!" className="flex justify-between items-center text-white">
                                                            <div className="flex flex-row">
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                                    alt="avatar"
                                                                    className="rounded-full self-center me-3 shadow-1-strong"
                                                                    width="40"
                                                                />
                                                                <div className="pt-1">
                                                                    <p className="font-bold mb-0">Brad Pitt</p>
                                                                    <p className="text-white text-sm">Lorem ipsum dolor sit.</p>
                                                                </div>
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="text-sm text-white mb-1">5 mins ago</p>
                                                                <span className="badge bg-danger float-right">1</span>
                                                            </div>
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="card w-100 m-0 p-0">

                        <div className="col-md-6 col-lg-7 col-xl-7">
                            <div className="flex justify-center items-center h-screen">
                                <div className="card mask-custom">
                                    <div className="card-body">
                                        <ul className="list-none text-white">
                                            <li className="flex justify-between mb-4">
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                    alt="avatar"
                                                    className="rounded-full self-start me-3 shadow-1-strong"
                                                    width="60"
                                                />
                                                <div className="card bg-white bg-opacity-10">
                                                    <div className="card-header flex justify-between p-3 border-b border-white border-opacity-30">
                                                        <p className="font-bold mb-0">Brad Pitt</p>
                                                        <p className="text-light text-sm mb-0">
                                                            <i className="far fa-clock"></i> 12 mins ago
                                                        </p>
                                                    </div>
                                                    <div className="card-body">
                                                        <p className="mb-0">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="flex justify-between mb-4">
                                                <div className="card bg-white bg-opacity-10 w-full">
                                                    <div className="card-header flex justify-between p-3 border-b border-white border-opacity-30">
                                                        <p className="font-bold mb-0">Lara Croft</p>
                                                        <p className="text-light text-sm mb-0">
                                                            <i className="far fa-clock"></i> 13 mins ago
                                                        </p>
                                                    </div>
                                                    <div className="card-body">
                                                        <p className="mb-0">
                                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                                        </p>
                                                    </div>
                                                </div>
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                                                    alt="avatar"
                                                    className="rounded-full self-start ms-3 shadow-1-strong"
                                                    width="60"
                                                />
                                            </li>
                                            <li className="flex justify-between mb-4">
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                    alt="avatar"
                                                    className="rounded-full self-start me-3 shadow-1-strong"
                                                    width="60"
                                                />
                                                <div className="card bg-white bg-opacity-10">
                                                    <div className="card-header flex justify-between p-3 border-b border-white border-opacity-30">
                                                        <p className="font-bold mb-0">Brad Pitt</p>
                                                        <p className="text-light text-sm mb-0">
                                                            <i className="far fa-clock"></i> 10 mins ago
                                                        </p>
                                                    </div>
                                                    <div className="card-body">
                                                        <p className="mb-0">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                                            dolore magna aliqua.
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="form-outline form-white">
                                                    <textarea className="form-control bg-transparent text-white w-full" id="textAreaExample3" rows="4"></textarea>
                                                    <label className="form-label text-white" htmlFor="textAreaExample3">
                                                        Message
                                                    </label>
                                                </div>
                                            </li>
                                            <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                                                Send
                                            </button>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>




            </section>
        </>
    );
};

export default Listner;
