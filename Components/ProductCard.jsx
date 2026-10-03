import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const ProductCard = ({ product ,inCart}) => {
  
  
  
  const {setCartitems,incrementQuantity,decrementQuantity,navigate} = useContext(MyStore);
  return (
    <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">

      {/* Image */}
      <div onClick={()=> navigate(`/products/${product.id}`)}
      
      className="h-64 overflow-hidden bg-slate-50">
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="p-4">

        <p className="text-xs font-medium capitalize text-slate-500">
          {product?.category}
        </p>

        <h3 className="mt-1 line-clamp-1 text-base font-semibold text-slate-900">
          {product?.title}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm text-yellow-500">
            ★
          </span>

          <span className="text-sm font-semibold text-slate-700">
            {product?.rating}
          </span>

          <span className="text-xs text-slate-400">
            ({product?.stock} available)
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-bold text-slate-900">
            ₹{Math.round(product?.price * 83)}
          </p>

{inCart ? (
  <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-1 py-1">

    <button
      onClick={() => {
        decrementQuantity(product.id);
      }}
      className="
        flex h-7 w-7
        items-center justify-center
        rounded-md
        text-sm
        font-semibold
        text-slate-500
        transition-colors
        hover:bg-white
        hover:text-slate-900
      "
    >
      −
    </button>

    <span className="w-6 text-center text-sm font-semibold text-slate-900">
      {inCart.quantity}
    </span>

    <button
      onClick={() => {
        incrementQuantity(product.id);
      }}
      className="
        flex h-7 w-7
        items-center justify-center
        rounded-md
        text-sm
        font-semibold
        text-slate-500
        transition-colors
        hover:bg-white
        hover:text-blue-600
      "
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
    className="
      rounded-lg
      bg-blue-600
      px-4
      py-2
      text-xs
      font-semibold
      text-white
      transition-colors
      duration-200
      hover:bg-blue-700
    "
  >
    Add to Cart
  </button>
)}
        </div>

      </div>
    </div>
  );
};

export default ProductCard;