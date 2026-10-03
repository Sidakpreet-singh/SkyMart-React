import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../Context/MyContext";

const Categories = () => {
     const{setSelectedCategory,setIsActive,navigate} = useContext(MyStore);
    
  const categories = [
    {
      name: "Mobile Accessories",
      slug: "mobile-accessories",
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&auto=format&fit=crop",
    },
    {
      name: "Furniture",
      slug: "furniture",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop",
    },
    {
      name: "Home Decoration",
      slug: "home-decoration",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&auto=format&fit=crop",
    },
    {
      name: "Beauty",
      slug: "beauty",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop",
    },
    {
      name: "Fragrances",
      slug: "fragrances",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop",
    },
    {
      name: "Groceries",
      slug: "groceries",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop",
    },
    {
      name: "Laptops",
      slug: "laptops",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop",
    },
    {
      name: "Kitchen Accessories",
      slug: "kitchen-accessories",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop",
    },
    {
      name: "Men's Shirts",
      slug: "mens-shirts",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&auto=format&fit=crop",
    },
    {
      name: "Men's Shoes",
      slug: "mens-shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop",
    },
    {
      name: "Men's Watches",
      slug: "mens-watches",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop",
    },
  ];

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-16">

      {/* Heading */}
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Explore
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Shop by Category
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          Browse our collection by category.
        </p>
      </div>

      {/* Categories */}
      <div
       
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

        {categories.map((category) => (
          <div
           onClick={()=>{
            navigate('/shop');
            setIsActive("shop");
            setSelectedCategory(category.slug);

        }}
            key={category.slug}
            className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >

            {/* Image */}
            <div className="h-36 overflow-hidden bg-slate-50">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="px-4 py-3">
              <p className="text-sm font-semibold text-slate-900 transition-colors duration-200 group-hover:text-blue-600">
                {category.name}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Explore products
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Categories;