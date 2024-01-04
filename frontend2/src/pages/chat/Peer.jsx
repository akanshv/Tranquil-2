import React from 'react';
import './Chat.css';
import './Style.css';
import './Listner.css';
import './Peer.css';

const Peer = () => {
    return (
        <>
            {/* <div className="flex justify-center chat-div gradient">
                <img
                    src="https://i.imgur.com/7NrYfBD.png"
                    className="w-65 border-rounded-4rem mt-1 chat-banner"
                    alt="chat"
                />
            </div> */}

            <section className="gradient-custom">
            <div className="pt-[8rem] headimg flex justify-center">
          <img className='rounded-full  ' src="https://i.imgur.com/7NrYfBD.png0" alt="" />
            </div>
                <div className="mx-auto">
                    <div className="listening">
                        <h3 className="text-center pt-5">
                            Vent Out.....Brad Pitt is Listening You
                        </h3>
                    </div>
                    <div className="flex justify-center items-center h-90">
                        <div className="md:col-6 lg:col-7 xl:col-7">
                            <ul className="list-none text-white">
                                <li className="flex justify-between mb-4">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                        alt="avatar"
                                        className="rounded-full self-start me-3 shadow-strong-1"
                                        width="60"
                                    />
                                    <div className="card mask-custom">
                                        <div className="card-header justify-between p-3">
                                            <p className="font-bold mb-0">Brad Pitt</p>
                                            <p className="text-light small mb-0">
                                                <i className="far fa-clock"></i> 12 mins ago
                                            </p>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex justify-between mb-4">
                                    <div className="card mask-custom w-full">
                                        <div className="card-header justify-between p-3">
                                            <p className="font-bold mb-0">Lara Croft</p>
                                            <p className="text-light small mb-0">
                                                <i className="far fa-clock"></i> 13 mins ago
                                            </p>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0">
                                                Sed ut perspiciatis unde omnis iste natus error sit
                                                voluptatem accusantium doloremque laudantium.
                                            </p>
                                        </div>
                                    </div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                                        alt="avatar"
                                        className="rounded-full self-start ms-3 shadow-strong-1"
                                        width="60"
                                    />
                                </li>
                                <li className="flex justify-between mb-4">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                        alt="avatar"
                                        className="rounded-full self-start me-3 shadow-strong-1"
                                        width="60"
                                    />
                                    <div className="card mask-custom">
                                        <div className="card-header justify-between p-3">
                                            <p className="font-bold mb-0">Brad Pitt</p>
                                            <p className="text-light small mb-0">
                                                <i className="far fa-clock"></i> 10 mins ago
                                            </p>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="form-outline form-white">
                                        <textarea
                                            className="form-control w-full"
                                            id="textAreaExample3"
                                            rows="4"
                                        ></textarea>
                                        <label className="form-label" htmlFor="textAreaExample3">
                                            Message
                                        </label>
                                    </div>
                                </li>
                                <button
                                    type="button"
                                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                                >
                                    Send
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Peer;