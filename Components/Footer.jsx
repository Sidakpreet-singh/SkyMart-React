import React, { useContext } from "react";
import { NavLink } from "react-router";
import { MyStore } from "../Context/MyContext";
import Categories from "./Categories";

const Footer = () => {
    const {setIsActive,goToCategories} = useContext(MyStore);
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">

      <div className="mx-auto max-w-[1400px] px-6 py-12">

        {/* Top */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">

          {/* Brand */}
          <div>
            <p className="text-2xl font-bold tracking-tight text-slate-900">
              Sky<span className="text-blue-600">Mart</span>
            </p>

            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
              Everything you need, all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Quick Links
            </p>

            <div className="mt-4 space-y-2">
            <NavLink to='/shop'>
                  <p onClick={()=>{
                    setIsActive("shop");
                  }} className="cursor-pointer text-sm text-slate-500 hover:text-blue-600">
                Shop
              </p>
            </NavLink>

             
              <p onClick={()=>{
                    setIsActive("categories");
                    goToCategories();
                  }}
              className="cursor-pointer text-sm text-slate-500 hover:text-blue-600">
                Categories
              </p>

             <NavLink to='/about'>
                 <p onClick={()=>{
                    setIsActive("about")
                  }}
                 className="cursor-pointer text-sm text-slate-500 hover:text-blue-600">
                About
              </p>
             </NavLink>
            </div>
          </div>

          {/* Support */}
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Support
            </p>

            <div className="mt-4 space-y-2">
              <p className="text-sm text-slate-500">
                Contact Us
              </p>

              <p className="text-sm text-slate-500">
                Privacy Policy
              </p>

              <p className="text-sm text-slate-500">
                Terms & Conditions
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 SkyMart. All rights reserved.
          </p>

          <p>
            Built with React
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;