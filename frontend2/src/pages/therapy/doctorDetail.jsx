import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Doctordetails.css'

const DoctorDetail = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/doctor/adminprofile/644528c526df9c16c244b1fd');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sabkuch">
      <div className="expert-div flex justify-center">
        <img src="https://i.imgur.com/ujX2KRl.png" className="expert-banner" alt="expert" />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        </div>
      ) : (
        <>
          <section id="first" className="d-flex justify-content-center align-items-center">
            <div className="container py-5">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-8">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="d-flex justify-content-center align-items-center mb-3">
                          <h2 className="text-right"><strong>My Profile</strong></h2>
                        </div>
                        <div className="card-body text-center">
                          <img src={data.pfp} alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                          <h5 className="my-3">{data.Name}</h5>
                          <p className="text-muted mb-1">{data.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Update Profile Section */}
          <section id="second">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-8">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="d-flex justify-content-center align-items-center mb-3">
                        <h2 className="text-right"><strong>Update Profile</strong></h2>
                      </div>
                      <form action="/expert/updateprofile" noValidate className='validated-form' method="post" id="updateprofile">
                        {/* Form content */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {!data.pendingstatus && (
            <section id="third" className="d-flex justify-content-center align-items-center mt-5 mb-5">
              <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-8">
                    {/* Content when pendingstatus is false */}
                  </div>
                </div>
              </div>
            </section>
          )}

          {data.pendingstatus && (
            <section id="second">
              <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-8">
                    {/* Content when pendingstatus is true */}
                  </div>
                </div>
              </div>
            </section>  
          )}
        </>
      )}
    </div>
  );
};

export default DoctorDetail;
