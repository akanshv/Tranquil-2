import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./feedindex.css";
import "./gradient.css";
import "./home.css";
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const PostForm = () => {
    const Navigate=useNavigate();
  const [formData, setFormData] = useState({
    topic: "",
    title: "",
    image: "",
    caption: "",
    description: "",
  });

  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
      if(!user){
        toast.error('First Login or Signup to access',{
          duration: 4000,
          position: 'top-right',
        });
        Navigate('/user/login')
      }
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "Image") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/feed/newfeedreact`, formData,{
            headers: {
                authorization: user.token
            }
        });

      console.log("Response from the backend:", response.data);
      Navigate(`/feed/${response.data}`);
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error(error,{
        duration: 4000,
        position: 'top-right',
      });
    }
  };

  return (
    <div className="background pb-5 pt-5">
      <div className="mt-[6rem] headimg flex justify-around ">
        <img
          className="rounded-full mt-6"
          src="https://i.imgur.com/Binzr0Z.png"
          alt=""
        />
      </div>
      <div className="container pb-5 pt-5 justify-center">
        <div>
          <h1 className="text-4xl font-bold text-center text-indigo-700 mt-8 mb-6">
            Post to <span className="text-green-500">Inspire</span>
            <br />
          </h1>
        </div>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            action="/feed/newfeed"
            method="POST"
            encType="multipart/form-data"
            className="mt-4"
          >
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
              Topic
            </label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 border rounded-md w-full"
            />

            <label htmlFor="title" className="block mt-4 text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 border rounded-md w-full"
            />

            {/* <label htmlFor="image" className="block mt-4 text-sm font-medium text-gray-700">
              Upload Your Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleInputChange}
              required
              className="mt-1 p-2 border rounded-md w-full"
            /> */}
            <label htmlFor="caption" className="block mt-4 text-sm font-medium text-gray-700">
              Upload Link for Image
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 border rounded-md w-full"
            />

            <label htmlFor="caption" className="block mt-4 text-sm font-medium text-gray-700">
              Caption
            </label>
            <input
              type="text"
              id="caption"
              name="caption"
              value={formData.caption}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 border rounded-md w-full"
            />

            <label htmlFor="description" className="block mt-4 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 border rounded-md w-full"
            ></textarea>

            <button
              type="submit"
              className="m-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md"
            >
              Create Your Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
