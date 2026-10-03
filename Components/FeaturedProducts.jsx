import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { MyStore } from "../Context/MyContext";
import { useNavigate } from "react-router";

const FeaturedProducts = () => {
  const {products,setIsActive,navigate,cartitems } = useContext(MyStore);
  const sortedproducts =[...products];
  sortedproducts.sort((a,b) => b.rating-a.rating);
  
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-16">

      {/* Heading */}
      <div className="mb-8 flex items-end justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Featured
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Featured Products
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Discover some of our popular products.
          </p>
        </div>

        <button

        onClick={()=>{
            navigate('/shop');
            setIsActive("shop");
        }}
        
         className="hidden text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 sm:block">
          View All →
        </button>

      </div>

      {/* Products */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {sortedproducts.splice(1,4).map((product) => {
            let inCart = cartitems.find((el)=> el.id === product.id);
            return <ProductCard
            inCart={inCart}
            key={product.id}
            product={product}
          />
        })}
      </div>

    </section>
  );
};

export default FeaturedProducts;