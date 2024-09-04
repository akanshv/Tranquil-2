// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
// import './Therapy.css';
import axios from 'axios';
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
const Therapy = () => {
  const [expertArray, setExpertArray] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.auth.user);
  const [formData,setFormData]=useState();
  const Navigate=useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData({ ...formData, [name]: value });
  };


  function isAtLeastTwoDaysAhead(dateTimeObj) {
    // Parse date and time strings
    const { date, time } = dateTimeObj;
    const dateTimeString = `${date}T${time}`;
    const dateTime = new Date(dateTimeString);
  
    // Get current date and time
    const now = new Date();
  
    // Calculate the difference in milliseconds between the provided date and the current date
    const differenceInMilliseconds = dateTime.getTime() - now.getTime();
  
    // Convert milliseconds to days
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
  
    // Check if the difference is at least 2 days
    return differenceInDays >= 2;
  }

  const handleSubmit = async(id) => {
    
    // Here you can submit the formData to your backend or perform any other action
    console.log(id,formData);
    if(!isAtLeastTwoDaysAhead(formData)){
      toast.error("Schedule should be atleast 2 days in future", {
        duration: 4000,
        position: "top-right",
      });
      return;
    }
    
    try {
      //console.log(user);
      
      if (user) {
        // Assuming you are using React Router for routing
        
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/expert/slotmaker/${id}`,
          formData,{
            headers: {
              authorization: user.token,
            },
          }
        );
        
        toast.success(`${response.data.message}`, {
          duration: 4000,
          position: "top-right",
        });
        console.log(response);
        setLoading(false);
      } else {
        toast.error("First Login or Signup to access", {
          duration: 4000,
          position: "top-right",
        });
        Navigate("/user/login");
      }
      // Assuming you are using React Router for routing
    } catch (error) {
      console.error("Error in Slot Booking:", error);
      toast.error("Error in Slot Booking", {
        duration: 4000,
        position: "top-right",
      });
      // Handle error, show error message, or redirect to an error page
      setLoading(false);
    }
    // Send comment data to backend
    // Reset comment input
  

    
  };


  
  useEffect(() => {


    const fetchExperts = async () => {
      try {
        if(user){
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/therapy`);
        console.log(response.data.expertarray);
        setExpertArray(response.data.expertarray);
        setLoading(false);
  
        }
        else{
          toast.error('First Login or Signup to access',{
            duration: 4000,
            position: 'top-right',
          });
          Navigate('/user/login')
        }
      } catch (error) {
        console.error('Error fetching experts:', error);
        setLoading(false);
      }
    };
    fetchExperts();
  }, []);
  
  return (
    <section>
       <div className="row">
        <div className="mt-[8rem] headimg flex justify-center">
          <img className='rounded-full' src="https://i.imgur.com/ujX2KRl.png " alt="" />
        </div>
      </div>
    
    <div>
        <form action="/therapy/newtherapist" method="get" >
          <div className="upper-text">
            <p className="flex justify-center items-center heading2 text-gray-800 text-2xl">
              Start your own journey as therapist in Tranquil
              <button type="submit" className="m-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md">
  Join here
</button>

            </p>
          </div>
        </form>
      </div>
      <div className="container py-5">
        
        {/* Form for applying */}
      
      </div>

      {/* List of experts */}
      <ul id="expertlist">
        {expertArray.map((experty) => (
          <div key={experty._id} className="container py-5 pt-3 max-w-5xl mx-auto ">
            <div className="row justify-content-center mb-3">
              <div className="col-md-12 col-xl-10">
                <div className="card shadow-2xl border-2xl rounded-lg">
                  <div className="card-body p-6">
                    <div className="flex items-center">
                      <div className="w-24 h-24 bg-cover bg-center rounded-full mr-6">
                        <img src={experty.pfp} className="w-full h-full rounded-full" alt="Profile" />
                      </div>
                      <div>
                        <h5 className="text-2xl font-semibold mb-2">{experty.Name}</h5>
                        <div className="flex items-center text-gray-600">
                          {experty.Happyno ? (
                            <span className="mr-2">{experty.Happyno} Happy Sessions</span>
                          ) : (
                            <span className="mr-2">Total Sessions: {experty.Sessionno}</span>
                          )}
                        </div>
                        {experty.ExpertsIn && experty.ExpertsIn.map((tag, index) => (
                          <div key={index} className="mt-1 mb-0 text-gray-500">
                            <span className="mr-1">•</span>
                            <span>{tag}</span>
                          </div>
                        ))}
                        <p className="text-truncate mb-4 mt-2">{experty.Experience} yr of experience</p>
                      </div>
                      <div className="ml-auto">
                        <h6 className="text-success text-2xl">₹ {experty.Charge}/Sessions</h6>
                        <div className="flex flex-col mt-4">
                          <div className="body">
                              <label htmlFor="date" className="font-semibold"><strong>Appointment Date :</strong></label>
                              <input type="date" id="date" min="2023-04-26" name="date" className="datePickerId border border-gray-300 rounded p-1 mt-2 w-full" required  onChange={handleChange} />
                              <label htmlFor="time" className="font-semibold mt-2"><strong>Appointment Time :</strong></label>
                              <input type="time" id="time" name="time" className="mt-1 mb-3 timePickerId border border-gray-300 rounded p-1 w-full" required onChange={handleChange} />
                              <h6 className="teller"></h6>
                          </div>
                          <div className="mt-3">
                            <button  onClick={()=>handleSubmit(experty._id)}  className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue ms-6 timebutton" >Request Slot</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        ))}
      </ul>
    </section>
  );
};

export default Therapy;


