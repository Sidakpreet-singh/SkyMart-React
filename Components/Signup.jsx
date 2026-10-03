import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { MyStore } from "../Context/MyContext";
import {useForm} from 'react-hook-form';
const Signup = () => {
  const {setIsActive,navigate,users,setUsers} =useContext(MyStore);
   const {register,handleSubmit,reset,watch,formState:{errors}} = useForm({
    mode:"onChange"
   });

   const submitHandler =(data) =>{
    setUsers((prev) =>{
        let updatedUsers =[...prev,data];
        localStorage.setItem('users',JSON.stringify(updatedUsers));
        return updatedUsers;
    });
    reset();
    navigate('/login');
    alert('User Registered Success.')
    
   }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen items-center justify-center px-6 py-10">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

          {/* Logo */}
          <div className="text-center">
            <p className="text-2xl font-bold tracking-tight text-slate-900">
              Sky<span className="text-blue-600">Mart</span>
            </p>

            <h1 className="mt-7 text-2xl font-bold text-slate-900">
              Create your account
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Join SkyMart and start shopping today.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(submitHandler)}className="mt-8 space-y-4">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full name
              </label>

              <input
                {...register('Fullname',{
                    required:"Name is required."
                })}
                type="text"
                placeholder="Sidakpreet Singh"
                className="
                  w-full rounded-xl
                  border border-slate-200
                  bg-white px-4 py-3
                  text-sm text-slate-900
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-100
                "
              />
              {errors.Fullname && (
  <p className="mt-1 text-xs text-red-500">
    {errors.Fullname.message}
  </p>
)}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email address
              </label>

              <input
              {...register("email",{
                required:"email is required",
                pattern:{
                    value:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
                    message:"Enter Valid email!"
                },
                validate:(value)=>{
                    let user = users.find((elem)=> elem.email === value);
                    if(user) {
                        return "Email already Registered!"
                    }


                }
              })}
                type="email"
                placeholder="you@example.com"
                className="
                  w-full rounded-xl
                  border border-slate-200
                  bg-white px-4 py-3
                  text-sm text-slate-900
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-100
                "
              />

{errors.email && (
  <p className="mt-1 text-xs text-red-500">
    {errors.email.message}
  </p>
)}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>

              <input
                type="password"
                {...register("password", {
  required: "Password is required",
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    message:
      "Password must contain 8+ characters, uppercase, lowercase, number and special character",
  },
})}
                placeholder="Create a password"
                className="
                  w-full rounded-xl
                  border border-slate-200
                  bg-white px-4 py-3
                  text-sm text-slate-900
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-100
                "
              />

              {errors.password && (
  <p className="mt-1 text-xs text-red-500">
    {errors.password.message}
  </p>
)}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Confirm password
              </label>

              <input
                type="password"
                {...register("confirmedPass", {
  required: "Please confirm your password",
  validate: (value) =>
    value === watch("password") || "Passwords do not match",
})}
                placeholder="Confirm your password"
                className="
                  w-full rounded-xl
                  border border-slate-200
                  bg-white px-4 py-3
                  text-sm text-slate-900
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-100
                "
              />
              {errors.confirmedPass && (
  <p className="mt-1 text-xs text-red-500">
    {errors.confirmedPass.message}
  </p>
)}
            </div>

            {/* Signup */}
            <button
              type="submit"
              className="
                mt-2 w-full rounded-xl
                bg-blue-600 py-3
                text-sm font-semibold text-white
                transition
                hover:bg-blue-700
              "
            >
              Create Account
            </button>
          </form>

          {/* Login */}
          <p className="mt-7 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Sign in
            </Link>
          </p>

          <button
            onClick={() =>{ navigate("/shop")
                setIsActive("shop");
            }}
            className="mt-4 w-full text-sm font-medium text-slate-500 hover:text-slate-900"
          >
            ← Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;