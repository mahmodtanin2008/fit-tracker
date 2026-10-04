import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { LuAtSign } from "react-icons/lu";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate;
  const [showpass, setshowpass] = useState(false);
  const [username, setusername] = useState("");
  const [email, setemil] = useState("");

  return (
    <div className="bg-[#020618] h-screen flex flex-col justify-center items-center gap-5 pt-50">
      <div className="flex flex-col gap-2">
        <h1 className="text-[#FFFFFF] text-3xl">Sign up </h1>
        <p className="text-[#99A1AF]">
          Please enter your details to create an account.
        </p>
      </div>
      <div className="h-screen w-80 bg-[#020618] flex flex-col ">
        {/* User name input */}

        <form action="">
          <label className="text-[#99A1AF]" htmlFor="user">
            username
          </label>

          <input
            className="w-80 h-13 rounded-[10px] bg-[#0f172b] p-3 text-amber-50"
            type="text"
            id="user"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="inter your user name"
            autoComplete="off"
          />
        </form>

        {/* Email address input */}

        <form action="">
          <label className="text-[#99A1AF]" htmlFor="email">
            eamail
          </label>
          <input
            className="w-80 h-13 rounded-[10px] bg-[#0f172b] p-3 text-amber-50"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setemil(e.target.value)}
            placeholder="Enter your email"
            autoComplete="off"
          />
        </form>

        {/* password controler input */}

        <form action="" className="flex flex-col gap-2">
          <label className="text-[#99A1AF]" htmlFor="password">
            password
          </label>
          <input
            className="w-80 h-13 rounded-[10px] bg-[#0f172b] p-3 text-amber-50"
            type={showpass ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
          />
        </form>
        <div className="flex justify-center items-center absolute top-123 ">
          <button
            type="button"
            className="text-amber-50 pl-70 r "
            onClick={() => setshowpass(!showpass)}
          >
            {showpass ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>

        {/* navegat button */}
        <div className="">
          <button className="bg-[#00A63E] w-80 h-12 flex flex-col justify-center text-white rounded-[10px] mt-5">
            sign up
          </button>
        </div>

        <div className="flex ">
          <p className="text-[#99A1AF]">Already Have an account?</p>
          <p className="text-[#00A63E]"> link </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
