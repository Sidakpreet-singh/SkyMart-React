import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { MyStore } from "../Context/MyContext";
import { useForm } from "react-hook-form";

const Login = () => {
    const {register,handleSubmit,reset,watch,formState:{errors}} = useForm();
    
  
  const {loggedUser,setLoggedUser,setIsActive,navigate,users,setIsLoggedIn} = useContext(MyStore);
  const submitHandler = (data) => {
    const user = users.find((elem) => elem.email === data.email);
   
    
    
    if(user ){
        if( user.password === data.password){
        navigate('/home');;
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn',JSON.stringify(true));
        setIsActive('home');
        setLoggedUser(user);
        reset();
        }
         else if( user.password !== data.password){
            alert('Enter valid Credentials');
         }
    }
    else {
        alert('Signup First!');
        navigate('/signup');
        reset();


    }
    
    
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
              Welcome back
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Sign in to continue shopping with SkyMart.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(submitHandler)}className="mt-8 space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email address
              </label>

              <input
                type="email"
                 {...register('email',{
        required:"email is required"
      })}
     
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
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>

 
              </div>

              <input
                type="password"
                {...register('password',{
                    required:"Password is required"
                })}
                placeholder="Enter your password"
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

            {/* Login */}
            <button
              type="submit"
              className="
                w-full rounded-xl
                bg-blue-600 py-3
                text-sm font-semibold text-white
                transition
                hover:bg-blue-700
              "
            >
              Sign In
            </button>
          </form>

          {/* Signup */}
          <p className="mt-7 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Create account
            </Link>
          </p>

          {/* Continue Shopping */}
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

export default Login;