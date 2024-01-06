import { useState, useEffect } from 'react';
import axios from 'axios';
import './therapy.css';
// import './styles.css';

const DoctorRegister = () => {
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState('');
  const [check, setCheck] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}$/;

    if (!(password.match(paswd))) {
      setDisplay('Password must be greater than 4 letters containing uppercase, lowercase, and special characters');
      return;
    }

    if (check === 0) {
     
      axios.post('/expert/newtherapist', { password })
        .then((response) => {
         
        })
        .catch((error) => {
          
        });
    }
  };

  useEffect(() => {
   
  }, [password, check]);

  return (
    <div>
      
      <div className="expert-div flex justify-center">
        <img src="https://i.imgur.com/ujX2KRl.png" className="expert-banner" alt="expert" />
      </div>
      <section>
        <div>
          <h2 className="center heading1 pt-5">The Future of Healthcare Delivery is Changing, Be A Part of It!</h2>
          <p className="center heading2" style={{ color: '#000000' }}>Capture the Digital Wave, Begin Your Own Online Tranquil Clinic Today</p>
        </div>
      </section>

<section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="feature-box white2" data-aos="zoom-in">
        <img src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/3-01.png" alt="First feature" />
        <h4 className="bg-pink-300 py-2">Earn More Ethically</h4>
        <h6>Consult clients on Tranquil, fix your own fees and give an additional 'ethical' boost to your earning.</h6>
    </div>
    <div className="feature-box white2" data-aos="zoom-in">
        <img src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/2-01.png" alt="Second feature" />
        <h4 className="bg-green-300 py-2">See clients Online</h4>
        <h6>See clients online who visit for follow-ups, discuss lab reports, or to get their drug dosage adjusted.</h6>
    </div>
    <div className="feature-box white2" data-aos="zoom-in">
        <img src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/enhance-online-practice100x100.png" alt="Third feature" />
        <h4 className="bg-blue-300 py-2">Expand Reach</h4>
        <h6>Bring an end to your one-zone practice and spread your presence beyond your own location.</h6>
    </div>
</section>

<section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="feature-box white2" data-aos="zoom-in">
        <img src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/more-time-more-money.png" alt="Fourth feature" />
        <h4 className="bg-pink-300 py-2">Monetize Every Consultation</h4>
        <h6>Convert all unpaid calls and annoying SMS/chats into paid ones by routing all your clients through Tranquil.</h6>
    </div>
    <div className="feature-box white2" data-aos="zoom-in">
        <img src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/learn-from-top-doctors.png" alt="Fifth feature" />
        <h4 className="bg-green-300 py-2">Build reputation</h4>
        <h6>Consult more clients, be known for your specialty, and build your reputation on the World Wide Web.</h6>
    </div>
    <div className="feature-box white2" data-aos="zoom-in">
        <img className="d-inline" src="https://doctor.lybrate.com/img/start-your-own-lybrate-clinic/let-smartphone-be-your-clinic.png" alt="Sixth feature" />
        <h4 className="bg-blue-300 py-2">Ease Burden & Save Time</h4>
        <h6>Tranquil's Practice Management helps save your time with its patient records, digital prescriptions, appointment schedulers etc.</h6>
    </div>
</section>

<section className="gradient-form bg-img mt-5">
    <div className="container py-5 h-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center h-200">
            <div className="card rounded-3 text-black mb-6 mx-5">
                <div className="grid grid-cols-1 md:flex md:items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-5 text-white text-center text-3xl">Clients are looking for doctors like you👋</h4>
                        <h4 className="mb-4 text-white text-center text-lg">Why you'll love Tranquil</h4>
                        <p className="text-lg mb-0">
                            <ol>
                                <li>Simple, beautiful design - you will pick it up in minutes
                                    Online Private Consultation for Personalized care
                                    Answer Open Questions by clients and build your online reputation
                                </li>
                                <li>Answer Open Questions by clients and build your online reputation</li>
                                <li>Reduce no shows and increase patient connect with comprehensive set of Reminders</li>
                                <li>Record treatments and schedule visits in 1/4th the time compared to your diary or any other software</li>
                                <li>Magical apps that help you do everything else easily on the go</li>
                            </ol>
                        </p>
                    </div>
                </div>
            </div>
            <div className="card mx-10">
                <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                        <h4 className="mt-1 mb-3 pb-1" id="sign-in">Apply to Tranquil</h4>
                        <p className="teller"></p>
                    </div> 
                
                    <form action="/expert/newtherapists" method="post" novalidate class="validated-form">
    <div class="mb-4">
        <label for="form2Example22" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name"
            name="doctor[Name]" required
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    </div>

    <div class="mb-4">
        <label for="form2Example11" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="form2Example11" placeholder="Enter Email id" name='doctor[email]' required
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    </div>

    <div class="mb-4">
        <label for="form2Example11" class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password"
            placeholder="length > 5 & Uppercase, symbol required" name='doctor[password]' required
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    </div>

    <div class="flex flex-wrap mb-4">
        <label class="block text-sm font-medium text-gray-700">Choose Area of Expertise</label>
        <div class="w-full md:w-1/2">
            
        </div>
        <div class="w-full md:w-1/2">
           
        </div>
    </div>

    <div class="flex flex-wrap mb-4">
        <div class="w-full md:w-1/2">
            <input type="number" id="form2Example22" placeholder="Experience Years" required name='doctor[yoe]'
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>
        <div class="w-full md:w-1/2">
            <input type="number" id="form2Example33" placeholder="Charges/hour" required name='doctor[charge]'
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>
    </div>

    <div class="mb-4">
        <label for="image" class="block text-sm font-medium text-gray-700">Profile Pic</label>
        <input type="text" id="image" placeholder="Paste the url here" required name="doctor[image]"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    </div>

    <div class="mb-4">
        <label for="Document" class="block text-sm font-medium text-gray-700">Document to prove Expertise</label>
        <input type="text" id="Document" aria-describedby="emailHelp" placeholder="Paste the url here" required
            name="doctor[document]"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    </div>

    <div class="text-center">
        <button class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit">Apply</button>
    </div>
</form> 

                        
                 </div>
            </div>
        </div>
    </div>
</section>



      <script>
        {`var display=document.querySelector('.teller');
        var loginbutton=document.querySelector('.apply');
        var password=document.querySelector('#password');
        var regform=document.querySelector('.docregform');
        check=0;
        regform.addEventListener('submit',(event)=>{
          event.preventDefault();
          var paswd= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,15}$/;
          if(!(password.value.match(paswd))){
            display.textContent='Password must be greater than 4 letters containing uppercase lowercase and spl character';
            return;
          }
          if(check===0){
            regform.submit();
          }
        })`}
      </script>
    </div>
  );
};

export default DoctorRegister;