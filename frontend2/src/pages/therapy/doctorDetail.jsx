import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './Doctordetails.css'
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const doctorDetail = () => {
  const doc = {
    pfp: 'https://images.squarespace-cdn.com/content/v1/57c31cee197aeab7de5ab58c/0d220251-996b-45e0-a441-4e8950464b4a/mansi_05.jpg?format=2500w',
    Name: 'Mansi Gupta',
    email: 'mastersama72@gmail.com',
    ExpertsIn: 'Relationship, Work Stress,Loneliness, Anxiety',
    Experience: '5',
    Sessionno: '10',
    Charge: '500'
  };

  const slotter = [
    { Userid: { username: 'User1' }, Date: '2024-02-23', Time: '10:00 AM', status: 'accept' },
    { Userid: { username: 'User2' }, Date: '2024-02-24', Time: '11:00 AM', status: 'pending' },
    { Userid: { username: 'User3' }, Date: '2024-02-25', Time: '12:00 PM', status: 'accept' }
  ];

  const pendingstatus = false;

  return (
    <>
    <div className="row">
        <div className="mt-[7rem] mb-[1rem] ml-[0.5rem] mr-[0.5rem] headimg flex justify-center">
          <img className='rounded-full' src="https://i.imgur.com/ujX2KRl.png " alt="" />
        </div>
      </div>

    <div className=" min-h-screen py-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-center">
              <img src={doc.pfp} className="rounded-full h-36 w-36 md:h-48 md:w-48 mx-auto" alt="expert" />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold">{doc.Name}</h2>
              <p className="text-sm text-gray-600">{doc.email}</p>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 p-4 sm:p-6">
              {Object.entries(doc).map(([key, value]) => (
                (key=='pfp')?(<></>):(<> 
                  <div key={key}>
                  <dt className="text-sm font-medium text-gray-500">{key}</dt>
                  <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                  </div>
                  </>
                  
                )                
                
              ))}
            </dl>
          </div>
        </div>

        {!pendingstatus ? (
          <div className="max-w-4xl mx-auto mt-8 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-xl font-bold text-center">Slot Management</h2>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Booked Slots</h3>
                <table className="w-full mt-2">
                  <thead>
                    <tr>
                      <th className="py-2">User Name</th>
                      <th className="py-2">Date</th>
                      <th className="py-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slotter.map((slot, index) => (
                      slot.status === 'accept' && (
                        <tr key={index}>
                          <td className="py-2">{slot.Userid.username}</td>
                          <td className="py-2">{slot.Date}</td>
                          <td className="py-2">{slot.Time}</td>
                        </tr>
                      )
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold">Pending Slots</h3>
                <table className="w-full mt-2">
                  <thead>
                    <tr>
                      <th className="py-2">Name</th>
                      <th className="py-2">Date</th>
                      <th className="py-2">Time</th>
                      <th className="py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slotter.map((slot, index) => (
                      slot.status === 'pending' && (
                        <tr key={index}>
                          <td className="py-2">{slot.Userid.username}</td>
                          <td className="py-2">{slot.Date}</td>
                          <td className="py-2">{slot.Time}</td>
                          <td className="py-2">
                            <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">Accept</button>
                            <button className="bg-red-500 text-white px-3 py-1 rounded">Reject</button>
                          </td>
                        </tr>
                      )
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h2 className="text-xl font-bold text-center">Your Expert Request is pending to be authorised by admin...</h2>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default doctorDetail;