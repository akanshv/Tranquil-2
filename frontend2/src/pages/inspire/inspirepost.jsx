import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./feedindex.css";
import "./gradient.css";
import "./home.css";
import { Icon } from '@iconify/react';
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Blog = () => {};
const Inspirepost = (props) => {
  const [post, setPost] = useState({});
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const [loading, setLoading] = useState(true);
  const Navigate=useNavigate();
  const [currentuser, setCurrentUser] = useState({
    /* Add your user data structure here */
  });
  const routeParams = useParams();
  useEffect(() => {
    // Function to fetch post details based on the post ID in the URL params
    const fetchPostDetails = async () => {
      try {
        //console.log(user);
        if(user){

        // Assuming you are using React Router for routing
        const response = await axios.get(
          `http://localhost:3000/feed/${routeParams.id}`
          ,{
            headers: {
                Authorization: user.token
            }
        }
        );

        // const postData = await response.json();
        setPost(response.data);
        setLoading(false);

        }
        else{
          toast.error('First Login or Signup to access',{
            duration: 4000,
            position: 'top-right',
          });
          Navigate('/user/login')
        }
        // Assuming you are using React Router for routing
      } catch (error) {
        console.error("Error fetching post details:", error);
        // Handle error, show error message, or redirect to an error page
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, []);

  const handleLike = () => {
    // Implement your like logic here
  };

  const handleReport = () => {
    // Implement your report logic here
  };

  const handleUnlike = () => {
    // Implement your unlike logic here
  };

  return (
    <div className="flex justify-center">
      <div className="feedpage container ">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row grid ">
            {/* Rest of your JSX code, replace <%= %> with { } for dynamic data */}
            <div className="row ">
              <div className="mt-[6rem] headimg flex justify-around ">
                <img
                  className="rounded-full mt-6"
                  src="https://i.imgur.com/Binzr0Z.png"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              {/* Rest of your JSX code */}
              <div className="m-8 p-4 w-[100%] border-solid border-2 rounded-3xl bg-gradient-to-r from-slate-200 to-slate-300">
                {/* Rest of your card JSX code */}
                <div className="card-footer">
                  {/* Add your profile JSX code */}
                </div>
                {post.image && (
                  <img
                    className="card-img-top mt-2"
                    src={post.image}
                    alt="Card image cap"
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.caption}</p>
                  <p className="card-text" id="checkerabhi">
                    {post.descriptions}
                  </p>
                  <p id="likeinspire" style={{ fontSize: "1rem" }}>
                    <strong>{post.likes}</strong> got Inspired
                  </p>
                </div>
                <div className="card-footer">
                  <div className="like" id="likeder">
                    <div className="inline-block space-x-2">
                      <button  className="btn m-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md">
                        <Icon
                          className="text-4xl "
                          icon="mdi-light:like"
                        />
                    
                        Got Inspired
                      </button>
                      <button  className="btn m-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md"
                      >
                        <iconify-icon
                          className="text-2xl"
                          icon="mdi:alert"
                        ></iconify-icon>
                        Report
                      </button>
                  </div>
                  </div>
                  {/* Add your like, report, unlike buttons JSX code */}
                  <small className="text-muted">{post.uploaddate}</small>
                </div>
              </div>
              {/* Rest of your JSX code */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inspirepost;

// import React from 'react';

// const PostDetail = ({ post, currentuser }) => {
//   const id = post._id;
//   const cid = currentuser._id;

//   const liker = () => {
//     // Your XMLHttpRequest logic for liking the post
//   };

//   const reporter = () => {
//     // Your XMLHttpRequest logic for reporting the post
//   };

//   const unliker = () => {
//     // Your XMLHttpRequest logic for unliking the post
//   };

//   return (
//     <div className="feedpage container">
//       <div className="row">
//         <div className="headimg mb-5 col-12 mt-4">
//           <img className="img-fluid rounded-pill" src="https://i.imgur.com/Binzr0Z.png" alt="" />
//         </div>
//         <div className="col-10 offset-1 mt-4">
//           <div className="row mb-4">
//             <div className="card mb-4">
//               <div className="card-footer">
//                 <div className="profile">
//                   <div>
//                     <span className="round">
//                       <img src={post.author.pfp} alt="user" width="40" />
//                     </span>
//                     &nbsp;{post.author.username}
//                   </div>
//                 </div>
//               </div>
//               {post.image && (
//                 <img className="card-img-top mt-2" src={post.image} alt="Card image cap" />
//               )}
//               <div className="card-body ">
//                 <h5 className="card-title">{post.title}</h5>
//                 <p className="card-text">{post.caption}</p>
//                 <p className="card-text" id="checkerabhi">
//                   {post.descriptions}
//                 </p>
//                 <p id="likeinspire" style={{ fontSize: '1rem' }}>
//                   <strong>{post.likes}</strong> got Inspired
//                 </p>
//               </div>
//               <div className="card-footer">
//                 <div className="like" id="likeder">
//                   {!post.reportarr.includes(currentuser._id) ? (
//                     !post.reallikes.includes(currentuser._id) ? (
//                       <div style={{ display: 'inline-block' }}>
//                         <button form="like" onClick={liker} className="btn btn-success">
//                           <i className="mdi mdi-account-heart" style={{ fontSize: '2rem' }}></i>
//                           <br />
//                           Got Inspired
//                         </button>
//                         <button form="report" onClick={reporter} className="btn btn-danger">
//                           <i className="mdi mdi-alert" style={{ fontSize: '2rem' }}></i>
//                           <br />
//                           Report
//                         </button>
//                       </div>
//                     ) : (
//                       <div>
//                         <h6>
//                           You got inspired from this post. <strong>Happy getting Tranquiled</strong>{' '}
//                         </h6>
//                         <button onClick={unliker} className="btn btn-success">
//                           <i className="mdi mdi-account-heart" style={{ fontSize: '2rem' }}></i>
//                           <br />
//                           Not Inspiring
//                         </button>
//                       </div>
//                     )
//                   ) : (
//                     <h6>
//                       You reported this post.{' '}
//                       <strong>Thanks for making the community better and Tranquiled</strong>
//                     </h6>
//                   )}
//                 </div>
//                 <small className="text-muted">{post.uploaddate}</small>
//               </div>
//             </div>
//             <div className="card">
//               {/* ... (Comments section) ... */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostDetail;
