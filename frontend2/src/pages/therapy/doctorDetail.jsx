import React, { useEffect, useState } from "react";
import axios from "axios";
// import './Doctordetails.css'
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {  useNavigate, useParams, Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const doctorDetail = () => {
  const [data, setData] = useState();
  const [slotter,setSlotter]=useState();
  const [loading, setLoading] = useState(true);
  const doctor = useSelector((state) => state.auth.doctor);
  const [Name,setName]=useState();
  const [Charge,setCharge]=useState();
  const Navigate=useNavigate();
  const [formData,setFormData]=useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //console.log(doctor);
  useEffect(() => {

    if(!doctor){
      toast.error('First Login or Signup to access',{
        duration: 4000,
        position: 'top-right',
      });
      Navigate('/expertlogin')
    }
    const  fetchProfile=async ()=> {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/expert/expertprofile`,
        {
          headers: {
            authorization:doctor.token,
          },
        }
      );
      // const resData = await response.json();
      console.log(response.data);
      setData(response.data.doc);
      setSlotter(response.data.slotter);
      setLoading(false);
    }
    fetchProfile();
  }, []);

  const acceptSlot = async (id) => {
    const data = await axios.post(
     `${import.meta.env.VITE_BASE_URL}/expert/acceptslot/${id}`,formData,
     {
      headers: {
        authorization:doctor.token,
      },
    }
    );
    console.log(data);
    if(data.status==200){
      setSlotter(data.data.slotter);
      toast.success('Slot Accepted',{
        duration: 4000,
        position: 'top-right',
      });
    }
    else{
      toast.error('Problem in accepting slot',{
        duration: 4000,
        position: 'top-right',
      });
    }
    
  };


  const handleUpdate=async()=>{
    if(Charge<100){
      toast.error('Charge minimum should be 100 Rs ',{
        duration: 4000,
        position: 'top-right',
      });
      return;
    }
    setLoading(true);
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/expert/update/`,
      {Name:Name,Charge:Charge},
      {
       headers: {
         authorization:doctor.token,
       },
     }
     );
     console.log(response);
     if(response.status==200){
      setData(response.data.doc);
      setSlotter(response.data.slotter);
      setCharge("");
      setName("");
      toast.success('Information Updated',{
        duration: 4000,
        position: 'top-right',
      });
    }
    else{
      toast.error('Problem in Updating ',{
        duration: 4000,
        position: 'top-right',
        
      });
      
    }
    setLoading(false);
  }
  const rejectSlot = async (id) => {
    console.log("Slot Rejected");
    console.log(id);
    const data = await axios.get(
     `${import.meta.env.VITE_BASE_URL}/expert/rejectslot/${id}`,
     {
      headers: {
        authorization:doctor.token,
      },
    }
    );
    console.log(data);
    if(data.status==200){
      setSlotter(data.data.slotter);
      toast.success('Slot Rejected',{
        duration: 4000,
        position: 'top-right',
      });
    }
    else{
      toast.error('Problem in rejecting slot',{
        duration: 4000,
        position: 'top-right',
      });
    }
  };

  return (
    <>
      <div className="row">
        <div className="mt-[7rem] mb-[1rem] ml-[0.5rem] mr-[0.5rem] headimg flex justify-center">
          <img
            className="rounded-full"
            src="https://i.imgur.com/ujX2KRl.png "
            alt=""
          />
        </div>
      </div>
      
    {loading?(<>
      <div className="flex justify-center items-center h-32">
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>
    </>):(
      <div className=" min-h-screen py-8 " >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto bg-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-center">
              <img
                src={data?.pfp}
                className="rounded-full h-36 w-36 md:h-48 md:w-48 mx-auto"
                alt="expert"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">{data?.Name}</h2>
              <p className="text-sm text-gray-600">{data?.email}</p>
            </div>
          </div>
            </div>
            <div className="max-w-6xl my-3 rounded-lg bg-gray-200 p-5 m-auto">
              <div>
                <p className="m-2 text-1xl font-semibold ">
                  Name :{" "}
                  <span className="m-2 text-1xl text-gray-800 "><input type="text" placeholder={data.Name} onChange={(e)=>setName(e.target.value)}/></span>
                </p>
                <p className="m-2 text-1xl font-semibold ">
                  Email: <span className="m-2 text-1xl text-gray-800">{data.email}</span>
                </p>
                <p className="m-2 text-1xl font-semibold ">
                  Joined On :{" "}
                  <span className="m-2 text-1xl text-gray-800">{data.Joindate.toString()}</span>
                </p>
                <p className="m-2  text-1xl font-semibold ">
                  Charge: <span className="m-2 text-1xl text-gray-800"><input min="100" type="Number"onChange={(e)=>{setCharge(e.target.value)} } placeholder={data.Charge}/></span>
                </p>
                <p className="m-2 text-1xl font-semibold ">
                  Happiness No.:{" "}
                  <span className="m-2 text-1xl text-gray-800">{data.Happyno}</span>
                </p>
                <p className="m-2 text-1xl font-semibold">
                  Experts In: <span className="m-2 text-1xl text-gray-800">{data.ExpertsIn}</span>
                </p>              
                <button className="m-2 bg-blue-500 p-2 rounded-md text-white font-semibold" onClick={handleUpdate}>Update</button> 
              </div>
            </div>

        {!loading ? (
          <div className="max-w-6xl mx-auto mt-8 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-xl font-bold text-center">
                Slot Management
              </h2>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold">Booked Slots</h3>
                <div>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">User</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Time</TableCell>
                        <TableCell align="center">G Meet Link</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {slotter?.map((row) => {
                        if (row.status == "accept") {
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
                                {row.UserName}
                              </TableCell>
                              <TableCell align="center">
                                {row.Date}
                              </TableCell>
                              <TableCell align="center">{row.Time}</TableCell>
                              <TableCell align="center"><a className="font-semibold text-blue-700" href={row.Link} target="_blank">Click Here</a>
</TableCell>
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
              <div className="mt-8">
                <h3 className="text-2xl font-semibold">Pending Slots</h3>
                <div>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">User</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Time</TableCell>
                        <TableCell align="center">GMeet Link </TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {slotter?.map((row) => {
                        if (row.status == "pending") {
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
                                {row.Userid.username}
                              </TableCell>
                              <TableCell align="center">
                                {row.Date}
                              </TableCell>
                              <TableCell align="center">{row.Time}</TableCell>
                              <TableCell align="center">
                              <input name="link" onChange={handleChange} type="text"/>  
                              </TableCell>
                              <TableCell align="center">
                                <button onClick={()=>acceptSlot(row._id)} className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                                Accept
                                 </button>
                                <button  onClick={()=>rejectSlot(row._id)} className="bg-red-500 text-white px-3 py-1 rounded">
                                Reject
                                </button>
                              </TableCell>
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
          </div>
        ) : (
          <div className="max-w-4xl mx-auto mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-xl font-bold text-center">
                Your Expert Request is pending to be authorised by admin...
              </h2>
            </div>
          </div>
        )}
      </div>
    
    </div>)}
    </>
  );
};

export default doctorDetail;



{/* <td className="py-2">
                              <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                                Accept
                              </button>
                              <button className="bg-red-500 text-white px-3 py-1 rounded">
                                Reject
                              </button>
                            </td> */}