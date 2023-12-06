import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const Blog = () => {
  
};
const Inspirepost=(props) => {
  const [postdata, setPost] = useState({});
  
  const [loading, setLoading] = useState(true);
  const [currentuser, setCurrentUser] = useState({ /* Add your user data structure here */ });
  const routeParams = useParams();
  useEffect(() => {
    // Function to fetch post details based on the post ID in the URL params
    const fetchPostDetails = async () => {
      try {
         // Assuming you are using React Router for routing
        const response = await axios.get(`http://localhost:3000/feed/${routeParams.id}`);
        console.log(response);
        // const postData = await response.json();
        // setPost(postData);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching post details:', error);
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
    <div className="feedpage container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {/* Rest of your JSX code, replace <%= %> with { } for dynamic data */}
          <div className="headimg mb-5 col-12 mt-4">
            <img className='img-fluid rounded-pill' src="https://i.imgur.com/Binzr0Z.png" alt="" />
          </div>
          <div className="col-10 offset-1 mt-4">
            {/* Rest of your JSX code */}
            <div className="card mb-4">
              {/* Rest of your card JSX code */}
              <div className="card-footer">
                {/* Add your profile JSX code */}
              </div>
              {post.image && <img className="card-img-top mt-2" src={post.image} alt="Card image cap" />}
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.caption}</p>
                <p className="card-text" id="checkerabhi">{post.descriptions}</p>
                <p id="likeinspire" style={{ fontSize: '1rem' }}>
                  <strong>{post.likes}</strong> got Inspired
                </p>
              </div>
              <div className="card-footer">
                {/* Add your like, report, unlike buttons JSX code */}
                <small className="text-muted">{post.uploaddate}</small>
              </div>
            </div>
            {/* Rest of your JSX code */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Inspirepost;
