import { Link } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setLoginUser } from "../../redux-store/auth/authSlice";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [UserCreated, setUserCreated] = useState(false);
  const [Userloading, setUserloading] = useState(false);
  const [image,setImage]=useState();
  const [Username,setUsername]=useState();
  const dispatch=useDispatch();
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setUserloading(true);
    try {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("username", Username);
        console.log(formData);
      
      const data = await fetch(`${import.meta.env.VITE_BASE_URL}/register`, {
        method: "POST",
        body: formData,
      });
      const body = await data.json();
      console.log(body);
      dispatch(setLoginUser(body));

      
      setUserloading(false);
      toast.success('Thanks for registering. Welcome to tranquil',{
        duration: 4000,
        position: 'top-right',
      });
      Navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="mt-[10rem]">
        <h1 className="text-center text-primary text-4xl ">Register Here!</h1>
        {UserCreated && (
          <div className="my-4 text-center">
            Congrats you successfully registered.Now you can{" "}
            <Link className="font-semibold" href={"/login"}>
              Login here
            </Link>
          </div>
        )}
        <form
          className="block mt-3 max-w-lg rounded-md mx-auto  p-3"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className={!Userloading ? "forminput" : "disabledinput"}
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <input
            type="text"
            className={!Userloading ? "forminput" : "disabledinput"}
            placeholder="Enter Username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className={!Userloading ? "forminput" : "disabledinput"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            // className={`appearance-none border ${!Userloading ? "border-gray-300" : "border-gray-400"} rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500 ${!Userloading ? "forminput" : "disabledinput"}`}
            className={!Userloading ? "forminput" : "disabledinput"}
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button
            className={
              !Userloading
                ? "submit authbuttons"
                : "disabledbuttton authbuttons"
            }
            type="submit"
          >
            {" "}
            Register
          </button>
          <p className="text-xl text-gray-700 font-semibold text-center my-2 ">
            Login with Provider
          </p>
          <button className="flex justify-center gap-3 block-w-full font-semibold border border-gray-300 rounded-xl px-6 py-2 m-auto">
            <img className="h-8 w-8" src={"/google.png"} alt="" />
            {/* <Image src={'/google.png'} height={24} width={24}/> */}
            Login with Google
          </button>
          <div className="my-4 text-center text-gray-500">
            Existing Account?{"  "}
            <Link to={"/login"} className="underline">
              Login Here{" "}
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
