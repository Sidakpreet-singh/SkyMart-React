import React, { useContext } from "react";
import { NavLink } from "react-router";
import { MyStore } from "../Context/MyContext";

const PromoSection = () => {
    const {setIsActive} = useContext(MyStore);
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-16">
      <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 md:grid-cols-2">

        {/* Content */}
        <div className="flex items-center px-8 py-12 md:px-12 lg:px-16">

          <div className="max-w-lg">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Summer Collection
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Upgrade your everyday essentials.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base">
              Explore our latest collection of products designed for
              everyday comfort, style and convenience.
            </p>

            <NavLink to='/shop'>
                <button onClick={()=>{
                    setIsActive('shop');
                  
                }} className="mt-7 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700">
              Explore Collection
            </button>
            </NavLink>

          </div>

        </div>

        {/* Image */}
        <div className="h-72 md:h-full">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop"
            alt="Summer collection"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default PromoSection;