import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../Context/MyContext";
import CartSidebar from "./CartSidebar";
import menImage from "../public/Images/man.png";

const Navbar = () => {
  
  const {isLoggedIn,setIsLoggedIn,loggedUser,setLoggedUser,isActive,setIsActive,goToCategories,navigate,setProducts,setSearchValue,showCart, setShowCart,cartitems,showProfile, setShowProfile} = useContext(MyStore);
  

 

  return (
    <nav className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-sm">
            S
          </div>

          <p className="text-2xl font-bold tracking-tight text-slate-900">
            Sky<span className="text-blue-600">Mart</span>
          </p>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-9 md:flex">

          <p onClick={()=>{
            setIsActive('home');
            navigate('/home');
           
          }}
           className= {(isActive === "home") ? "cursor-pointer text-sm font-semibold text-blue-600"
            : "cursor-pointer text-sm font-semibold text-slate-600 hover:text-blue-600"
           }>
            Home
          </p>

          <p onClick={()=>{
             setIsActive('shop');
         
            navigate('/shop');
          
          }}
          className={
            (isActive === "shop") ? "cursor-pointer text-sm font-medium text-blue-600 transition-colors duration-200 "
            :"cursor-pointer text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600"
          }>
            Shop
          </p>

          <p
            onClick={()=>{goToCategories();
               
                 setIsActive('categories');
            }}
            className={(isActive === "categories") ? "cursor-pointer text-sm font-semibold text-blue-600"
            : "cursor-pointer text-sm font-semibold text-slate-600 hover:text-blue-600"
           }
          >
            Categories
          </p>

          <p onClick={()=>{
            navigate('/about');
            
             setIsActive('about');
             
          }}
          className={(isActive === "about") ? "cursor-pointer text-sm font-semibold text-blue-600"
            : "cursor-pointer text-sm font-semibold text-slate-600 hover:text-blue-600"
           }>
            About
          </p>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <div className="hidden items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 lg:flex focus-within:border-blue-500 focus-within:bg-white">
            <span className="mr-2 text-lg text-slate-400">
              ⌕
            </span>

            <input
            onChange={(e)=>{
                setSearchValue(e.target.value);
                navigate('/shop');
                setIsActive("shop");
                  
                
            }}
              type="text"
              placeholder="Search products..."
              className="w-44 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Cart */}
          <button 
          onClick={()=>{
            setShowCart((prev)=>!prev);
          }} className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg transition-all duration-200 hover:border-blue-200 hover:bg-blue-50">
            🛒

            <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
              {cartitems.length}
            </span>
          </button>

          {/* Profile */}
         <div className="relative">
  <button
    onClick={() => setShowProfile((prev) => !prev)}
    className="
      flex h-11 w-11 items-center justify-center
      rounded-xl bg-transparent
      text-sm font-semibold text-white
      transition-all duration-200
      hover:bg-blue-600
    "
  >
    <img src={menImage} alt="Avatar" />
  </button>

  {/* Profile Popup */}
  {showProfile && (
    <div
      className="
        absolute right-0 top-14 z-50
        w-64
        rounded-xl
        border border-slate-200
        bg-white
        p-4
        shadow-lg
      "
    >
      {/* User Info */}
      <div className="flex items-center gap-3">
        {/* Fake Avatar */}
        <div
          className="
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-full
            bg-blue-100
            text-sm font-bold
            text-blue-600
          "
        >
          <img src={menImage} alt="Avatar" />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900">
            {loggedUser.Fullname || 'User'}
          </p>

          <p className="mt-0.5 truncate text-xs text-slate-500">
            {loggedUser.email || ''}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-slate-200" />

      {/* Logout */}
        { loggedUser.email ? 
      <button
        onClick={() => {
          setShowProfile(false);
          setLoggedUser({});
          setIsLoggedIn(false);
          localStorage.setItem('isLoggedIn',JSON.stringify(false));
          navigate('/login');
        }}
        className="
          flex w-full items-center gap-3
          rounded-lg
          px-3 py-2.5
          text-sm font-medium
          text-slate-600
          transition-colors duration-200
          hover:bg-red-50
          hover:text-red-600
        "
      >
        <span className="text-base">↪</span>
        Logout
      </button>
      : 
      <button
        onClick={() => {
          
         
          navigate('/login');
        }}
        className="
          flex w-full items-center gap-3
          rounded-lg
          px-3 py-2.5
          text-sm font-medium
          text-slate-600
          transition-colors duration-200
          hover:bg-red-50
          hover:text-red-600
        "
      >
        <span className="text-base">↪</span>
        Login
      </button>

      }    </div>
  )}
</div>

        </div>
      </div>
      {showCart && (
  <CartSidebar/>
)}
    </nav>
  );
};

export default Navbar;
