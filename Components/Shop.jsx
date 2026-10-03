import React, { useContext, useState,useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import { MyStore } from "../Context/MyContext";
import Navbar from "./Navbar";

const Shop = () => {

    const {products,setSelectedCategory,selectedCategory,searchValue,cartitems } = useContext(MyStore);
    const [range,setRange] = useState(30000);
    const [sortOption,setSortOption] = useState("Featured");
    //  console.log(selectedCategory);
     
   let filteredProducts = products.filter((product) => {
  const searchMatch = product.title
    .toLowerCase()
    .includes(searchValue.toLowerCase().trim());

  return searchMatch;
});
     
     filteredProducts =
  selectedCategory === "All Products"
    ? filteredProducts.filter((prod)=> ( prod.price) * 83 <= range)
    : filteredProducts.filter(
        (prod) => (prod.category === selectedCategory && ( prod.price) * 83 <= range)
      );
  
      let sortedProducts =[...filteredProducts];
//       console.log("Original products:", products.length);
// console.log("Filtered products:", filteredProducts.length);
       
      if(sortOption === "Top Rated" ){
        sortedProducts.sort((a,b)=> b.rating - a.rating);
      }
      else if(sortOption === "Price: Low to High"){
        sortedProducts.sort((a,b)=> a.price - b.price);

      }
      else if(sortOption === "Price: High to Low"){
        sortedProducts.sort((a,b)=> b.price - a.price);

      }
      else if (sortOption === "Low Rated") {
  sortedProducts.sort((a, b) => a.rating - b.rating);
}



      
      


      

   
      
      
    
    
    
 

  return (
    <>
    <Navbar/>
    <main className="mx-auto max-w-[1400px] px-6 py-10">

      {/* ================= HEADER ================= */}

      <div className="flex flex-col gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end md:justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Shop
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Find what you need.
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 md:text-base">
            Explore our collection of products selected for
            everyday use.
          </p>
        </div>

        {/* Sort */}

        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-500">
            Sort by
          </span>

          <select
          value={sortOption}

            onChange={(e)=>{
              
              setSortOption(e.target.value);
              
            }}
            className="
              rounded-xl
              border border-slate-200
              bg-white
              px-4 py-2.5
              text-sm
              font-medium
              text-slate-700
              outline-none
              transition
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-100
            "
          >
            <option>Featured</option>
            <option>Top Rated</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Low Rated</option>
          </select>
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="mt-8 grid gap-8 lg:grid-cols-[220px_1fr]">

        {/* ================= SIDEBAR ================= */}

        <aside className="hidden lg:block">

          <div className="sticky top-6">

            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-slate-900">
                Filters
              </h2>

              <button onClick={()=>{
                setSelectedCategory("All Products");
                setRange(5000);
                setSortOption("Featured")
              }}
              className="text-xs font-medium text-blue-600 hover:text-blue-700">
                Clear
              </button>
            </div>

            {/* Category */}

            <div className="mt-7 border-b border-slate-200 pb-6">

              <h3 className="text-sm font-semibold text-slate-900">
                Category
              </h3>

              <div className="mt-4 space-y-3">

                <label
                    key={"All Products"}
                    className="flex cursor-pointer items-center gap-3 text-sm text-slate-600"
                  >
                    <input
                      type="radio"
                      name="category"
                      checked={(selectedCategory === "All Products")}
                      onChange={(e)=>{
                        setSelectedCategory(e.target.value);
                      }}
                      value={"All Products"}

                      className="
                        h-4 w-4
                        rounded
                        border-slate-300
                        text-blue-600
                        focus:ring-blue-500
                      "
                    />

                    {"All Products"}
                  </label>

                {[
                  
                  "Mobile-accessories",
                  "Furniture",
                  "Home-decoration",
                  "Beauty",
                  "Fragrances",
                  "Groceries",
                  "Laptops",
                  "Kitchen-accessories",
                  "Mens-shirts",
                  "Mens-shoes",
                  "Mens-watches",
                  

                ].map((category) => (
                  <label
                    key={category}
                    className="flex cursor-pointer items-center gap-3 text-sm text-slate-600"
                  >
                    <input
                      type="radio"
      name="category"
      checked={(selectedCategory === category.toLowerCase())}
                      onChange={(e)=>{
                        setSelectedCategory(e.target.value);
                      }}
                      value={category.toLowerCase()}
                      className="
                        h-4 w-4
                        rounded
                        border-slate-300
                        text-blue-600
                        focus:ring-blue-500
                      "
                    />

                    {category}
                  </label>
                ))}

              </div>
            </div>

            {/* Price */}

            <div className="mt-6 border-b border-slate-200 pb-6">

              <h3 className="text-sm font-semibold text-slate-900">
                Price
              </h3>

              <div className="mt-5">

                <input
                  type="range"
                  min="100"
                  max="30000"
                  className="w-full accent-blue-600"
                  onChange={(e)=> {
                        setRange(Number(e.target.value));

                  }}
                />

                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span>₹100</span>
                  <span>₹{range}</span>
                  <span>₹30000+</span>
                </div>

              </div>
            </div>

          

          </div>
        </aside>

        {/* ================= PRODUCTS ================= */}

        <section>

          {/* Product top row */}

          <div className="mb-5 flex items-center justify-between">

            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-900">
                {sortedProducts.length}
              </span>{" "}
              products
            </p>

            {/* Mobile Filter */}

            <button
              className="
                rounded-xl
                border border-slate-200
                bg-white
                px-4 py-2
                text-sm
                font-medium
                text-slate-700
                transition
                hover:border-blue-200
                hover:bg-blue-50
                lg:hidden
              "
            >
              Filters
            </button>

          </div>

          {/* Product Grid */}

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              xl:grid-cols-3
            "
          >
           {
            
           
           
           sortedProducts.map((product) => {
            let inCart = cartitems.find((el) => el.id === product.id);
            return <ProductCard
            inCart={inCart}
    key={product.id}
    product={product}
  />

             
           }
  
)}
          </div>

        </section>

      </div>
    </main>
    </>
  );
};

export default Shop;