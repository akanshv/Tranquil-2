// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './therapy.css';
// // import './styles.css';

// const DoctorRegister = () => {
//   const [password, setPassword] = useState('');
//   const [display, setDisplay] = useState('');
//   const [check, setCheck] = useState(0);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}$/;

//     if (!(password.match(paswd))) {
//       setDisplay('Password must be greater than 4 letters containing uppercase, lowercase, and special characters');
//       return;
//     }

//     if (check === 0) {
     
//       axios.post('/expert/newtherapist', { password })
//         .then((response) => {
         
//         })
//         .catch((error) => {
          
//         });
//     }
//   };

//   useEffect(() => {
   
//   }, [password, check]);

//   return (
//     <div>
      
//       <div className="expert-div flex justify-center">
//         <img src="https://i.imgur.com/ujX2KRl.png" className="expert-banner" alt="expert" />
//       </div>
//       <section>
//         <div>
//           <h2 className="center heading1 pt-5">The Future of Healthcare Delivery is Changing, Be A Part of It!</h2>
//           <p className="center heading2" style={{ color: '#000000' }}>Capture the Digital Wave, Begin Your Own Online Tranquil Clinic Today</p>
//         </div>
//       </section>

// <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6">
//     <div className="feature-box white2" data-aos="zoom-in">
//         <img className='m-auto' src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/3-01.png" alt="First feature" />
//         <h4 className="bg-pink-300 py-2">Earn More Ethically</h4>
//         <h6>Consult clients on Tranquil, fix your own fees and give an additional 'ethical' boost to your earning.</h6>
//     </div>
//     <div className="feature-box white2" data-aos="zoom-in">
//         <img className='m-auto' src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/2-01.png" alt="Second feature" />
//         <h4 className="bg-green-300 py-2">See clients Online</h4>
//         <h6>See clients online who visit for follow-ups, discuss lab reports, or to get their drug dosage adjusted.</h6>
//     </div>
//     <div className="feature-box white2" data-aos="zoom-in">
//         <img className='m-auto' src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/enhance-online-practice100x100.png" alt="Third feature" />
//         <h4 className="bg-blue-300 py-2">Expand Reach</h4>
//         <h6>Bring an end to your one-zone practice and spread your presence beyond your own location.</h6>
//     </div>
// </section>

// <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6">
//     <div className="feature-box white2" data-aos="zoom-in">
//         <img className='m-auto' src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/more-time-more-money.png" alt="Fourth feature" />
//         <h4 className="bg-pink-300 py-2">Monetize Every Consultation</h4>
//         <h6>Convert all unpaid calls and annoying SMS/chats into paid ones by routing all your clients through Tranquil.</h6>
//     </div>
//     <div className="feature-box white2" data-aos="zoom-in">
//         <img className='m-auto' src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/learn-from-top-doctors.png" alt="Fifth feature" />
//         <h4 className="bg-green-300 py-2">Build reputation</h4>
//         <h6>Consult more clients, be known for your specialty, and build your reputation on the World Wide Web.</h6>
//     </div>
//     <div className="feature-box white2" data-aos="zoom-in">
//         <img className='m-auto' src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/let-smartphone-be-your-clinic.png" alt="Sixth feature" />
//         <h4 className="bg-blue-300 py-2">Ease Burden & Save Time</h4>
//         <h6>Tranquil's Practice Management helps save your time with its patient records, digital prescriptions, appointment schedulers etc.</h6>
//     </div>
// </section>

// <section className="gradient-form bg-img mt-5">
//     <div className="container py-5 h-200">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center h-200">
//             <div className="card rounded-3 mb-6 mx-5">
//                 <div className="grid grid-cols-1 md:flex md:items-center gradient-custom-2">
//                     <div className="text-white px-3 py-4 p-md-5 mx-md-4">
//                         <h4 className="mb-5 text-white text-center text-3xl">Clients are looking for doctors like you👋</h4>
//                         <h4 className="mb-4 text-white text-center text-lg">Why you'll love Tranquil</h4>
//                         <p className="text-lg mb-0">
//                             <ol>
//                                 <li>Simple, beautiful design - you will pick it up in minutes
//                                     Online Private Consultation for Personalized care
//                                     Answer Open Questions by clients and build your online reputation
//                                 </li>
//                                 <li>Answer Open Questions by clients and build your online reputation</li>
//                                 <li>Reduce no shows and increase patient connect with comprehensive set of Reminders</li>
//                                 <li>Record treatments and schedule visits in 1/4th the time compared to your diary or any other software</li>
//                                 <li>Magical apps that help you do everything else easily on the go</li>
//                             </ol>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="card mx-10">
//                 <div className="card-body p-md-5 mx-md-4">
//                     <div className="text-center">
//                         <h4 className="mt-1 mb-3  text-white font-extrabold pb-1" id="sign-in">Apply to Tranquil</h4>
//                         <p className="teller"></p>
//                     </div> 
                
//                     <form action="/expert/newtherapists" method="post" novalidate class="validated-form">
//     <div class="mb-4">
//         <label for="form2Example22" class="block text-sm font-medium text-gray-700">Name</label>
//         <input type="text" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name"
//             name="doctor[Name]" required
//             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
//     </div>

//     <div class="mb-4">
//         <label for="form2Example11" class="block text-sm font-medium text-gray-700">Email</label>
//         <input type="email" id="form2Example11" placeholder="Enter Email id" name='doctor[email]' required
//             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
//     </div>

//     <div class="mb-4">
//         <label for="form2Example11" class="block text-sm font-medium text-gray-700">Password</label>
//         <input type="password" id="password"
//             placeholder="length > 5 & Uppercase, symbol required" name='doctor[password]' required
//             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
//     </div>

//     <div class="flex flex-wrap mb-4">
//         <label class="block text-sm font-medium text-gray-700">Choose Area of Expertise</label>
//         <div class="w-full md:w-1/2">
            
//         </div>
//         <div class="w-full md:w-1/2">
           
//         </div>
//     </div>

//     <div class="flex flex-wrap mb-4">
//         <div class="w-full md:w-1/2">
//             <input type="number" id="form2Example22" placeholder="Experience Years" required name='doctor[yoe]'
//                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
//         </div>
//         <div class="w-full md:w-1/2">
//             <input type="number" id="form2Example33" placeholder="Charges/hour" required name='doctor[charge]'
//                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
//         </div>
//     </div>

//     <div class="mb-4">
//         <label for="image" class="block text-sm font-medium text-gray-700">Profile Pic</label>
//         <input type="text" id="image" placeholder="Paste the url here" required name="doctor[image]"
//             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
//     </div>

//     <div class="mb-4">
//         <label for="Document" class="block text-sm font-medium text-gray-700">Document to prove Expertise</label>
//         <input type="text" id="Document" aria-describedby="emailHelp" placeholder="Paste the url here" required
//             name="doctor[document]"
//             class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
//     </div>

//     <div class="text-center">
//         <button class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             type="submit">Apply</button>
//     </div>
// </form> 

                        
//                  </div>
//             </div>
//         </div>
//     </div>
// </section>



//       <script>
//         {`var display=document.querySelector('.teller');
//         var loginbutton=document.querySelector('.apply');
//         var password=document.querySelector('#password');
//         var regform=document.querySelector('.docregform');
//         check=0;
//         regform.addEventListener('submit',(event)=>{
//           event.preventDefault();
//           var paswd= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}$/;
//           if(!(password.value.match(paswd))){
//             display.textContent='Password must be greater than 4 letters containing uppercase lowercase and spl character';
//             return;
//           }
//           if(check===0){
//             regform.submit();
//           }
//         })`}
//       </script>
//     </div>
//   );
// };

// export default DoctorRegister;



import { useState, useEffect } from "react";
import axios from "axios";
import "./therapy.css";
import {
  FaFacebook,
  FaGoogle,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const DoctorRegister = () => {
  const [] =  useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    doctor: {
      rel: false,
      Wor: false,
      Teen: false,
      Sub: false,
      Sex: false,
      Harr: false,
      Lon: false,
      Anxiety: false,
      yoe: '',
      charge: '',
      image: '',
      document: ''
    }
  });

  const { name, email, password, doctor, yoe, charge, image, document } = formData;

  const [display, setDisplay] = useState("");
  const [check, setCheck] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({
      ...formData,
      doctor: {
        ...doctor,
        [name]: checked
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);

    try {
      const response = await axios.post('/expert/newtherapists', formData);
      console.log('Response from backend:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  // useEffect(() => {}, [password, check]);

  return (  
    <div>
      <div className="row">
        <div className="mt-[8rem] headimg flex justify-center">
          <img
            className="rounded-full"
            src="https://i.imgur.com/ujX2KRl.png "
            alt=""
          />
        </div>
      </div>

      <section>
        <div>
          <h2 className="center heading1 pt-5">
            The Future of Healthcare Delivery is Changing, Be A Part of It!
          </h2>
          <p className="center heading2" style={{ color: "#000000" }}>
            Capture the Digital Wave, Begin Your Own Online Tranquil Clinic
            Today
          </p>
        </div>
      </section>

      <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="feature-box white2" data-aos="zoom-in">
          <img className="m-auto"
            src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/3-01.png"
            alt="First feature"
          />
          <h4 className="bg-pink-300 py-2">Earn More Ethically</h4>
          <h6>
            Consult clients on Tranquil, fix your own fees and give an
            additional 'ethical' boost to your earning.
          </h6>
        </div>
        <div className="feature-box white2" data-aos="zoom-in">
          <img  className="m-auto"
            src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/2-01.png"
            alt="Second feature"
          />
          <h4 className="bg-green-300 py-2">See clients Online</h4>
          <h6>
            See clients online who visit for follow-ups, discuss lab reports, or
            to get their drug dosage adjusted.
          </h6>
        </div>
        <div className="feature-box white2" data-aos="zoom-in">
          <img className="m-auto"
            src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/enhance-online-practice100x100.png"
            alt="Third feature"
          />
          <h4 className="bg-red-300 py-2">Expand Reach</h4>
          <h6>
            Bring an end to your one-zone practice and spread your presence
            beyond your own location.
          </h6>
        </div>
      </section>

      <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="feature-box white2" data-aos="zoom-in">
          <img className="m-auto"
            src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/more-time-more-money.png"
            alt="Fourth feature"
          />
          <h4 className="bg-pink-300 py-2">Monetize Every Consultation</h4>
          <h6>
            Convert all unpaid calls and annoying SMS/chats into paid ones by
            routing all your clients through Tranquil.
          </h6>
        </div>
        <div className="feature-box white2" data-aos="zoom-in">
          <img className="m-auto"
            src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/learn-from-top-doctors.png"
            alt="Fifth feature"
          />
          <h4 className="bg-green-300 py-2">Build reputation</h4>
          <h6>
            Consult more clients, be known for your specialty, and build your
            reputation on the World Wide Web.
          </h6>
        </div>
        <div className="feature-box white2" data-aos="zoom-in">
          <img className="m-auto"
            
            src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/let-smartphone-be-your-clinic.png"
            alt="Sixth feature"
          />
          <h4 className="bg-red-300 py-2">Ease Burden & Save Time</h4>
          <h6>
            Tranquil's Practice Management helps save your time with its patient
            records, digital prescriptions, appointment schedulers etc.
          </h6>
        </div>
      </section>
      <section
        id="features"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      ></section>
      <form onSubmit={handleSubmit}>
      <section>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-108 mt-20 mb-20">
          <head>
            <link rel="icon" href="/favicon.ico" />
          </head>
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4x">
              <div className="w-3/5 p-5">
                <div className="text-left font-bold">
                  <span
                    className="text-red-500
                            mb-2"
                  >
                    Tranquil
                  </span>
                </div>
                <div className="py-10">
                  <h2 className="text-3xl font-bold text-red-500">
                    {" "}
                    Apply To Tranquil
                  </h2>
                  {/* <h2 className='text-3xl font-bold'> Sign in to Account</h2> */}
                </div>
                <div className="border-2 w-10 border-red-500 inline-block mb-2"></div>
                <div className="flex flex-col items-center">
                  {/* <div className="flex justify-center my-2">
                    <a
                      href="#"
                      className="border-2 border-gray-200 rounded-full p-3 mx-1"
                    >
                      <FaFacebook className="text-sm" />
                    </a>
                    <a
                      href="#"
                      className="border-2 border-gray-200 rounded-full p-3 mx-1"
                    >
                      <FaLinkedinIn className="text-sm" />
                    </a>
                    <a
                      href="#"
                      className="border-2 border-gray-200 rounded-full p-3 mx-1"
                    >
                      <FaGoogle className="text-sm" />
                    </a>
                  </div> */}
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-4">
                    <FaRegEnvelope className="text-gray-400 m-2" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={handleChange}
                      className="bg-gray-100 outline-none text-sm flex-1 border-none"
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-4 mt-2">
                    <FaRegEnvelope className="text-gray-400 m-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleChange}
                      className="bg-gray-100 outline-none text-sm flex-1 border-none"
                    />
                  </div>
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-4">
                    <MdLockOutline className="text-gray-400 m-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={handleChange}
                      className="bg-gray-100 outline-none text-sm flex-1 border-none"
                    />
                  </div>

                  <div class="ml-4 grid grid-cols-2 gap-4">
                    <div class="w-full md:w-1/2">
                      <div class="w-full md:w-1/2">
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="doctor[rel]"
                          value="{rel}"
                          onChange={handleCheckboxChange}
                          class="form-checkbox h-5 w-5 text-indigo-600"
                        />
                        <label for="vehicle1" class="ml-2 text-gray-700">
                          {" "}
                          Relationship
                        </label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle2"
                          name="doctor[Wor]"
                          value="{Wor}"
                          onChange={handleCheckboxChange}
                          class="form-checkbox h-5 w-5 text-indigo-600"
                        />
                        <label for="vehicle2" class="ml-2 text-gray-700">
                          {" "}
                          Work Stress
                        </label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle3"
                          name="doctor[Teen]"
                          value="{Teen}"
                          onChange={handleCheckboxChange}
                          class="form-checkbox h-5 w-5 text-indigo-600"
                        />
                        <label for="vehicle3" class="ml-2 text-gray-700">
                          {" "}
                          Teen Problems
                        </label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle4"
                          name="doctor[Sub]"
                          value="{Sub}"
                          onChange={handleCheckboxChange}
                          class="form-checkbox h-5 w-5 text-indigo-600"
                        />
                        <label for="vehicle4" class="ml-2 text-gray-700">
                          {" "}
                          Substance Abuse
                        </label>
                        <br />
                      </div>
                    </div>
                    <div class="w-full md:w-1/2">
                      <div class="w-full md:w-1/2">
                        <input
                          type="checkbox"
                          id="vehicle5"
                          name="doctor[Sex]"
                          value="{Sex}"
                          onChange={handleCheckboxChange}
                          class="form-checkbox h-5 w-5 text-indigo-600"
                        />
                        <label for="vehicle5" class="ml-2 text-gray-700">
                          {" "}
                          Sexual Abuse
                        </label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle6"
                          name="doctor[Harr]"
                          value="{Harr}"
                          onChange={handleCheckboxChange}
                          class="form-checkbox h-5 w-5 text-indigo-600"
                        />
                        <label for="vehicle6" class="ml-2 text-gray-700">
                          {" "}
                          Harassment
                        </label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle7"
                          name="doctor[Lon]"
                          value="{Lon}"
                          onChange={handleCheckboxChange}
                          class="form-checkbox h-5 w-5 text-indigo-600"
                        />
                        <label for="vehicle7" class="ml-2 text-gray-700">
                          {" "}
                          Loneliness
                        </label>
                        <br />
                        <input
                          type="checkbox"
                          id="vehicle8"
                          name="doctor[Anxiety]"
                          value="{Anxiety}"
                          onChange={handleCheckboxChange}
                          class="form-checkbox h-5 w-5 text-indigo-600"
                        />
                        <label for="vehicle8" class="ml-2 text-gray-700">
                          {" "}
                          Anxiety
                        </label>
                        <br />
                      </div>
                    </div>
                  </div>

                  <div class="ml-4 flex flex-wrap">
                    <div class="w-full mt-6 md:w-1/2">
                      <input
                        type="number"
                        id="form2Example22"
                        class="form-control w-full md:w-1/2 h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        placeholder="Experience Years"
                        required
                        value={yoe}
                        onChange={handleChange}
                        name="doctor[yoe]"
                      />
                    </div>
                    <div class="w-full mt-6 md:w-1/2">
                      <input
                        type="number"
                        id="form2Example33"
                        class="form-control w-full md:w-1/2 h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        placeholder="Charges/hour"
                        required
                        value={charge}
                        onChange={handleChange}
                        name="doctor[charge]"
                      />
                    </div>
                  </div>

                  <div class="form-group mb-2 mt-6">
                    <label class="form-label" for="image">
                      Profile Pic
                    </label>
                    <input
                      type="text"
                      class="form-control w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      id="image"
                      placeholder="Paste the URL here"
                      required
                      value={image}
                      onChange={handleChange}
                      name="doctor[image]"
                    />
                  </div>

                  <div class="form-group mb-2 mt-6">
                    <label class="form-label" for="Document">
                      Document to prove Expertise
                    </label>
                    <input
                      type="text"
                      class="form-control w-2/3 h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                      id="Document"
                      placeholder="Paste the URL here"
                      required
                      value={document}
                      onChange={handleChange}
                      name="doctor[document]"
                    />
                  </div>

                  <div className="flex w-64 mb-5 justify-center">
                    <button                  
                      type="submit"
                      href="#"
                      className="border-2 border-green rounded-full px-12 py-2 inline-block font-semibold hover:bg-red-500 hover:text-white mt-4"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
              {/* Sign in section  */}
              <div className="w-2/5 bg-red-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                <h2 className="text-white text-3xl font-bold mb-2">
                  Clients are looking for doctors like you👋
                  <br />
                </h2>
                <p className="mb-10 text-white">
                  Simple, beautiful design - you will pick it up in minutes
                  Online Private Consultation for Personalized care Answer Open
                  Questions by clients and build your online reputation
                </p>
                <button 
                  href="#"
                  className="border-2 border-green rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-500 mt-4"
                >
                  Sigh Up
                </button>
              </div>
              {/* Sign up section */}
            </div>
          </main>
        </div>
      </section>
      </form>
      
    </div>
  );
};
export default DoctorRegister;

