import React from 'react'

  






const Login = () => {
  return (
    <div>
      <div className="bg-[#020618] h-screen flex flex-col justify-center items-center gap-5 pt-50">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#FFFFFF] text-2xl">Sign in </h1>
          <p className="text-[#99A1AF]">
            Please enter email and password to access.
          </p>
        </div>
        <div className="h-screen w-80 bg-[#020618] flex flex-col ">
          <form action="" className="flex flex-col gap-2">
            <label className="text-[#99A1AF]" htmlFor="eamail">
              eamail
            </label>
            <input
              className="w-80 h-13 rounded-[10px] bg-[#FFFFFF]"
              type="text"
              id="eamail"
            />
            <label className="text-[#99A1AF]" htmlFor="password">
              password
            </label>
            <input
              className="w-80 h-13 rounded-[10px] bg-[#FFFFFF]"
              type="text"
              id="password"
            />
          </form>
          <button className="bg-[#00A63E] w-80 h-12 flex flex-col justify-center text-white rounded-[10px] mt-5">
            Login
          </button>
          <div className="flex ">
            <p className="text-[#99A1AF]">Already Have an account?</p>
            <p className="text-[#00A63E]">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login