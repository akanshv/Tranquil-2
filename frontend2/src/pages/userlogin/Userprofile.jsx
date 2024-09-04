import React, { useEffect, useState } from "react";
import axios from "axios";
// import './AdminLogin.css'
// import './AdminProfile.css'
// import './feedindex.css'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Feeddata from "../admin/Feeddata";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const UserProfile = () => {
  const [data, setData] = useState({});
  const [slotdata,setslotdata]=useState({});
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();
  const [formData,setFormData]=useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/userprofile`,
            {
              headers: {
                Authorization: user.token,
              },
            }
          );

          setData(response.data);
          setslotdata(response.data.slotter);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };
      fetchData();
    } else {
      toast.error("First Login or Signup to access", {
        duration: 4000,
        position: "top-right",
      });
      Navigate("/user/login");
    }
  }, []);


  const handleFilter=async ()=>{
      setLoading(true);
      try{
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/userprofile/doctorfilter`,
          
          formData,{
            headers: {
              Authorization: user.token,
            },
          }
        );

        if(response.status==200){
          setslotdata(response.data);
          toast.success("Successfully filtered", {
            duration: 4000,
            position: "top-right",
          });
          
          

        }
        else{
         toast.error("Problem in filter", {
            duration: 4000,
            position: "top-right",
          });
          setslotdata(response.data);
        }



      }
      catch(error){
        console.log(error);
        toast.error("First Login or Signup to access", {
          duration: 4000,
          position: "top-right",
        });
        Navigate("/user/login");
      }
      setLoading(false);
  }

  return (
    <div className="sabkuch mt-[7rem]">
      <div className="expert-div flex justify-center">
        <img
          src="https://i.imgur.com/ujX2KRl.png"
          className="expert-banner"
          alt="expert"
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        </div>
      ) : (
        <>
          <div>
            <div className="m-5 ">
              <p className="font-bold text-5xl text-gray-900 text-center">
                {" "}
                Personel Details
              </p>
            </div>
            <div className="max-w-6xl my-3 rounded-lg bg-gray-200 p-5 m-auto">
              <div>
                <img
                  className="text-center l-[8rem] w-[8rem] rounded-full"
                  src={data.user.pfp}
                  alt=""
                />
              </div>
              <div>
                <p className="m-2 text-2xl font-semibold">
                  Name :{" "}
                  <span className="m-2 text-2xl">{data.user.username}</span>
                </p>
                <p className="m-2 text-2xl font-semibold">
                  Email: <span className="m-2 text-1xl">{data.user.email}</span>
                </p>
                  
                <Link to={"/cart"} className="mt-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md">Products Cart</Link>              
              </div>
            </div>
            <div className="m-5 ">
              <p className="font-bold text-5xl text-gray-900 text-center">
                {" "}
                Your Posts
              </p>
            </div>

            
            <div className="max-w-6xl my-3 rounded-lg bg-gray-200 p-5 m-auto">
            <div className="max-w-7xl m-auto">
                      <Box
                        gridColumn="span 8"
                        gridRow="span 6"
                        backgroundColor={"#f2f0f0"}
                      >  
                         
                        <Feeddata dashboarddata={[data.posts]} />
                      </Box>
           </div>
              <ul id="cardlist">
                {loading ? (
                  <div className="flex justify-center items-center h-32">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
                  </div>
                ) : (
                  data.posts?.map((feed) => (
                    <>
                    <Link to={`/feed/${feed._id}`}>
                    <div
                      className="m-8 p-4 border-solid border-2 rounded-3xl bg-gradient-to-r from-slate-200 to-slate-300 "
                      key={feed._id}
                    >
                      {/* ... Other JSX code ... */}

                      <div className="card-footer">
                        <div className="profile">
                          <div
                            className="flex items-center"
                            id="authorusername"
                          >
                            <span className="round">
                              <img
                                src={feed.author.pfp}
                                id="authorpfp"
                                alt="user"
                                width="40"
                              />
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
                    </div>
                    </Link>
                    </>
                    
                    
                  ))
                )}
              </ul>
            </div>
            <div className="m-5 ">
              <p className="font-bold text-5xl text-gray-900 text-center">
                {" "}
                Your Slots
              </p>
            </div>
            <div className="max-w-6xl my-3 rounded-lg bg-gray-200 p-5 m-auto">
              <div className="m-2 ">
                <p className="font-semibold text-3xl text-gray-800 text-center">
                  {" "}
                   Filter
                </p>
                <div className="flex justify-evenly">
                    <input type="text" name="doctorName" placeholder="Doctor Name" onChange={handleChange}/>
                    <input type="Number" name="charges" placeholder="Charge" onChange={handleChange}/>
                    <button className=" bg-blue-500 p-2 rounded-md text-white font-semibold" onClick={handleFilter}>Filter</button> 
                </div>
              </div>
              <div>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Expert</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Time</TableCell>
                        <TableCell align="center">Cost</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Meet Link</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {slotdata?.map((row) => {
                        if (true ) {
                          return (
                            <TableRow
                              key={row._id}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                                
                              }}
                            >
                              <TableCell  align="center" >
                                {row.doctorid.Name}
                              </TableCell>
                              <TableCell align="center">
                                {row.Date}
                              </TableCell>
                              <TableCell align="center">{row.Time}</TableCell>
                              <TableCell align="center">{row.doctorid.Charge} Rs </TableCell>
                              <TableCell align="center">{row.status}</TableCell>
                              {
                                 row.status==="pending"?(<TableCell align="center"></TableCell>):(<TableCell align="center"><a className="font-semibold text-blue-700" href="google.com">Click Here</a> </TableCell>)
                              }
                              
                            </TableRow>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              
              
            </div>
            
            
          </div>
        </>
        // <section id="first" className="flex justify-center items-center">
        //   <div className="container py-5">
        //     <div className="row flex justify-center items-center">
        //       <div className="col-lg-11 py-6 px-4">
        //         <div className="card mb-1 ">
        //           <div className="card-body bg-gray-100 w-auto ">
        //             <div className="row">
        //               <div className="flex justify-center items-center m-auto ">
        //                 <h2 className="text-4xl m-8 font-bold">
        //                   <strong>User Profile</strong>
        //                 </h2>
        //               </div>
        //               <div className="mt-4 col-sm-3">
        //                 <img
        //                   src={data.user.pfp}
        //                   alt="avatar"
        //                   className="rounded-full img-fluid w-60"
        //                 />
        //               </div>
        //               <div className="col-sm-3">
        //                 <p className="mb-0">Name</p>
        //               </div>
        //               <div className="col-sm-9">
        //                 <p className="text-muted mb-0">{data.user.username}</p>
        //               </div>
        //             </div>
        //             <hr />
        //             <div className="row">
        //               <div className="col-sm-3">
        //                 <p className="mb-0">Email</p>
        //               </div>
        //               <div className="col-sm-9">
        //                 <p className="text-muted mb-0">{data.user.email}</p>
        //               </div>
        //             </div>
        //             <hr />
        //           </div>

        //           {/* Manage Products */}
        //           <div className="mb-4">
        //             {/* Manage Experts */}
        //             <div className="ps-5">
        //               <div className="flex justify-start items-center pt-3 mt-3">
        //                 <h3 className="text-right">Your Slots</h3>
        //               </div>
        //             </div>

        //             {/* Manage Feed */}
        //             <div className="ps-5">
        //               <div className="flex justify-start items-center pt-3 mt-3">
        //                 <h3 className="text-right"> Your Posts</h3>
        //               </div>
        //               <ul>
        //                 {data.feeds?.map((feed) => (
        //                   <div key={feed._id} className="carddiv container p-3">
        //                     <div className="card mb-2">
        //                       <div className="carddiv container p-3 bg-gray-100">
        //                         <div className="card mb-2">
        //                           <div className="card-footer">
        //                             <div className="profile">
        //                               <div>
        //                                 <span className="round">
        //                                   <img
        //                                     src={feed.author.pfp}
        //                                     alt="user"
        //                                     width="40"
        //                                   />
        //                                 </span>
        //                                 &nbsp;{feed.author.username}
        //                               </div>
        //                             </div>
        //                           </div>

        //                           {feed.image && (
        //                             <img
        //                               className="card-img-top p-3"
        //                               src={feed.image}
        //                               alt="Card image cap"
        //                             />
        //                           )}
        //                           <div
        //                             style={{
        //                               fontSize: "1rem",
        //                               marginBottom: "0rem !important",
        //                             }}
        //                             className="card-body"
        //                           >
        //                             <div className="card-data">
        //                               <h5 className="card-title">
        //                                 {feed.title}
        //                               </h5>
        //                               <p className="card-subtitle">
        //                                 {feed.caption}
        //                               </p>
        //                               <p style={{ fontSize: "1rem" }}>
        //                                 {feed.likes} Got Inspired
        //                               </p>
        //                             </div>
        //                           </div>
        //                           <div className="card-footer ">
        //                             <small className="text-muted">
        //                               {feed.uploaddate}
        //                             </small>
        //                           </div>
        //                         </div>
        //                         <hr />
        //                       </div>{" "}
        //                     </div>
        //                     <hr />
        //                     {/* Render action buttons */}
        //                   </div>
        //                 ))}
        //               </ul>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </section>
      )}
    </div>
  );
};

export default UserProfile;
