import React, { useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import './AdminLogin.css';
import './AdminProfile.css'
import logo from '../../assets/images/logo copy.png';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/admin/adminlogin', formData);
      // Handle success, e.g., redirect or show a success message
      console.log(response.data);
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error(error);
    }
  };

  return (
    <section className="h-screen gradient-form gradient flex justify-center items-center">
      {/* Include Flash Component here */}
      <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <div className="mx-auto card rounded-3 logincard text-black animate_animated animate_backInLeft" data-aos="flip-left">
          <div className="row g-0">
            <div className="col-lg-6 flex items-center justify-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <div className="logo-div">
                  <img src={logo} style={{ width: '185px', marginLeft: '2rem' }} alt="logo" />
                </div>
                <h4 className="mb-4 white text-center">Hey there👋</h4>
                <h4 className="mb-4 white text-center">Welcome to Tranquil !</h4>
                <p className="large mb-0 white">Tranquil is an Anonymous, Safe, and Effortless Go-To Feel Better platform that smartly connects you to the right peers and counselors to talk to & feel better.</p>
                <br />
                <p className="large mb-0 white">Our mission is to spread over a million smiles and make the world happier and healthier.</p>
              </div>
            </div>
            <div className="col-lg-6 bg-white"> {/* Change bg-whitesmoke to bg-white */}
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center">
                  <h4 className="mt-1 mb-5 pb-1" id="sign-in">Admin Login</h4>
                </div>
                <form onSubmit={handleSubmit} noValidate className="validated-form flex flex-col items-center">
                  <p className='information' style={{ textAlign: 'center' }}>Please login to your account<br /></p>
                  <div className="form-group mb-5">
                    <input type="text" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Email" onChange={handleChange} required />
                    <div className="valid-feedback mb-2">
                      Username Looks Good
                    </div>
                  </div>
                  <div className="form-group mb-5">
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={handleChange} required />
                    <div className="valid-feedback mb-2">
                      Password Looks Good
                    </div>
                  </div>
                  <div className="text-center pt-1 mb-5 pb-1">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800" onClick={() => window.location.href = `/adminside`}>Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;