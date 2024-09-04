import { useState, useEffect } from "react";
import axios from "axios";
import "./feedindex.css";
import "./gradient.css";
// import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Inspire = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const Navigate=useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchFeeds = async () => {
     // console.log("inspire",user);
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/feed`);
        console.log(response);
        setFeeds(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching feeds:", error);
        setLoading(false);
      }
    };

    fetchFeeds();
  }, []);

  // const mostEngaging = async (no) => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(`http://localhost:6969/feed/filterfeed/${no}`);
  //     setFeeds(response.data);
  //   } catch (error) {
  //     console.error('Error fetching filtered feeds:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="feedpage container mx-auto p-4">
      <div className="row">
        <div className="mt-[6rem] headimg">
          <img
            className="rounded-full"
            src="https://i.imgur.com/Binzr0Z.png"
            alt=""
          />
        </div>
      </div>

      <div>
        <form>
          <div className="upper-text mt-5">
            <p className=" heading2 text-center  text-gray-800 text-2xl">
              Create Your Own Inspiring Post
                
              <Link 
                className='mt-3 ml-3 hover:bg-blue-700 bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 rounded-full shadow-md text-white' to={'/feed/newfeed'} >Create Post</Link>
                {/* <button onClick={()=>(Navigate('/feed/newfeed'))}
                  className="btn m-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-blue-700 text-white   rounded-full shadow-md"
                >
                  Create Post
                </button> */}
        
            </p>
          </div>
        </form>
      </div>

      <div className="mb-5 mt-4">{/* ... Other JSX code ... */}</div>

      <div className="dropdown flex justify-end">
        {/* ... Other JSX code ... */}
      </div>

      <div className="col-10 mx-auto">
        <ul id="cardlist">
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
            </div>
          ) : (
            feeds.map((feed) => (
              <div
                className="m-8 p-4 border-solid border-2 rounded-3xl bg-gradient-to-r from-slate-200 to-slate-300 "
                key={feed._id}
              >
                {/* ... Other JSX code ... */}
                <Link
                  className="cardanchor"
                  id="feedid"
                  to={`/feed/${feed._id}`}
                >
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
                </Link>
              </div>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Inspire;
