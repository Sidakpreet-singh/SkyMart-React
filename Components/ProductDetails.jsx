import axios from "axios";
import React, { useContext, useEffect,useState } from "react";
import { useParams } from "react-router";
import { MyStore } from "../Context/MyContext";

const ProductDetails = () => {
    const{setCartitems,cartitems,incrementQuantity,decrementQuantity,navigate,setIsActive} = useContext(MyStore);
    const {id } = useParams();
    const [product, setProduct] = useState(null);
    const[selectedImage,setSelectedImage] = useState(null);
   
    
    let inCart = cartitems.find((el) => el.id === Number(id));
    
  const getProduct = async ()=>{
    const data = await axios.get(`https://dummyjson.com/products/${id}`);
    setProduct(data.data);
    

  }
  
  
  
 useEffect(()=>{
    getProduct();

 },[]);
 
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-10">

        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 text-sm">
          <span onClick={()=>{
            navigate('/home');
            setIsActive('home');
          }}
          className="cursor-pointer text-slate-400 hover:text-blue-600">
            Home
          </span>

          <span className="text-slate-300">/</span>

          <span onClick={()=>{
            navigate('/shop');
            setIsActive('shop');
          }}
           className="cursor-pointer text-slate-400 hover:text-blue-600">
            Shop
          </span>

          <span className="text-slate-300">/</span>

          <span className="capitalize text-slate-600">
            {product?.category}
          </span>
        </div>

        {/* Product Section */}
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          {/* ================= LEFT ================= */}
          <div className="flex h-[600px] w-full items-center justify-center overflow-hidden rounded-xl bg-slate-50">
  <img
    src={product?.images?.[0]}
    alt={product?.title}
    className="h-full w-full object-contain p-12 transition-transform duration-300 hover:scale-[1.02]"
  />
</div>
         
          <div className="flex flex-col justify-center">

            {/* Category */}
            <p className="text-sm font-medium capitalize text-blue-600">
              {product?.category}
            </p>

            {/* Title */}
            <h1 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {product?.title}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">

              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>

                <span className="text-sm font-semibold text-slate-800">
                  {product?.rating}
                </span>
              </div>

              <span className="h-4 w-px bg-slate-200" />

              <span className="text-sm text-slate-500">
                {product?.stock} in stock
              </span>
            </div>

            {/* Price */}
            <div className="mt-7">
              <p className="text-3xl font-semibold tracking-tight text-slate-900">
                ₹{Math.round(product?.price * 83)}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Inclusive of all taxes
              </p>
            </div>

            {/* Description */}
            <div className="mt-8 border-t border-slate-200 pt-7">
              <h2 className="text-sm font-semibold text-slate-900">
                About this product
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                {product?.description}
              </p>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-8 flex gap-3">

              {/* Quantity */}

             {inCart ? (
  <div className="flex h-12 w-fit items-center rounded-lg border border-slate-200 bg-white">

    <button
      onClick={() => decrementQuantity(product.id)}
      className="flex h-full w-9 items-center justify-center text-lg text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
    >
      −
    </button>

    <span className="w-8 text-center text-sm font-semibold text-slate-900">
      {inCart.quantity}
    </span>

    <button
      onClick={() => incrementQuantity(product.id)}
      className="flex h-full w-9 items-center justify-center text-lg text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
    >
      +
    </button>

  </div>
) : (
  <button
   onClick={() => {
      setCartitems((prev) => {
        const updatedCart = [...prev, {...product,quantity:1}];

        localStorage.setItem(
          "cartproducts",
          JSON.stringify(updatedCart)
        );

        return updatedCart;
      });
    }}
    className="flex  h-12 w-fit items-center  rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700"
  >
    Add to Cart
  </button>
)}
            </div>
              

            {/* Product Info */}
            <div className="mt-8 grid grid-cols-3 border-y border-slate-200">

              <div className="py-4">
                <p className="text-xs text-slate-400">
                  Brand
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900">
                  {product?.brand || "SkyMart"}
                </p>
              </div>

              <div className="border-x border-slate-200 px-4 py-4">
                <p className="text-xs text-slate-400">
                  Availability
                </p>

                <p className="mt-1 text-sm font-medium text-green-600">
                  In Stock
                </p>
              </div>

              <div className="px-4 py-4">
                <p className="text-xs text-slate-400">
                  Discount
                </p>

                <p className="mt-1 text-sm font-medium text-blue-600">
                  {product?.discountPercentage}%
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ================= DETAILS ================= */}
        <section className="mt-20 border-t border-slate-200 pt-12">

          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Product Details
          </h2>

          <div className="mt-8 grid gap-x-16 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Category
              </p>

              <p className="mt-2 text-sm font-medium capitalize text-slate-900">
                {product?.category}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                SKU
              </p>

              <p className="mt-2 text-sm font-medium text-slate-900">
                {product?.sku || `SKY-${product?.id}`}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Minimum Order
              </p>

              <p className="mt-2 text-sm font-medium text-slate-900">
                {product?.minimumOrderQuantity || 1}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Warranty
              </p>

              <p className="mt-2 text-sm font-medium text-slate-900">
                {product?.warrantyInformation || "Standard"}
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
    
  );
};

export default ProductDetails;