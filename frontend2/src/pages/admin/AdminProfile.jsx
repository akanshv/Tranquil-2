import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";
import "./AdminProfile.css";
import "./feedindex.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Feeddata from "./Feeddata";
import Soldinfo from "../../components/layouts/Prodinfo";
import Salesinfo from "../../components/layouts/Expertinfo";
import Expertinfo from "../../components/layouts/Expertinfo";



const AdminProfile = () => {
  const [data, setData] = useState({});
  const [expert, setExpert] = useState({});
  const [feeds,setFeeds]= useState({});
  const [loading, setLoading] = useState(true);
  const [loadingexpert, setLoadingExpert] = useState(false);
  const [loadingfeed, setLoadingFeeds] = useState(false);
  const admin = useSelector((state) => state.auth.admin);
  console.log(admin);
  const Navigate = useNavigate(); ``
  useEffect(() => {
    console.log("Entering useEffect");
    const fetchData = async () => {
      try {
        //console.log(user);
        if (admin) {
          // Assuming you are using React Router for routing
          const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/admin/adminprofile/${admin._id}`,
            {
              headers: {
                Authorization: admin.token,
              },
            }
          );

          setData(response.data);
          setExpert(response.data.docs);
          setFeeds(response.data.feeds)
          // console.log("data :", response.data);

          setLoading(false);
        } else {
          toast.error("First Login or Signup to access", {
            duration: 4000,
            position: "top-right",
          });
          Navigate("/admin/login");
        }
        // Assuming you are using React Router for routing
      } catch (error) {
        console.log("Error fetching post details:", error);
        // Handle error, show error message, or redirect to an error page
        setLoading(false);
      }
    };

    fetchData();
    console.log("Exiting useEffect");
  }, []);

  const acceptExpert = async (id) => {
    setLoadingExpert(true);
    try {
      console.log("Entered accept Expet");
      console.log(id);
      const data = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/admin/adminexpertaccept/${id}`
      );
      if (data.status == 200) {
        setExpert(data.data);
        toast.success("Expert Accepted", {
          duration: 4000,
          position: "top-right",
        });
      }
      else {
        toast.failure("Problem in Accepting", {
          duration: 4000,
          position: "top-right",
        });
      }
    }
    catch (error) {

      toast.error("Problem in accepting", {
        duration: 4000,
        position: "top-right",
      });

    }
    setLoadingExpert(false);

  };

  const deleteExpert = async (id) => {
    setLoadingExpert(true);
    try {
      const data = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/admin/adminexpertdelete/${id}`
      );
      if (data.status == 200) {
        setExpert(data.data);
        toast.success("Expert Rejected", {
          duration: 4000,
          position: "top-right",
        });
      }
      else {
        toast.failure("Problem in rejecting", {
          duration: 4000,
          position: "top-right",
        });
      }

    }
    catch (error) {

      toast.error("Problem in Rejecting", {
        duration: 4000,
        position: "top-right",
      });

    }
    setLoadingExpert(false);
  };

  const okPost = async (id) => {
    
    setLoadingFeeds(true);
    try {
      const data = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/admin/adminfeedok/${id}`
      );
      if (data.status == 200) {
        setFeeds(data.data);
        toast.success("Feed is OK ", {
          duration: 4000,
          position: "top-right",
        });
      }
      else {
        toast.failure("Problem in okaying post", {
          duration: 4000,
          position: "top-right",
        });
      }

    }
    catch (error) {

      toast.error("Problem in Okaying", {
        duration: 4000,
        position: "top-right",
      });

    }
    setLoadingFeeds(false);
  };

  const deletePost = async (id) => {
    setLoadingFeeds(true);
    try {
      const data = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/adminfeeddelete/${id}`
      );
      if (data.status == 200) {
        setFeeds(data.data);
        toast.success("Feed is deleted ", {
          duration: 4000,
          position: "top-right",
        });
      }
      else {
        toast.failure("Problem in okaying post", {
          duration: 4000,
          position: "top-right",
        });
      }

    }
    catch (error) {

      toast.error("Problem in Okaying", {
        duration: 4000,
        position: "top-right",
      });

    }
    setLoadingFeeds(false);
  };

  return (
    <div className="sabkuch mt-[5rem] ">
      <div className="expert-div flex justify-center">
        <img
          src="https://i.imgur.com/KxzTAC6.png"
          className="expert-banner"
          alt="expert"
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        </div>
      ) : (
        <div className="row ">
                  <section id="first" className="flex m-auto col-10 mx-auto  items-center">
          <div className="container py-5  ">
            <div className="row  justify-center items-center">
              <div className="w-full mx-[9rem]  py-6 px-4">
                <div className="card mb-1 ">
                  <div className="card-body bg-gray-100">
                    <div className="row">
                      <div className="flex justify-center items-center mb-3 ">
                        <h2 className="text-4xl font-bold">
                          <strong>Admin Profile</strong>
                        </h2>
                      </div>
                      <div className="col-sm-3">
                        <p className="mb-0">Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{data.admini.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{data.admini.email}</p>
                      </div>
                    </div>
                    <hr />
                  </div>

                  {/* Manage Products */}
                  <div className="mb-4">
                    <div className="mb-4">
                      <div className="ps-5 bg-slate-200 p-5">
                        <div className="flex justify-start items-center pt-3 mt-3">
                          <h3 className="text-right text-3xl font-bold">
                            Manage Products
                          </h3>
                        </div>
                        <div>
                          <Box
                            gridColumn="span 8"
                            gridRow="span 6"
                            backgroundColor={"#f2f0f0"}
                          >

                            <Soldinfo />
                          </Box>
                        </div>


                        <div className="flex justify-left items-center px-5 mt-2">
                          <Link
                            to="/adminside/products"
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                          >
                            Manage Products
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Manage Experts */}
                    <div className="ps-5 bg-slate-200 p-5">
                      <div className="flex justify-start items-center pt-3 mt-3">
                        <h3 className="text-right text-3xl font-bold">
                          Manage Experts
                        </h3>
                      </div>
                      {loadingexpert ? (<div className="flex justify-center items-center h-32">
                        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
                      </div>) : (<>

                        <div>
                          <Box
                            gridColumn="span 8"
                            gridRow="span 6"
                            backgroundColor={"#f2f0f0"}
                          >

                            <Expertinfo />
                          </Box>
                        </div>
                        <div>
                          <h3 className=" text-2xl font-bold">
                            Manage Incoming Experts
                          </h3>
                          {expert.map((doctor) => (
                            <div key={doctor._id} className="container py-5 pt-3">
                              <div className="card shadow-0 border rounded-3 bg-gray-100">
                                <div className="card-body flex">
                                  <div className="w-1/4">
                                    <div className="bg-image hover-zoom ripple rounded-full overflow-hidden">
                                      <img
                                        src={doctor.pfp}
                                        className="w-32 h-32 object-cover object-center rounded-full"
                                        alt="Doctor Profile"
                                      />
                                      <a href="#!">
                                        <div className="hover-overlay">
                                          <div
                                            className="mask"
                                            style={{
                                              backgroundColor:
                                                "rgba(253, 253, 253, 0.15)",
                                            }}
                                          ></div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="w-1/2 ml-4">
                                    <h5 className="font-bold">{doctor.Name}</h5>
                                    <div className="d-flex flex-row">
                                      <a target="_blank" href={doctor.document}>
                                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                                          Document
                                        </button>
                                      </a>
                                    </div>
                                    {Object.values(doctor.ExpertsIn).map(
                                      (tag, index) => (
                                        <div
                                          key={index}
                                          className="mt-1 mb-0 text-muted small"
                                        >
                                          <span className="text-success"> • </span>
                                          <span>{tag}</span>
                                        </div>
                                      )
                                    )}
                                    <p className="text-truncate mb-4 mb-md-0">
                                      {doctor.Experience} yr of experience
                                    </p>
                                  </div>
                                  <div className="w-1/4">
                                    <h5 className="text">Charges</h5>
                                    <h6 className="text-primary">
                                      ₹ {doctor.Charge}/Sessions
                                    </h6>
                                    <div className="d-flex flex-column mt-4">
                                      <h5 className="text">Choose Action</h5>
                                      <button
                                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800"
                                        onClick={() => acceptExpert(doctor._id)}
                                        type="button"
                                      >
                                        Accept
                                      </button>
                                      <button
                                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800 ml-2"
                                        onClick={() => deleteExpert(doctor._id)}
                                        type="button"
                                      >
                                        Reject
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                      </>
                      )
                      }

                    </div>
                    <div className="ps-5 bg-slate-200 p-5">
                      <div className="flex justify-start items-center pt-3 mt-3">
                        <h3 className="text-right text-3xl font-bold">
                          Manage Feeds
                        </h3>
                      </div>
                      {loading? (<>
                        <div className="flex justify-center items-center h-32 w-max">
                        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
                      </div>
                      </>):(<>
                      <div>
                      <Box
                        gridColumn="span 8"
                        gridRow="span 6"
                        backgroundColor={"#f2f0f0"}
                      >

                        <Feeddata dashboarddata={[data.feeds]} />
                      </Box>
                    </div>
                    <div className="flex justify-start items-center pt-3 mt-3">
                    <h3 className=" text-2xl font-bold">
                            Manage Reported Feeds
                          </h3>
                      </div>
                      <ul>
                        {feeds.filter(feed => (feed.checked === false && feed.reportarr.length>0)).map(feed => (
                          <>
                          <div
                className="m-8 p-4 border-solid border-2 rounded-3xl bg-gradient-to-r from-slate-200 to-slate-300 "
                key={feed._id}
              >
                {/* ... Other JSX code ... */}
                
                  <div className="card-footer">
                  <div className="profile">
                      <div className="flex items-center" id="authorusername">
                       <span className="round">
                        <img src={feed.author.pfp} id="authorpfp" alt="user" width="40" />
                       </span>
                      &nbsp;
                      {feed.author.username}
                 </div>
            </div>
        </div>
                  {feed.image && (
                    <img
                      className="card-img-top p-3"
                      src={feed.image}
                      id="feedimage"
                      alt="Card image cap"
                    />
                  )}
                  {/* ... Other JSX code ... */}
                  <div
                    style={{
                      fontSize: "1rem",
                      marginBottom: "0 rem !important",
                    }}
                    className="card-body"
                  >
                    <div className="card-data">
                      <h5 className="card-title" id="feedtitle">
                        {feed.title}
                      </h5>
                      <p className="card-subtitle" id="feedcaption">
                        {feed.caption}
                      </p>
                      <p style={{ fontSize: "1rem" }}>
                        {feed.likes} Got Inspired
                      </p>
                    </div>
                  </div>
                  <div className="card-footer" id="feeddate">
                    <small className="text-muted">{feed.uploaddate}</small>
                  </div>

      
                  <div className="d-flex my-4">
                                    <button
                                      className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800"
                                      type="button"
                                      onClick={() => okPost(feed._id)}
                                    >
                                      No Problem
                                    </button>
                                    <button
                                      className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:shadow-outline-red active:bg-red-800 ml-2"
                                      type="button"
                                      onClick={() => deletePost(feed._id)}
                                    >
                                      Delete Post
                                    </button>
                                  </div>
      
      
                
              </div>
                          </>
                        ))}
                      </ul>
                      </>)}
                    
                   
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
